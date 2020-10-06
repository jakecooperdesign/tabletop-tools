<template>
  <header class="bg-black text-white">
    <div class="container mx-auto py-8 px-12 flex justify-between items-center">
      <h1 class="font-bold text-2xl">{{name}}</h1>
      <nav id="nav" class="text-sm space-x-2">
        <!-- <router-link class="px-3 py-2 bg-gray-800 rounded hover:bg-gray-600 transition duration-200" to="/">Home</router-link> -->
        <router-link class="px-3 py-2 bg-gray-800 rounded hover:bg-gray-600 transition duration-200" to="/initiative-tracker">Initiative Tracker</router-link>
        <!-- <router-link class="px-3 py-2 bg-gray-800 rounded hover:bg-gray-600 transition duration-200" to="/about">About</router-link> -->
      </nav>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      name: "Tabletop Tools"
    }
  }
}
</script>

<style>

</style>
