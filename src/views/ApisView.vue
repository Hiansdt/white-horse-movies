<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <main>
        <h1>API's used:</h1>
        <div class="apis">
            <a href="https://developer.themoviedb.org/docs" target="_blank" class="api">
                <div class="">
                    <p>The Movie Database's API</p>
                </div>
            </a>
            <a href="https://api-ninjas.com/api/quotes" target="_blank" class="api">
                <div class="">
                    <p>API Ninjas' Quotes API</p>
                </div>
            </a>
        </div>
</main></template>

<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    .apis {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 5%;
    }

    .api {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin-bottom: 5%;
        padding: 1rem;
        border-radius: 5px;
        background: url(../../public/rainbow1.jpg);
        background-size: cover;
        color: rgb(255, 255, 255);
        transition: all 0.35s ease-in-out;
        cursor: pointer;
        box-shadow: 0px 0px rgba(0, 0, 0, 0.233);
    }

    .api:hover {
        transform: translateY(-30px) translateX(-25px);
        box-shadow: 25px 30px rgba(0, 0, 0, 0.233);
    }

    .api p {
        font-size: 1.5rem;
        font-weight: bolder;
        background-color: rgba(0, 0, 0, 0.164);
        padding: 10px;
        color: white;
    }

</style>