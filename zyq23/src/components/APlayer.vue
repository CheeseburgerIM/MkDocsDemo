<template>
  <div class="aplayer-container" ref="ap"></div>
</template>

<script>
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";
import { ref, onMounted } from "vue";

export default {
  name: "APlayer",
  setup() {
    var ap = ref(null);
    const prefix = window.location.pathname;
    onMounted(() => {
      new APlayer({
        container: ap.value,
        fixed: false,
        listFolded: true,
        autoplay: true,
        preload: "auto",
        loop: "one",
        order: "list",
        lrcType: 3,
        volume: 0.23,
        audio: [
          {
            name: "最好的礼物",
            artist: "李金铭",
            url: prefix + "/music.mp3",
            cover: prefix + "/PeanutGirl.jpg",
            lrc: prefix + "/music.lrc",
            theme: "rgb(127, 218, 180)",
          },
        ],
      });
    });
    return {
      ap,
    };
  },
};
</script>

<style scoped>
</style>