<template>
    <div class="logo" />

    <!-- <a-menu-item key="second-house-deal">
            <template #icon>
                <ProjectOutlined />
            </template>
            <router-link :to="{ name: 'deal' }" custom v-slot="{ navigate }">二手成交</router-link>
        </a-menu-item> -->
    <!-- 二手成交 -->
    <!-- <span @click="navigate" @keypress.enter="navigate" role="link">用户管理</span> -->

    <a-menu v-model:selectedKeys="current" mode="horizontal">
        <router-link :to="{ name: 'deal' }" custom v-slot="{ navigate } ">
            <a-menu-item @click="navigate" key="second-house-deal">
                <template #icon>
                    <ProjectOutlined />
                </template>
                二手成交
            </a-menu-item>
        </router-link>
        <router-link :to="{ name: 'hot' }" custom v-slot="{ navigate } ">
            <a-menu-item @click="navigate" key="second-house-hot">
                <template #icon>
                    <UserOutlined />
                </template>
                带看人气
            </a-menu-item>
        </router-link>
    </a-menu>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import { ProjectOutlined, UserOutlined, CrownOutlined } from '@ant-design/icons-vue';
import { type MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['second-house-deal']);
const items = ref<MenuProps['items']>([
    {
        key: 'second_price',
        icon: () => h(ProjectOutlined),
        label: '二手成交',
        title: '二手成交',
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
  