<template>
  <APlayer />
  <RabbitJump />
  <CuteRabbit />
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
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
