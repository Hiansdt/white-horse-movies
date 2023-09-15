<script setup>

import { ref } from 'vue'
import quotesApi from '../api/quotes.js';

const QuotesApi = new quotesApi();

const quote = ref()

const options = ref(['sad', 'happy', 'angry', 'excited', 'tired', 'bored', 'unmotivated'])

async function getquotes() {
  quote.value = await QuotesApi.getQuotes('happiness');
  console.log(quote.value);
}

getquotes();

</script>

<template>
  <main>
    <h1>How are you feeling right now?</h1>
    <hr>
    <div class="dayQuote">
      <h2>Quote of the day</h2>
      <div class="quoteAuthor">
        <p>" {{ quote[0].quote }} " </p>
        <p>- {{ quote[0].author }}</p>
      </div>
    </div>
    <div class="options">
      <div class="option" v-for="option, index in options" :key="index">
        {{ option }}
      </div>
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

.dayQuote > :nth-child(2) {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
}

.dayQuote > :nth-child(2) > :nth-child(1) {
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
  animation: 0.3s forwards optionScale;
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
  background-color: #006466;
  cursor: pointer;
  transform: scale(1.1);
  animation: 0.3s forwards optionScale;
}

@keyframes optionScale {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>
