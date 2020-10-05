<template>
    <form @submit.prevent="formSubmitted" class="character relative bg-white border-gray-400 border flex items-stretch rounded-lg overflow-hidden shadow">
        <div class="name p-8 flex-1">
            <input type="text" v-model="newCharacter.name" class="px-4 py-2 border border-gray-400 rounded-lg mb-2 text-4xl w-full block">
            <p class="pl-2 text-xs uppercase font-bold text-gray-600 tracking-wider">Name</p>
        </div>
        <div class="initiative p-8 border-l border-gray-400 w-40">
            <input type="number" v-model.number="newCharacter.initiative" class="px-4 py-2 border border-gray-400 rounded-lg mb-2 text-4xl w-full block">
            <p class="pl-2 text-xs uppercase font-bold text-gray-600 tracking-wider">Initiative</p>
        </div>
        <div class="hit-points p-8 border-l border-gray-400 w-40">
            <input type="number" v-model.number="newCharacter.maxHP" class="px-4 py-2 border border-gray-400 rounded-lg mb-2 text-4xl w-full block">
            <p class="pl-2 text-xs uppercase font-bold text-gray-600 tracking-wider">Max HP</p>
        </div>
        <div class="name border-l border-gray-400">
            <input type="submit" value="Save Character" class="p-8 h-full w-full hover:bg-gray-400">
        </div>
    </form>
</template>

<script>

let blankCharacter = () => ({
    name: '',
    details: '',
    initiative: 0,
    maxHP: 0,
    currentHP: 0,
    conditions: [],
});

export default {
    props: ['setup'],
    data() {
        return {
            newCharacter: blankCharacter()
        }
    },
    methods: {
        formSubmitted() {
            this.$emit('submitted', this.newCharacter);
            this.newCharacter = blankCharacter();
        }
    }
}
</script>

<style>

</style>