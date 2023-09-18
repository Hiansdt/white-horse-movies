<script setup>

import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
import quotesApi from '../api/quotes.js';

const QuotesApi = new quotesApi();

const dailyQuote = ref()

const options = ref(['sad', 'happy', 'angry', 'excited', 'tired', 'bored', 'unmotivated'])

async function getquotes() {
  dailyQuote.value = await QuotesApi.getQuotes('happiness');
}

onMounted(() => {
  console.log('a')
  getquotes()
})

</script>

<template>
  <main>
    <h1>How are you feeling right now?</h1>
    <hr>
    <div class="dayQuote">
      <h2>Quote of the day</h2>
      <div class="quoteAuthor" v-if="dailyQuote">
        <p>" {{ dailyQuote[0].quote }} " </p>
        <p>- {{ dailyQuote[0].author }}</p>
      </div>
    </div>
    <div class="options">
        <router-link :to="'/' + option" class="option optionGlow" v-for="option, index in options" :key="index">
          <span>{{ option }}</span>
        </router-link>
    </div>
    <footer>
      <button>Movies</button>
      <button>API's</button>
      <button>About</button>
    </footer>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  color: aliceblue;
}

a {
  text-decoration: none;
  color: white;
}
h1 {
  margin-top: 1%;
  margin-bottom: 1%;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  font-size: x-large;
  color: aliceblue;
}

h2 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: large;
  color: aliceblue;
  text-align: center;
}

.p {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: smaller;
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

footer {
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 5vh;
  display: flex;
  gap: 5%;
}

button {
  width: 5%;
  height: 100%;
  border: none;
  padding: none;
  color: rgb(255, 255, 255);
  background-color: #00000000;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: small;
  cursor: pointer;
  margin-left: 2%;
}

button:hover {
  transform: scale(1.05);
  animation: 0.3s forwards navigationScale;
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
}

.option {
  display: flex;
  width: 11%;
  height: 150px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
}

.option:hover {
  box-shadow: 1px 1px 35px #00b8bb;
  cursor: pointer;
  transform: scale(1.1);
  animation: 0.3s infinite optionScale; 
}

.options> :nth-child(1):hover{
  background-color: #008fa8;
  animation: 1s infinite optionGlow1;
}

.options> :nth-child(2):hover{
  background-color: #10ff08;
  animation: 1s infinite optionGlow2;
}

.options> :nth-child(3):hover{
  background-color: #00b8bb;
  animation: 1s infinite optionGlow3;

}

.options> :nth-child(4):hover{
  background-color: #00b8bb;
}

.options> :nth-child(5):hover{
  background-color: #00b8bb;
}

.options> :nth-child(6):hover{
  background-color: #00b8bb;
}

.options> :nth-child(7):hover{
  background-color: #00b8bb;
}


@keyframes optionGlow1 {
  0% {
    box-shadow: 1px 1px 25px #0ec1ce;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(131, 213, 245);
  }

  100% {
    box-shadow: 1px 1px 25px #0ec1ce;
  }
}

@keyframes optionGlow2 {
  0% {
    box-shadow: 1px 1px 25px #ff6600;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(245, 182, 131);
  }

  100% {
    box-shadow: 1px 1px 25px #bb5a00;
  }
}

@keyframes optionGlow3 {
  0% {
    box-shadow: 1px 1px 25px #ff6600;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(245, 182, 131);
  }

  100% {
    box-shadow: 1px 1px 25px #bb5a00;
  }
}

@keyframes optionGlow4 {
  0% {
    box-shadow: 1px 1px 25px #ff6600;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(245, 182, 131);
  }

  100% {
    box-shadow: 1px 1px 25px #bb5a00;
  }
}

@keyframes optionGlow5 {
  0% {
    box-shadow: 1px 1px 25px #ff6600;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(245, 182, 131);
  }

  100% {
    box-shadow: 1px 1px 25px #bb5a00;
  }
}

@keyframes optionGlow6 {
  0% {
    box-shadow: 1px 1px 25px #ff6600;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(245, 182, 131);
  }

  100% {
    box-shadow: 1px 1px 25px #bb5a00;
  }
}

@keyframes optionGlow7 {
  0% {
    box-shadow: 1px 1px 25px #ff6600;
  }

  50% {
    box-shadow: 1px 1px 25px rgb(245, 182, 131);
  }

  100% {
    box-shadow: 1px 1px 25px #bb5a00;
  }
}


@keyframes optionScale {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
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
