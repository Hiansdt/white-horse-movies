<script setup>

import { onMounted, ref, watch} from 'vue'
import { RouterLink } from 'vue-router';
import quotesApi from '../api/quotes.js';
import FooterComponentVue from '../components/FooterComponent.vue';

const dailyQuote = ref()

const options = ref(['ANGRY', 'ANXIOUS', 'SAD', 'UNMOTIVATED', 'BORED', 'HAPPY', 'EXCITED'])

const mainBackground = ref('')

const currentHover = ref('')

async function getquotes() {
  dailyQuote.value = await quotesApi.getQuotes('happiness');
}

onMounted(() => {
  getquotes();
})

</script>

<template>
  <div :class="mainBackground !== '' ? `background ${mainBackground}` : `background`"></div>
  <main :class="mainBackground !== '' ? 'whiteMain' : null" v-if="dailyQuote">
    <header>
      <h1>How are you feeling right now?</h1>
    </header>
    <div :class="`dayQuote ${mainBackground}quote`">
        <p>" {{ dailyQuote[0].quote }} " </p>
        <p>- {{ dailyQuote[0].author }}</p>
    </div>
    <div class="options">
      <router-link :to="'/' + option.toLowerCase()" class="option optionGlow"
        :id="mainBackground == option ? 'current' : mainBackground == '' ? null : 'notCurrent'"
        v-for="option, index in options" :key="index" @mouseover="mainBackground = option, currentHover = option"
        @mouseleave="mainBackground = '', currentHover = ''">
        <span>{{ option }}</span>
      </router-link>
    </div>
    <footer-component-vue :class="(currentHover !== '' ? 'hovered footer' : 'footer')" :currentHover="currentHover" />
  </main>
</template>

<style>
main {
  transition: all 0.35s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 99.9%;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.whiteMain {
  color: white;
}

.background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.35s ease-in-out;
}

@keyframes backgroundCircle {
  0% {
    left: 50%;
    top: 40%;
    width: 0px;
    height: 0px;
    border-radius: 100%;
  }

  100% {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

#notCurrent {
  color: white;
  border: 1px solid white;
}

.ANGRY {
  color: white;
  background-color: rgb(134, 24, 24);
}

.ANXIOUS {
  color: white;
  background-color: rgb(48, 6, 95);
}

.SAD {
  color: white;
  background-color: rgb(24, 103, 134);
}

.UNMOTIVATED {
  color: white;
  background-color: rgb(70, 7, 7);
}

.BORED {
  color: white;
  background-color: rgb(21, 35, 54);
}

.HAPPY {
  color: rgb(255, 255, 255);
  background-color: #d49c00;
}

.EXCITED {
  color: white;
  background-color: rgb(194, 78, 0);
}

h1 {
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  font-weight: 600;
  font-size: x-large;
}

img {
  width: 45px;
}

h2 {
  font-weight: 400;
  font-size: large;
  color: rgb(255, 255, 255);
  text-align: center;
}

p {
  font-size: large;
  font-weight: 500;
}

.dayQuote {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 80%;
  row-gap: 10px;
  text-align: center;
  transition: all 0.35s ease-out;
  background-color: rgb(235, 235, 235);
  box-shadow: -15px -20px rgb(65, 65, 65);
}

hr {
  width: 100%;
}

.ANGRYquote {
  background-color: rgb(158, 24, 24);
  box-shadow: 15px 20px rgb(26, 0, 0);
}

.ANXIOUSquote {
  background-color: rgb(69, 11, 136);
  box-shadow: 15px 20px rgb(28, 0, 31);
}

.SADquote {
  background-color: rgb(30, 126, 163);
  box-shadow: 15px 20px rgb(0, 19, 32);
}

.UNMOTIVATEDquote {
  background-color: rgb(94, 9, 9);
  box-shadow: 15px 20px rgb(28, 0, 0);
}

.BOREDquote {
  background-color: rgb(29, 49, 77);
  box-shadow: 15px 20px rgb(0, 0, 0);
}

.HAPPYquote {
  background-color: rgb(255, 166, 0);
  box-shadow: 15px 20px rgb(34, 27, 0);
}

.EXCITEDquote {
  background-color: rgb(219, 90, 4);
  box-shadow: 15px 20px rgb(34, 27, 0);
}

.options {
  display: flex;
  position: absolute;
  top: 45%;
  gap: 2%;
  justify-content: center;
  width: 100%;
  height: fit-content;
}

.option {
  border: 1px solid rgb(184, 184, 184);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 11%;
  height: 20vh;
  cursor: pointer;
  transition: all 0.35s ease-out;
}

.option:hover {
  border: 1px solid white;
  transform: scale(1.1);
  color: white;
  transition: all 0.35s ease-out;
}

.option>span {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.options> :nth-child(1):hover {
  background-color: #ff0040;
  /* c40031 */
  animation: 1s infinite optionGlow1;
}

.options> :nth-child(2):hover {
  background-color: #6800ca;
  /* c4c100 */
  animation: 1s infinite optionGlow2;
}

.options> :nth-child(3):hover {
  background-color: #0098b3;
  /* c40031 */
  animation: 1s infinite optionGlow3;
}

.options> :nth-child(4):hover {
  background-color: #552e2e;
  /* rgb(253, 95, 33) */
  animation: 1s infinite optionGlow4;

}

.options> :nth-child(5):hover {
  background-color: #1a4050;
  /* 1a4050 */
  animation: 1s infinite optionGlow5;

}

.options> :nth-child(6):hover {
  background-color: #e4e400;
  /* 552e2e */
  animation: 1s infinite optionGlow6;

}

.options> :nth-child(7):hover {
  background-color: rgb(255, 88, 22);
  /* 4d0c8a */
  animation: 1s infinite optionGlow7;
}

.footer>button:hover {
  background-color: rgb(223, 223, 223);
  box-shadow: 5px 5px #000000;
}

.footer>button {
  transition: all 0.35s ease-in-out;
}

.hovered>button {
  color: white;
}

@keyframes optionGlow3 {
  0% {
    box-shadow: 1px 1px 15px #005f66;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(0, 183, 255);
  }

  100% {
    box-shadow: 1px 1px 15px #005f66;
  }
}

@keyframes optionGlow6 {
  0% {
    box-shadow: 1px 1px 15px #ffc583;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(255, 236, 151);
  }

  100% {
    box-shadow: 1px 1px 15px #ffc583;
  }
}

@keyframes optionGlow1 {
  0% {
    box-shadow: 1px 1px 15px #e40031;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(255, 120, 120);
  }

  100% {
    box-shadow: 1px 1px 15px #e40031;
  }
}

@keyframes optionGlow7 {
  0% {
    box-shadow: 1px 1px 15px #ff2600;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(255, 173, 118);
  }

  100% {
    box-shadow: 1px 1px 15px #ff2600;
  }
}

@keyframes optionGlow5 {
  0% {
    box-shadow: 1px 1px 15px #052455;
  }

  50% {
    box-shadow: 1px 1px 20px #5c7079;
  }

  100% {
    box-shadow: 1px 1px 15px #052455;
  }
}

@keyframes optionGlow4 {
  0% {
    box-shadow: 1px 1px 15px #2c1410;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(146, 58, 58);
  }

  100% {
    box-shadow: 1px 1px 15px #3a1b15;
  }
}

@keyframes optionGlow2 {
  0% {
    box-shadow: 1px 1px 15px #442164;
  }

  50% {
    box-shadow: 1px 1px 20px #8400ff;
  }

  100% {
    box-shadow: 1px 1px 15px #442164;
  }
}

@keyframes navigationScale {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.15);
  }
}</style>
