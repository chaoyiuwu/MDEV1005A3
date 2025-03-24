<template>
    <div class="">
        <p class="w-full text-lg text-center"> More About {{ this.capitalizedName }} </p>
        <div v-if="$route.params.name.toLowerCase() === 'jacklyn'">
            <p>Jacklyn is interested in rock climbing and watching reality TV.</p>
        </div>
        <div v-else-if="$route.params.name.toLowerCase() === 'chaoyi'" class="flex flex-col items-center">
            <a href="https://www.instagram.com/miwanlola/">Miwa and Lola's Instagram page</a>
            <a href="https://app.thestorygraph.com/profile/wchereads">Chaoyi's StoryGraph page</a>
        </div>
        <div v-else>
            <p>{{ this.capitalizedName }} who???</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Interests',
  computed: {
    capitalizedName() {
      const name = this.$route.params.name;
      if (!name) return '';
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 80px;
  text-align: center;
}
</style>