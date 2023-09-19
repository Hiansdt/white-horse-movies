<script setup>


</script>

<template>
    <footer>
      <button>Movies</button>
      <button>API's</button>
      <button>About</button>
    </footer>
</template>

<style >

@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab&display=swap');

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
  background-color: #00000000;
  font-weight: 400;
  font-size: small;
  cursor: pointer;
  margin-left: 2%;

}

button:hover {
  transform: scale(1.05);
  animation: 0.3s forwards navigationScale;
}

</style>