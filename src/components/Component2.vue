<template>
    <div>
        <Dropdown :options="options" :text="'Select value'" :onSelect="handleChange"/>
        <div class="history-block">
            <h4 class="history-block__title">History of actions</h4>
            <ul class="history-block__list">
                <li v-for="(val, ind) in optionsHistory" :key="ind" class="history-block__list-item">
                    {{val}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Dropdown from './Dropdown.vue';
    import { myStore } from '../plugins/my-store'
    export default {
        name: '',
        components: {
            Dropdown
        },
        created() {
            myStore.$watch('task2', this.handleChangeTask2);
            this.optionsHistory = myStore.task2;
        },
        data() {
            return {
                options: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
                optionsHistory: []
            }
        },
        methods: {
            handleChange(val) {
                myStore.$emit('change-task2', val);
            },
            handleChangeTask2(data) {
                this.optionsHistory = data;
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/history-block";
</style>