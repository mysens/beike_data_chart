<template>
  <a-layout-footer :style="{ textAlign: 'center', backgroundColor: '#23282d', padding: '0, 20px', color: '#8e8e8e' }">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="social">
            <a target="_blank" rel="nofollow" href="https://github.com/mysens"><i class="kicon i-github"></i></a><a
              target="_blank" rel="nofollow" href="mysens@126.com"><i class="kicon i-email"></i></a>
          </p>
          <p>COPYRIGHT © {{ currentYear }} 麒麟臂不服不行. ALL RIGHTS RESERVED.</p>
          <!-- <p>数据来源贝壳网</p> -->
          <p><a style="color:#8e8e8e" href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">鄂ICP备18005036号</a>
          </p>
          <p><a style="color:#8e8e8e" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010602004698"
              target="_blank" rel="nofollow"><i class="police-ico"></i>鄂公网安备 42010602004698号</a></p>
        </div>
      </div>
    </div>
  </a-layout-footer>
</template>
<script lang="ts" setup>

const currentYear = new Date().getFullYear();
</script>

<style scoped>
p .police-ico {
  display: inline-block;
  margin-top: -4px;
  margin-right: 6px;
  width: 14px;
  height: 1pc;
  background: url(https://cdn.jsdelivr.net/gh/seatonjiang/kratos@v4.2.1/assets/img/police-ico.png) 0 0 no-repeat;
  vertical-align: middle;
}
</style>