<script setup>

import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
import quotesApi from '../api/quotes.js';
import FooterComponentVue from '../components/FooterComponent.vue';

const QuotesApi = new quotesApi();

const dailyQuote = ref()

const options = ref(['ANGRY', 'ANXIOUS', 'SAD', 'UNMOTIVATED', 'BORED', 'HAPPY', 'EXCITED'])

const mainBackground = ref('')

const currentHover = ref('')

async function getquotes() {
  dailyQuote.value = await QuotesApi.getQuotes('happiness');
}

onMounted(() => {
  getquotes()
})

</script>

<template>
  <main :class="mainBackground">
    <header>
      <h1>How are you feeling right now?</h1>
      <a href="https://github.com/Hiansdt" class="git" target="_blank"><img src="../../public/horse.png" alt=""></a>
      <hr>
    </header>
    <div class="dayQuote">
      <br>
      <div class="quoteAuthor" v-if="dailyQuote">
        <p>" {{ dailyQuote[0].quote }} " </p>
        <p>- {{ dailyQuote[0].author }}</p>
      </div>
    </div>
    <div class="options">
      <router-link :to="'/' + option.toLowerCase()" :class="currentHover == option ? 'option optionGlow current' : currentHover == '' ? 'option optionGlow' : 'option optionGlow notCurrent'" v-for="option, index in options" :key="index" @mouseover="mainBackground = option, currentHover = option" @mouseleave="mainBackground = '', currentHover = ''">
          <span>{{ option }}</span>
      </router-link>
    </div>
  <footer-component-vue/>
  </main>
</template>

<style>
main {
  transition: all 0.35s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 99.9%;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
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

.notCurrent {
   color: white;
}

.ANGRY {
 color: white;
 background-color: rgb(145, 0, 0);
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

.git {
  position: absolute;
  right: 25px;
  top: 6px;
  cursor: pointer ;
}

.git:hover {
  transform: scale(1.05);
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
  align-items: center;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.dayQuote> :nth-child(2) {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
}

.dayQuote> :nth-child(2)> :nth-child(1) {
  margin-right: 1%;
}

hr {
  width: 100%;
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
  border: 1px solid rgb(168, 168, 168);
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

.option > span {
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


@keyframes optionGlow3 {
  0% {
    box-shadow: 1px 1px 15px #07737a;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(0, 183, 255);
  }

  100% {
    box-shadow: 1px 1px 15px #07737a;
  }
}

@keyframes optionGlow6 {
  0% {
    box-shadow: 1px 1px 15px #fff783;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(255, 208, 0);
  }

  100% {
    box-shadow: 1px 1px 15px #fff783;
  }
}

@keyframes optionGlow1 {
  0% {
    box-shadow: 1px 1px 15px #b82d4b;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(255, 0, 0);
  }

  100% {
    box-shadow: 1px 1px 15px #b82d4b;
  }
}

@keyframes optionGlow7 {
  0% {
    box-shadow: 1px 1px 15px #be5828;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(255, 72, 0);
  }

  100% {
    box-shadow: 1px 1px 15px #be5828;
  }
}

@keyframes optionGlow5 {
  0% {
    box-shadow: 1px 1px 15px #424242;
  }

  50% {
    box-shadow: 1px 1px 20px #425157;
  }

  100% {
    box-shadow: 1px 1px 15px #424242;
  }
}

@keyframes optionGlow4 {
  0% {
    box-shadow: 1px 1px 15px #9b3624;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(43, 23, 23);
  }

  100% {
    box-shadow: 1px 1px 15px #9b3624;
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
}
</style>
