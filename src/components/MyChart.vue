<template>
    <div id="my-chart" ref="container" style="width: 100%; height: 100%"></div>
</template>


<script setup lang="ts">
import { ref, inject, onMounted } from 'vue';

const container = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
onMounted(
    () => {
        init()
    }
)

function init() {
    // 通过 inject 接收Echarts
    const Echarts = inject<any>('$echarts');
    var myChart = Echarts.init(container.value);

    const option = {
        title: {
            text: '近7日均价',
            textStyle: {
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'bold',
                //字体系列
                fontFamily: 'sans-serif',
                //字体大小
                fontSize: 18
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
        ]
    };

    option && myChart.setOption(option);


}
</script>


