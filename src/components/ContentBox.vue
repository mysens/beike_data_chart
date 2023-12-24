<template>
    <div class="content">
        <a-flex wrap="wrap" gap="small">
            <a-space>
                <div class="content-box" v-for="(item, index) in list" :key="item.id">
                    <a-space direction="vertical" size="middle">
                        <a-flex :vertical="false">
                            <a-space :size="10">
                                <Selector />
                                <a-button type="primary" :loading="item.iconLoading" @click="queryData(item)">
                                    <template #icon>
                                        <PoweroffOutlined />
                                    </template>
                                    查询
                                </a-button>
                                <a-button type="primary" danger>删除</a-button>
                                
                            </a-space>

                        </a-flex>
                        <MyEchart style="height: 280px" />
                    </a-space>
                </div>
                <div class="content-box">
                    <div class="box">
                        <div class="plus"></div>
                    </div>
                </div>
            </a-space>
        </a-flex>
    </div>
</template>

<script lang="ts" setup >
import { reactive, ref } from 'vue';
import Selector from './Selector.vue'
import MyEchart from './MyChart.vue'
import { PoweroffOutlined } from '@ant-design/icons-vue';



import request from '../util/request'

request({
  url: "/v1/area/info",
}).then(res => {
  console.log('res-------------', res);

}).catch(err => {
  console.log('err------------', err);

})

let default_item = reactive({
    id: 1,
    iconLoading: false
})

let list = [default_item]

const queryData = (item: any) => {
    item.iconLoading = true;

    setTimeout(() => {
        item.iconLoading = false;
    }, 6000);
};

</script>

<style scoped>
/* .content {
    padding: 0 50px;
} */

.content-box {
    width: 500px;
    height: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid rgba(5, 5, 5, 0.06);
}

.box {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    position: relative;
}

.plus {
    width: 15px;
    height: 2px;
    padding: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.plus::before,
.plus::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: #333;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.plus::before {
    transform: translate(-50%, -50%) rotate(-90deg);
}
</style>