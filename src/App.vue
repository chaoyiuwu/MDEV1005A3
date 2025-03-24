 <template>
<div class="container">
  <!-- <div class="header_container">
  <h1 class="header1">Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  </div> -->
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
  </div>
</template>

<style scoped>
.header_container {
  position: fixed;
  top:0;
  background-color: #f8f8f8;
  width: 100%;
  text-color:black;
}

p{
  color:black;
}

h1{
  color:black;
}

.container{
  display: flex;
  flex-direction:column;
  width: 100%;
  margin: 0;

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

}
</style>
