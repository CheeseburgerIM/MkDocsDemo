<template>
  <div id="CuteRabbit">
    <div class="rabbit">
      <div class="rabbit__leg rabbit__leg--one"></div>
      <div class="rabbit__leg rabbit__leg--two"></div>
      <div class="rabbit__tail"></div>
      <div class="rabbit__body"></div>
      <div class="rabbit__leg rabbit__leg--three"></div>
      <div class="rabbit__leg rabbit__leg--four"></div>
      <div class="rabbit__ear rabbit__ear--right"></div>
      <div class="rabbit__head"></div>
      <div class="rabbit__ear rabbit__ear--left"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CuteRabbit",
};
</script>

<style scope>
#CuteRabbit {
  width: 100%;
  height: 200px;
  background: #e2b29f;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rabbit {
  position: relative;
}
.rabbit .rabbit__body {
  width: 4em;
  height: 5.6em;
  background: #f4f4f4;
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  transform: rotate(-40deg);
  box-shadow: inset -2.3em -2.7em 0 0 #d2daee;
}
.rabbit .rabbit__head {
  position: absolute;
  width: 4em;
  height: 4.6em;
  top: -2.5em;
  left: -2em;
  background: #e1e6f4;
  border-radius: 50% 50% 50% 50%/65% 60% 40% 35%;
  transform: rotate(-120deg);
  overflow: hidden;
}
.rabbit .rabbit__head:before {
  content: "";
  position: absolute;
  width: 0.65em;
  height: 0.5em;
  top: -0.1em;
  left: 1.8em;
  background: #f97996;
  border-radius: 50% 50% 50% 50%/30% 30% 70% 70%;
  transform: rotate(130deg);
}
.rabbit .rabbit__head:after {
  content: "";
  position: absolute;
  width: 1em;
  height: 1em;
  top: 1.5em;
  left: 1.6em;
  background: #f4f4f4;
  border-radius: 50%;
  box-shadow: inset 0.1em 0.15em 0 0.37em #3d261c;
}
.rabbit .rabbit__ear {
  position: absolute;
  border-radius: 50% 50% 50% 50%/40% 40% 60% 60%;
  transform-origin: 50% 100%;
}
.rabbit .rabbit__ear--left {
  width: 2.2em;
  height: 4.7em;
  top: -5.7em;
  left: -0.2em;
  background: #f3e3de;
  transform: rotate(40deg);
  box-shadow: inset 0.3em -0.4em 0 -0.1em #c7d1ea;
  -webkit-animation: ear-left 5s infinite ease-out;
  animation: ear-left 5s infinite ease-out;
}
.rabbit .rabbit__ear--right {
  width: 2em;
  height: 4.7em;
  top: -5.5em;
  left: -0.7em;
  background: #d2daee;
  transform: rotate(10deg);
  -webkit-animation: ear-right 5s infinite ease-out;
  animation: ear-right 5s infinite ease-out;
}
.rabbit .rabbit__leg {
  position: absolute;
}
.rabbit .rabbit__leg--one {
  width: 0.8em;
  height: 3em;
  top: 2.3em;
  left: 0.2em;
  background: #c7d1ea;
  border-radius: 50% 50% 50% 50%/30% 30% 70% 70%;
  transform-origin: 50% 0%;
  transform: rotate(15deg);
}
.rabbit .rabbit__leg--one:before {
  content: "";
  position: absolute;
  width: 0.8em;
  height: 0.5em;
  top: 2.6em;
  left: -0.2em;
  background: #c7d1ea;
  border-radius: 50% 50% 50% 50%/70% 70% 30% 30%;
  transform: rotate(-10deg);
}
.rabbit .rabbit__leg--three {
  width: 0.9em;
  height: 3em;
  top: 2.4em;
  left: 0.7em;
  background: #e1e6f4;
  border-radius: 50% 50% 50% 50%/30% 30% 70% 70%;
  transform-origin: 50% 0%;
  transform: rotate(10deg);
}
.rabbit .rabbit__leg--three:before {
  content: "";
  position: absolute;
  width: 0.8em;
  height: 0.5em;
  top: 2.6em;
  left: -0.2em;
  background: #e1e6f4;
  border-radius: 50% 50% 50% 50%/70% 70% 30% 30%;
  transform: rotate(-10deg);
}
.rabbit .rabbit__leg--two {
  width: 2.6em;
  height: 3.6em;
  top: 1.7em;
  left: 1.6em;
  background: #c7d1ea;
  border-radius: 50% 50% 50% 50%/50% 50% 50% 50%;
  transform-origin: 50% 0%;
  transform: rotate(10deg);
}
.rabbit .rabbit__leg--two:before {
  content: "";
  position: absolute;
  width: 1.6em;
  height: 0.8em;
  top: 3.05em;
  left: 0em;
  background: #c7d1ea;
  border-radius: 50% 50% 50% 50%/70% 70% 30% 30%;
  transform: rotate(-10deg);
}
.rabbit .rabbit__leg--four {
  width: 2.6em;
  height: 3.6em;
  top: 1.8em;
  left: 2.1em;
  background: #e1e6f4;
  border-radius: 50% 50% 50% 50%/50% 50% 50% 50%;
  transform-origin: 50% 0%;
  transform: rotate(10deg);
}
.rabbit .rabbit__leg--four:before {
  content: "";
  position: absolute;
  width: 1.6em;
  height: 0.8em;
  top: 3.05em;
  left: 0em;
  background: #e1e6f4;
  border-radius: 50% 50% 50% 50%/70% 70% 30% 30%;
  transform: rotate(-10deg);
}
.rabbit .rabbit__tail {
  position: absolute;
  width: 0.9em;
  height: 0.9em;
  top: 3.7em;
  left: 4em;
  background: #d2daee;
  transform: rotate(25deg);
}
.rabbit .rabbit__tail:after,
.rabbit .rabbit__tail:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #d2daee;
  border-radius: 50%;
}
.rabbit .rabbit__tail:before {
  top: 0;
  left: -50%;
}
.rabbit .rabbit__tail:after {
  top: 50%;
  left: 0;
}

@-webkit-keyframes ear-left {
  0%,
  20%,
  100% {
    transform: rotate(40deg);
  }
  10%,
  30%,
  80% {
    transform: rotate(45deg);
  }
  90% {
    transform: rotate(50deg);
  }
}

@keyframes ear-left {
  0%,
  20%,
  100% {
    transform: rotate(40deg);
  }
  10%,
  30%,
  80% {
    transform: rotate(45deg);
  }
  90% {
    transform: rotate(50deg);
  }
}
@-webkit-keyframes ear-right {
  0%,
  20%,
  100% {
    transform: rotate(10deg);
  }
  10%,
  30%,
  80% {
    transform: rotate(5deg);
  }
  90% {
    transform: rotate(0deg);
  }
}
@keyframes ear-right {
  0%,
  20%,
  100% {
    transform: rotate(10deg);
  }
  10%,
  30%,
  80% {
    transform: rotate(5deg);
  }
  90% {
    transform: rotate(0deg);
  }
}
</style>