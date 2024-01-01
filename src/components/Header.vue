<template>
    <!-- <div class="logo" /> -->
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
</script>
<style scoped>
/* .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background-image: "logo.jpg";
} */
</style>
  