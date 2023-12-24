<template>
    <div class="logo" />
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import { AccountBookOutlined, UserOutlined, CrownOutlined } from '@ant-design/icons-vue';
import { type MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['second_price']);
const items = ref<MenuProps['items']>([
    {
        key: 'second_price',
        icon: () => h(AccountBookOutlined),
        label: '二手均价',
        title: '二手均价',
    },
    {
        key: 'popular',
        icon: () => h(UserOutlined),
        label: '带看人气',
        title: '带看人气',
    },
    {
        key: 'hot_house',
        icon: () => h(CrownOutlined),
        label: '热门楼盘',
        title: '热门楼盘',
    }
]);
</script>
<style scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
</style>
  