<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/signup">Inscription</router-link>|
      <router-link to="/login">Connectez-vous</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  padding: 0%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d1515a;
    }
  }
}
</style>
