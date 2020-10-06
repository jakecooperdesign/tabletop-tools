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
            <button v-if="showRoundTracker" @click.prevent="endRound" class="border-gray-400 border bg-white px-4 py-3 shadow rounded text-center hover:bg-gray-100 transition duration-200">
                <span>End Round</span>
            </button>
            <button v-else @click.prevent="startRound" class="border-gray-400 border bg-white px-4 py-3 shadow rounded text-center hover:bg-gray-100 transition duration-200">
                <span>Start Round</span>
            </button>
        </div>
    
    </header>
    <CreateCharacterForm ref="characterForm" v-show="showCharacterForm" @submitted="characterFormSubmitted($event)" @form-close="toggleNewCharacterForm"></CreateCharacterForm>
    <div class="characters space-y-8">
        <Character
            v-for="(character, i) in charsByInitiative" 
            :key="i"
            :character="character"
            @increase-hp="(character.currentHP !== character.maxHP) ? character.currentHP++ : false"
            @decrease-hp="(character.currentHP !== 0) ? character.currentHP-- : false"
            @reset-hp="character.currentHP = character.maxHP"
            @edit-character="editCharacter(character)"
            @delete-character="deleteCharacter(character)"
        ></Character>
    </div>
    <RoundTracker 
        v-if="showRoundTracker" 
        :turnLength="characters.length" 
        @next-turn="updateActiveByInitiative($event.turn - 1)" 
        @new-round="startRound()" 
        @end-round="endRound()"
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
                initiative: 18,
                details: "Details...",
                active: false,
                maxHP: 20,
                currentHP: 20,
                conditions: [ ]
            },
            {
                name: 'Testtttting...',
                initiative: 12,
                details: "Details...",
                active: false,
                maxHP: 20,
                currentHP: 20,
                conditions: [
                    'Enfeebled',
                 ]
            },
        ],
        showRoundTracker: false
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
          this.showRoundTracker = true;
          this.updateActiveByInitiative(0);
      },
      endRound() {
          this.showRoundTracker = false;
      },
      characterFormSubmitted({character, method}) {
          if (method == 'new') {
              this.createNewCharacter(character);
          }
          this.toggleNewCharacterForm();
      },
      editCharacter(c) {
          this.toggleNewCharacterForm();
          this.$refs.characterForm.newCharacter = c;
          this.$refs.characterForm.editing = true;
      },
      deleteCharacter(c) {
          this.characters = this.characters.filter(char => char !== c);
      },
      updateActiveByInitiative(i) {
        let activeChar = this.charsByInitiative[i];
        this.characters.forEach( char => char.active = (char.name == activeChar.name) ? true : false )
      }
  },
  computed: {
      charsByInitiative() {
          return _.orderBy(this.characters, 'initiative', 'desc');
      }
  }
};
</script>
