<template>
  <div class="home px-12 container mx-auto space-y-8 py-16">
    <header class="flex justify-between items-center">
        <h1 class="text-4xl leading-none">{{name}}</h1>
        <div class="controls space-x-4">
            <button v-if="showCharacterForm == false" @click.prevent="toggleNewCharacterForm" class="border-gray-400 border bg-white px-4 py-3 shadow rounded text-center hover:bg-gray-100 transition duration-200">
                <span>Open Character Creator</span>
            </button>
            <button v-else @click.prevent="toggleNewCharacterForm" class="border-gray-400 border bg-white px-4 py-3 shadow rounded text-center hover:bg-gray-100 transition duration-200">
                <span>Close Character Creator</span>
            </button>
            <button v-if="round > 0" @click.prevent="endRound" class="border-gray-400 border bg-white px-4 py-3 shadow rounded text-center hover:bg-gray-100 transition duration-200">
                <span>End Round</span>
            </button>
            <button v-else @click.prevent="startRound" class="border-gray-400 border bg-white px-4 py-3 shadow rounded text-center hover:bg-gray-100 transition duration-200">
                <span>Start Round</span>
            </button>
        </div>
    
    </header>
    <CreateCharacterForm v-if="showCharacterForm" @submitted="createNewCharacter($event)" @form-close="toggleNewCharacterForm"></CreateCharacterForm>
    <div class="characters space-y-8">
        <Character
            v-for="(character, i) in charsByInitiative" 
            :key="i"
            :character="character"
            :class="activeCharacter == i && round > 0 ? 'bg-gray-200' : null"
            @increase-hp="(character.currentHP !== character.maxHP) ? character.currentHP++ : false"
            @decrease-hp="(character.currentHP !== 0) ? character.currentHP-- : false"
            @reset-hp="character.currentHP = character.maxHP"
            @delete-character="deleteCharacter(character)"
        ></Character>
    </div>
    <RoundTracker 
        v-if="round > 0" 
        :turnLength="characters.length" 
        @next-turn="this.activeCharacter++" 
        @new-round="this.activeCharacter = 0" 
        @end-round="this.round = 0"
    ></RoundTracker>
  </div>
</template>

<script>
import _ from 'lodash';
import RoundTracker from '@/components/RoundTracker';
import Character from '@/components/Character';
import CreateCharacterForm from '@/components/CreateCharacterForm';

export default {
  name: 'Initiative Tracker',
  components: {
    RoundTracker,
    Character,
    CreateCharacterForm,
  },
  data() {
    return {
        name: 'Initiative Tracker',
        showCharacterForm: false,
        characters: [
            {
                name: 'Jebeddo Timbers',
                initiative: 16,
                details: "Details...",
                active: false,
                maxHP: 20,
                currentHP: 20,
                conditions: [ ]
            },
            {
                name: 'Furiosa Morningwood',
                initiative: 16,
                details: "Details...",
                active: false,
                maxHP: 20,
                currentHP: 20,
                conditions: [ ]
            },
        ],
        activeCharacter: null,
        round: 0,
    }
  },
  methods: {
      createNewCharacter(newCharacter) {
        if (this.characters.every(character => character.name !== newCharacter.name) ) 
            newCharacter.currentHP = newCharacter.maxHP;
            this.characters.push(newCharacter);
      },
      toggleNewCharacterForm() {
          this.showCharacterForm = ! this.showCharacterForm
      },
      setActive(i) {
          this.activeCharacter = i
      },
      startRound() {
          this.round = 1;
          this.setActive(0)
      },
      endRound() {
          this.round = 0;
      },
      deleteCharacter(c) {
          this.characters = this.characters.filter(char => char !== c);
      }
  },
  computed: {
      charsByInitiative() {
          return _.orderBy(this.characters, 'initiative', 'desc');
      }
  }
};
</script>
