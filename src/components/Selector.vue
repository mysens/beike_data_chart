<template>
    <a-cascader class="cascader" v-model:value="value" :options="options" placeholder="请选择区域" change-on-select />
</template>
<script lang="ts" setup>
import { ref, toRefs } from 'vue';

const props = defineProps<{ options: CascaderOption[] }>()
const { options } = toRefs(props)
const value = ref<string[]>([]);
defineExpose({ value })
</script>

<style scoped>
.cascader {
    width: 280px
}

@media (max-width: 600px) {
    .cascader {
        width: 100%
    }
}
</style>
  
  