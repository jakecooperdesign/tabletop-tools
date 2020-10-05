<template>
    <dl class="round-tracker bg-gray-800 text-white rounded-lg flex items-center shadow flex items-center justify-between">
        <div class="flex">
            <div class="round p-8">
                <dd class="text-2xl font-bold">{{round}}</dd>
                <dt class="text-xs uppercase font-bold text-gray-600 tracking-wider">Round</dt>
            </div>
            <div class="round p-8 border-l border-gray-600">
                <dd class="text-2xl font-bold">{{turn}} / {{turnLength}}</dd>
                <dt class="text-xs uppercase font-bold text-gray-600 tracking-wider">Turns in Round</dt>
            </div>
        </div>
        <div class="controls p-8 space-x-4">
            <button @click.prevent="nextTurn" class="px-6 py-2 bg-gray-600 hover:bg-black text-white rounded shadow">Next Turn</button>
            <button @click.prevent="endRound" class="px-6 py-2 bg-gray-600 hover:bg-black text-white rounded shadow">End Round</button>
        </div>
    </dl>
</template>

<script>
export default {
    props: ['turnLength'],
    data() {
        return {
            round: 1,
            turn: 1
        }
    },
    methods: {
        nextTurn() {
            if (this.turn == this.turnLength) {
                this.turn = 1;
                this.round++
                this.$emit('new-round');
            } else {
                this.turn++;
                this.$emit('next-turn', {turn: this.turn, round: this.round});
            }
        },
        endRound() {
            this.$emit('end-round');
            this.round = 0;
            this.turn = 1;
        }
    }
}
</script>

<style>

</style>