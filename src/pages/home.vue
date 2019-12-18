<template>
  <div class="home">
    <qriously
      :value="value"
      :size="size"
      :backgroundAlpha="backgroundAlpha"
      style=" width:150px;margin: auto"
    />
    <div style="text-align: center">扫码下载快游app</div>
  </div>
</template>
<script>
// import vueQr from "vue-qr";
// import Clipboard from "clipboard";
export default {
  name: "app",
  data() {
    return {
      value:
        "https://wxz.myapp.com/16891/apk/18D646313220E82A75D82CDB72931158.apk?fsname=com.chadianwang.chashangcheng_2.22.1_111342.apk&hsr=4d5s",

      size: 150,

      backgroundAlpha: 1
    };
  }
};
</script>
<style lang="scss" scoped>
</style>