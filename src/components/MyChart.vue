<template>
    <div class="my-chart" ref="container" style="width: 100%; height: 250px">
        <a-empty :image-style="{ height: '200px' }" description="暂无数据"></a-empty>
    </div>
</template>


<script setup lang="ts">
import { echarts, type ECOption } from '@/util/echart'
import { ref } from 'vue'
import { type EChartsType } from 'echarts/core';

const container = ref()

var myChart: EChartsType

const init = false
// onMounted(()=> {
//     myChart = echarts.init(container.value);
// })

function updateEchart(optionParam: ECOption) {
    if (!init) {
        myChart = echarts.init(container.value);
    }
    myChart.setOption(optionParam);
}

defineExpose({ updateEchart })
</script>


