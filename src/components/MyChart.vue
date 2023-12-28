<template>
    <div class="my-chart" ref="container" style="width: 100%; height: 100%"></div>
</template>


<script setup lang="ts">
import { echarts, type ECOption } from '@/util/echart'
import { ref, onMounted } from 'vue'
import {type EChartsType} from 'echarts/core';

const container = ref()

var myChart: EChartsType

onMounted(()=> {
    myChart = echarts.init(container.value);
})

function updateEchart(optionParam: ECOption) {
    myChart.setOption(optionParam);
}

defineExpose({updateEchart})
</script>


