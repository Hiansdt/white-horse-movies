<script setup>



</script>

<template>
    <main>
        <h1>API's used:</h1>
        <div class="apis">
            <div class="api">
                <p>The Movie Database's API</p>
            </div>
            <div class="api">
                <p>API Ninjas' Quotes API</p>
            </div>
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
        filter: blur(1.5px);
        color: rgb(255, 255, 255);
    }

    .api p {
        font-size: 1.5rem;
        font-weight: bolder;
        filter: ;
    }

</style>