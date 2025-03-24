<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class='flex flex-col w-full items-center justify-around p-10'>
        <div class="flex flex-col md:flex-row">
            <div class="flex flex-col items-center">        
                <p class="text-2xl"> Jacklyn Becker </p>
                <p class="text-lg max-w-80"> This is where I write a section about myself. </p>
            </div>
            <img alt="Jacky logo" 
            class="aboutImage rounded-full w-50 h-50 object-contain" 
            src="../../assets/jacky.png"/>
        </div>
        <div class="flex flex-row justify-around py-2 text-lg">
            <a href="https://github.com/JacklynBecker" target="_blank">
            Github Link
            </a>
            <RouterLink to="/about/Jacklyn/moreabout" class="">Discover More</RouterLink>
        </div>
        <div class="flex flex-col md:flex-row">
            <div class="flex flex-col items-center">
                <p class="text-2xl"> Chaoyi Wu </p>
                <p class="text-lg max-w-80">Hey there! My name is Chaoyi and my entire personality consists of reading books, playing video games and petting cats. (I have two and their names are Miwa and Lola!)</p>
            </div>
            <img alt="Chaoyi logo"
            class="aboutImage rounded-full w-50 h-50 object-contain"
            src="../../assets/miwalola.png" />
        </div>
        <div class="flex flex-row justify-around py-2 text-lg">
            <a href="https://github.com/chaoyiuwu" target="_blank">Github Link</a>
            <RouterLink to="/about/Chaoyi/moreabout" class="">Discover More</RouterLink>
        </div>
        <router-view/>
    </div>
</template>

<style scoped>
.aboutImage {
  border: 2px solid #555;
  border-radius: 50%;
}
</style>
