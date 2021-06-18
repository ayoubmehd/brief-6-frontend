<template>
  <div class="wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view />
  </div>
</template>

<style>
:root {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
}
.card .btn {
  margin: 10px 0;
}
</style>
