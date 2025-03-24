<template>
    <div>
        <h1> {{ this.capitalizedName }}'s interests </h1>
    </div>
    <div v-if="$route.params.name.toLowerCase() === 'jacklyn'">
        <p>Jacklyn is interested in _insert interests here_.</p>
    </div>
    <div v-else-if="$route.params.name.toLowerCase() === 'chaoyi'">
        <p>Chaoyi is interested in reading books and playing video games.</p>
    </div>
    <div v-else>
        <p>Sorry, we don't have any information on {{ this.capitalizedName }}'s interests.</p>
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