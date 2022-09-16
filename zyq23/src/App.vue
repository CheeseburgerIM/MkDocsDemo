<template>
  <RabbitJump />
  <CuteRabbit />
  <APlayer />
  <div id="content">
    <a :href="prefix + 'Gallery.html'" target="_blank">Gallery</a>
  </div>
</template>

<script>
import APlayer from "./components/APlayer.vue";
import RabbitJump from "./components/RabbitJump.vue";
import CuteRabbit from "./components/CuteRabbit.vue";

export default {
  name: "App",
  components: {
    APlayer,
    RabbitJump,
    CuteRabbit,
  },
  setup() {
    var prefix = window.location.pathname;
    return {
      prefix,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
button {
  display: block;
  text-align: center;
  margin: 10px auto;
  font-size: 30px;
  padding: 10px;
}
#content {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 170px;
  text-align: center;
  color: #077aff;
}
#content * {
  text-decoration: none;
  font-size: 20px;
  color: #077aff;
}
</style>
