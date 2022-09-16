<template>
  <div id="aplayer-container">
    <div ref="ap"></div>
  </div>
  <Teleport to="body">
    <p>APlayer</p>
  </Teleport>
</template>

<script>
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "APlayer",
  setup() {
    var ap = ref(null);
    const prefix = window.location.pathname;
    var aplayer;
    onMounted(() => {
      aplayer = new APlayer({
        container: ap.value,
        fixed: false,
        listFolded: true,
        autoplay: false,
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
      aplayer.pause();
      var store = useStore();
      watch(
        () => store.state.aplayer_state,
        (newValue, oldValue) => {
          store.state.aplayer_state = newValue;
          aplayer.play();
        }
      );
    });
    return {
      ap,
    };
  },
};
</script>

<style scoped>
#aplayer-container {
  position: absolute;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 17px;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  z-index: 888;
}
</style>