<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class='flex flex-col items-center px-10'>
        <div class="aboutPerson">
        <div class="aboutPersonInfo">
        <p class="text-lg"> Jacklyn Becker </p>
        <h3 class="infoSection"> Hi, my name is Jacklyn Becker but i usually go by Jacky. I work as a Verification Engineer at Qualcomm but im looking to change career paths. I have one child(cat) named Fergie with the most amazing sassy attitude. </h3>
        <div class="flex flex-row justify-around py-2">
            <a href="https://github.com/JacklynBecker">
            Github Link
            </a>
            <RouterLink to="/about/Jacklyn/moreabout" class="">Discover More</RouterLink>
        </div>

        </div>
        <img alt="Jackylogo"
        class="aboutImage rounded-full w-70 h-50"
        src="../../assets/Fergie.png" />
        
        </div>
        <div class="aboutPerson">
        <div class="aboutPersonInfo">
        <p class="text-lg"> Chaoyi Wu </p>
        <h3 class="infoSection">Hey there! My name is Chaoyi and my entire personality consists of reading books, playing video games and petting cats. (I have two and their names are Miwa and Lola!)</h3>
        <div class="flex flex-row justify-around py-2">
            <a href="https://github.com/chaoyiuwu">Github Link</a>
            <RouterLink to="/about/Chaoyi/moreabout" class="">Discover More</RouterLink>
        </div>

        </div>
        <img alt="Chaoyi logo"
        class="aboutImage rounded-full w-50 h-auto"
        src="../../assets/miwalola.png" />
        </div>
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
  padding: 10px;
  margin-bottom: 5%;
}
.aboutImage{
  border: 2px solid #555;
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

.LinkButton{
  padding-top:5%;
  padding-left:15%;
  padding-right:15%;
  padding-bottom:5%;
  border-radius: 5%;
}

.infoSection{
  font-size:100%;
}
</style>
