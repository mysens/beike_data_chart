<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <Header />
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <ContentBox />
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-space>
</template>
<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ContentBox from './components/ContentBox.vue'

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  paddingInline: 50,
  color: '#fff',
  backgroundColor: '#fff',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
};

</script>