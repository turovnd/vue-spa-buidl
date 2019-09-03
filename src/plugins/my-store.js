import Vue from 'vue';

export const myStore = new Vue({
    data() {
        return {
            task2: []
        }
    },
    created() {
        this.$on('change-task2', val => {
            this.task2.push(val);
        });
        this.$on('reset-task2', val => {
            this.task2 = []
        });
    }
});