<template>
    <form @submit.prevent="formSubmitted" class="shadow-lg rounded-lg border border-gray-400 space-y-4 max-w-4xl mx-auto">
        <header class="rounded-t-lg bg-gray-200 p-6 border-b border-gray-400">
            <h2 class="text-2xl font-medium text-gray-800">
                Character Creator
            </h2>
        </header>
        <div class="p-6">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                    <label class="text-sm text-gray-700 font-medium">Name</label>
                    <input type="text" v-model="newCharacter.name" class="mt-2 p-2 border border-gray-400 rounded-lg mb-2 text-lg w-full block">
                </div>
                <div>
                    <label class="text-sm text-gray-700 font-medium">Initiative</label>
                    <input type="number" v-model.number="newCharacter.initiative" class="mt-2 p-2 border border-gray-400 rounded-lg mb-2 text-lg w-full block">
                </div>
                <div>
                    <label class="text-sm text-gray-700 font-medium">Max HP</label>
                    <input type="number" v-model.number="newCharacter.maxHP" class="mt-2 p-2 border border-gray-400 rounded-lg mb-2 text-lg w-full block">
                </div>
                <div class="col-span-2">
                    <p class="text-sm text-gray-700 font-medium">Conditions</p>
                    <div class="grid gap-4 grid-cols-5 mt-4">
                        <div v-for="(condition,i) in conditions" :key="i">
                            <label :for="condition" class="cursor-pointer border-gray-300 border px-3 py-2 rounded-md hover:bg-gray-300 w-full block shadow-sm">
                                <input v-model="newCharacter.conditions" type="checkbox" :name="condition" :id="condition" :value="condition"> 
                                <span class="ml-2">{{condition}}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="submit" value="Save Character" class="p-6 rounded-b-lg cursor-pointer transition duration-200 bg-blue-600 text-white h-full w-full hover:bg-gray-800">
    </form>
</template>

<script>

let blankCharacter = () => ({
    name: '',
    details: '',
    initiative: 1,
    maxHP: 1,
    currentHP: 1,
    conditions: [],
});

export default {
    props: ['setup'],
    data() {
        return {
            editing: false,
            newCharacter: blankCharacter(),
            conditions: [
                'Friendly',
                'Helpful',
                'Hostile',
                'Indifferent',
                'Unfriendly',
                'Doomed',
                'Dying',
                'Unconscious',
                'Wounded',
                'Hidden',
                'Observed',
                'Undetected',
                'Unnoticed',
                'Clumsy',
                'Drained',
                'Enfeebled',
                'Stupefied',
                'Blinded',
                'Concealed',
                'Dazzled',
                'Deafened',
                'Invisible'
            ]
        }
    },
    methods: {
        formSubmitted() {
            this.$emit('submitted', {character: this.newCharacter, method: this.editing ? 'update': 'new' });
            this.newCharacter = blankCharacter();
        }
    }
}
</script>

<style>

</style>