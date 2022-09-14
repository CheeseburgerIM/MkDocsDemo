<template>
  <APlayer :class="className" />
  <RabbitJump :class="className" />
  <CuteRabbit :style="'animation:' + className" />
  <button @click="animate">test</button>
</template>

<script>
import APlayer from "./components/APlayer.vue";
import RabbitJump from "./components/RabbitJump.vue";
import CuteRabbit from "./components/CuteRabbit.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "App",
  components: {
    APlayer,
    RabbitJump,
    CuteRabbit,
  },
  setup() {
    var className = ref();
    className.value = "animate__flash";
    function animate() {
      className.value = "animate__flash";
    }
    return {
      className,
      animate,
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
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
button {
  display: block;
  text-align: center;
  margin: 10px auto;
  font-size: 30px;
  padding: 10px;
}
</style>
