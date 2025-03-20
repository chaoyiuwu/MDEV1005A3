<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<!-- <template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <div class="bottom-nav">
    <RouterLink to="/" class="tab">Home</RouterLink>
    <RouterLink to="/about" class="tab">About</RouterLink>
    <RouterLink to="/posts" class="tab">Posts</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.bottom-nav {
    display: flex;
    justify-content: space-around;
    background-color: #f8f8f8;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
