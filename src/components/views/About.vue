<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div>
    <h1>About Page</h1>
  </div>
  <div class="aboutPerson">
  <div class="aboutPersonInfo">
  <h2> Jacklyn Becker </h2>
  <h3 class="infoSection"> This is where I write a section about myself. </h3>
  <div class="githubLink">
    <a href="https://github.com/JacklynBecker">
      <button class="githubLinkButton">Github Link</button>
    </a>
  </div>
  <RouterLink to="/about/Jacklyn/interests" class="tab">Interests</RouterLink>
  </div>
  <img alt="Jacky logo" class="aboutImage" src="../../assets/jacky.png" width="250" height="250" />
  
  </div>
  <div class="aboutPerson">
  <div class="aboutPersonInfo">
  <h2> Chaoyi Wu </h2>
  <h3 class="infoSection"> This is where I write a section about myself. </h3>
  <div class="githubLink">
    <a href="https://github.com/chaoyiuwu">
      <button class="githubLinkButton">Github Link</button>
    </a>
  </div>
  <RouterLink to="/about/Chaoyi/interests" class="tab">Interests</RouterLink>
  </div>
  <img alt="Chaoyi logo" class="aboutImage" src="../../assets/jacky.png" width="250" height="250" />
  <router-view/>
  </div>
</template>

<style scoped>
h1{
  margin-top:80px;
  text-align:center;
}
.aboutPerson {
  display:flex;
  flex-direction:row;
  margin-top:10%;
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin-bottom: 5%;
  
}
.aboutImage{
  
  border: 5px solid #555;
  border-radius: 50%;


}
.aboutPersonInfo{
  display: flex;
  flex-direction:column;
  padding-right:10%;
  justify-content: center;

}

.githubLink{
  margin-top:10%;

}

.githubLinkButton{

  padding-top:5%;
  padding-left:15%;
  padding-right:15%;
  padding-bottom:5%;
  background-color:#ADD8E6;
  border-radius: 5%;
  border-color:#ADD8E6;
}

.infoSection{
  font-size:100%;
}
</style>
