<script setup>

import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
import quotesApi from '../api/quotes.js';
import FooterComponentVue from '../components/FooterComponent.vue';

const QuotesApi = new quotesApi();

const dailyQuote = ref()

const options = ref(['SAD', 'HAPPY', 'ANGRY', 'EXCITED', 'BORED', 'UNMOTIVATED', 'ANXIOUS'])

async function getquotes() {
  dailyQuote.value = await QuotesApi.getQuotes('happiness');
}

onMounted(() => {
  getquotes()
})

</script>

<template>
  <main>
    <h1>How are you feeling right now?</h1>
    <hr>
    <div class="dayQuote">
      <h2>QUOTE OF THE DAY</h2>
      <div class="quoteAuthor" v-if="dailyQuote">
        <p>" {{ dailyQuote[0].quote }} " </p>
        <p>- {{ dailyQuote[0].author }}</p>
      </div>
    </div>
    <div class="options">
      <router-link :to="'/' + option.toLowerCase()" class="option optionGlow" v-for="option, index in options" :key="index">
          <span>{{ option }}</span>
      </router-link>
    </div>
  <footer-component-vue/>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

h1 {
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: 600;
  font-size: x-large;
}

h2 {
  font-weight: 400;
  font-size: large;
  color: aliceblue;
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
}

.option:hover {
  border: 1px solid white;
  color: white;
}

.option > span {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.options> :nth-child(1):hover {
  background-color: #006a7c;
  animation: 1s infinite optionGlow1;
}

.options> :nth-child(2):hover {
  background-color: #c4c100;
  animation: 1s infinite optionGlow2;
}

.options> :nth-child(3):hover {
  background-color: #c40031;
  animation: 1s infinite optionGlow3;
}

.options> :nth-child(4):hover {
  background-color: rgb(253, 95, 33);
  animation: 1s infinite optionGlow4;

}

.options> :nth-child(5):hover {
  background-color: #1a4050;
  animation: 1s infinite optionGlow5;

}

.options> :nth-child(6):hover {
  background-color: #552e2e;
  animation: 1s infinite optionGlow6;

}

.options> :nth-child(7):hover {
  background-color: #4d0c8a;
  animation: 1s infinite optionGlow7;
}


@keyframes optionGlow1 {
  0% {
    box-shadow: 1px 1px 10px #0ec1ce;
  }

  50% {
    box-shadow: 1px 1px 15px rgb(131, 213, 245);
  }

  100% {
    box-shadow: 1px 1px 10px #0ec1ce;
  }
}

@keyframes optionGlow2 {
  0% {
    box-shadow: 1px 1px 10px #cec10e;
  }

  50% {
    box-shadow: 1px 1px 15px rgb(245, 224, 131);
  }

  100% {
    box-shadow: 1px 1px 10px #cec10e;
  }
}

@keyframes optionGlow3 {
  0% {
    box-shadow: 1px 1px 10px #ce0e38;
  }

  50% {
    box-shadow: 1px 1px 15px rgb(245, 131, 131);
  }

  100% {
    box-shadow: 1px 1px 10px #ce0e38;
  }
}

@keyframes optionGlow4 {
  0% {
    box-shadow: 1px 1px 10px #ff5506;
  }

  50% {
    box-shadow: 1px 1px 15px rgb(255, 122, 70);
  }

  100% {
    box-shadow: 1px 1px 10px #ff5506;
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

@keyframes optionGlow6 {
  0% {
    box-shadow: 1px 1px 15px #9b3624;
  }

  50% {
    box-shadow: 1px 1px 20px rgb(97, 58, 58);
  }

  100% {
    box-shadow: 1px 1px 15px #9b3624;
  }
}

@keyframes optionGlow7 {
  0% {
    box-shadow: 1px 1px 15px #6607be;
  }

  50% {
    box-shadow: 1px 1px 20px #8d40d4;
  }

  100% {
    box-shadow: 1px 1px 15px #790ddf;
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
