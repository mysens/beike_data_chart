FROM nginx:stable

WORKDIR /var/www/html 

RUN sed -i "s@http://\(deb\|security\).debian.org@https://mirrors.cloud.tencent.com@g" /etc/apt/sources.list &&\
  apt-get update && \
  apt-get autoremove && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY default.conf /etc/nginx/default.conf

COPY dist dist