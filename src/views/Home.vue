<template>
  <div class="home px-12 container mx-auto">
    <header class="py-12">
      <h1 class="text-4xl leading-none">{{name}}</h1>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      name: 'Home'
    }
  }
};
</script>
