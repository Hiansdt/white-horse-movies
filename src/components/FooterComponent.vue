<script setup>

import { onMounted, ref, defineProps, computed} from 'vue'

const props = defineProps({
  currentHover: String
})

const currentHover = computed(() => props.currentHover)
</script>

<template>
    <footer>
      <button>Movies</button>
      <button>API's</button>
      <button>About</button>
      <a href="https://github.com/Hiansdt" :class="currentHover !== '' ? 'git white' : 'git dark'" target="_blank"></a>
    </footer>
</template>

<style >

@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

.git {
  position: absolute;
  right: 25px;
  bottom: 6px;
  width: 45px;
  height: 45px;
  cursor: pointer ;
  transition: all 0.35s ease-in-out;
}

footer {
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 5vh;
  display: flex;
  gap: 5%;
}

.git:hover {
  transform: scale(1.15);
}

.white {
  background-image: url('../../public/horse_white.png');
  background-size: cover;
}

.dark {
  background-image: url('../../public/horse_dark.png');
  background-size: cover;
}


button {
  width: 5%;
  height: 100%;
  border: none;
  padding: none;
  background-color: #00000000;
  font-weight: 600;
  font-size: small;
  cursor: pointer;
  margin-left: 2%;
  font-family: "Rajdhani",Helvetica;
}

button:hover {
  transform: scale(1.05);
  animation: 0.3s forwards navigationScale;
}

</style>