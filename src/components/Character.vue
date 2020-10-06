<template>
    <div class="group">
        <dl 
            class="character relative bg-white border-gray-400 border flex items-stretch rounded-lg shadow z-10" 
            :class="{
                'bg-gray-200': character.active ? true : false, 
                'bg-gray-900 text-white': character.currentHP == 0 ? true : false
            }">
            <div class="initiative px-8 py-6 text-center w-40 flex flex-col justify-center items-center">
                <dd class="text-3xl">{{character.initiative}}</dd>
                <dt class="text-xs uppercase font-bold text-gray-600 tracking-wider">Initiative</dt>
            </div>
            <div class="name px-8 py-6 border-l border-gray-400 flex-1 flex flex-col justify-center">
                <dd class="text-3xl">{{character.name.length > 30 ? character.name.substr(0,30).concat('...') : character.name}}</dd>
                <dt class="text-xs uppercase font-bold text-gray-600 tracking-wider">Name</dt>
            </div>
            <div v-if="character.conditions.length > 0" class="conditions px-8 py-6 flex-1 flex flex-col justify-center items-end space-y-2">
                <div v-for="(condition,i) in character.conditions" :key="i">
                    <div class="text-xs text-white uppercase tracking-widest font-medium inline-block bg-gray-500 shadow rounded px-3 py-2">{{condition}}</div>
                </div>
            </div>
            <div class="hit-points px-8 py-6 border-l border-gray-400 flex justify-center items-center space-x-4 w-64">
                <div class="">
                    <dd class="text-3xl">{{character.currentHP}} / {{character.maxHP}}</dd>
                    <dt class="text-xs uppercase font-bold text-gray-600 tracking-wider">Current HP</dt>
                </div>
                <div class="text-xs space-y-1">
                    <button @click="$emit('increase-hp')" class="block w-8 h-6 flex justify-center items-center px-2 py-1 border border-gray-400 hover:bg-gray-300 leading-none rounded">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    <button @click="$emit('decrease-hp')" class="block w-8 h-6 flex justify-center items-center p-1 border border-gray-400 hover:bg-gray-300 leading-none rounded">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>                    
                    </button>
                    <button @click="$emit('reset-hp')" class="block w-8 h-6 flex justify-center items-center p-1 border border-gray-400 hover:bg-gray-300 leading-none rounded">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>
            </div>
        </dl>
        <div class="controls text-xs flex justify-end transition-all duration-500 h-20 -mt-20 group-hover:mt-0 opacity-0 group-hover:opacity-100">
            <div class="space-x-4 flex justify-center items-center bg-gray-300 px-6 pb-4 pt-8 -mt-4 rounded shadow border border-gray-400">
                <button @click="$emit('edit-character', character)" class="w-32 px-6 py-2 bg-gray-800 border border-gray-900 text-white hover:bg-black transition duration-200 rounded shadow">Edit</button>
                <button @click="$emit('delete-character', character)" class="w-32 px-6 py-2 bg-gray-800 border border-gray-900 text-white hover:bg-black transition duration-200 rounded shadow">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['character'],
    data() {
        return {

        }
    }
}
</script>

<style>

</style>