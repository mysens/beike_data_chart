<template>
    <a-cascader v-model:value="value" :options="options" placeholder="请选择区域" change-on-select style="width: 280px" />
</template>
<script lang="ts" setup>
import {ref, toRefs} from 'vue';

const props = defineProps<{options:CascaderOption[]}>()
const { options } =  toRefs(props)
const value = ref<string[]>([]);
defineExpose({value})
</script>
  
  