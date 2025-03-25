<template>
    <div class="flex w-full justify-center p-5">
    <!-- <div class="header_container">
    <h1 class="header1">Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    </div> -->
        <main>
            <RouterView />
        </main>
    </div>
    <nav>
        <div class="bottom-nav flex w-full justify-around bg-transparent">
            <RouterLink to="/" class="tab">Home</RouterLink>
            <RouterLink to="/about" class="tab">About</RouterLink>
            <RouterLink to="/posts" class="tab">Posts</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.header_container {
  position: fixed;
  top:0;
  background-color: #f8f8f8;
  width: 100%;
  color:black;
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    padding: 10px;
}

</style>
