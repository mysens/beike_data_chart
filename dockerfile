FROM node:20.10-alpine as builder

RUN set -ex \
    && sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && apk --no-cache add ca-certificates \
    && npm config set registry https://registry.npm.taobao.org

WORKDIR /build

COPY . /build/chart

RUN cd chart && npm i && npm run build

FROM nginx:stable

WORKDIR /var/www/html 

RUN sed -i "s@http://\(deb\|security\).debian.org@https://mirrors.cloud.tencent.com@g" /etc/apt/sources.list &&\
  apt-get update && \
  apt-get autoremove && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY default.conf /etc/nginx/default.conf

COPY --from=builder /build/dist ./dist