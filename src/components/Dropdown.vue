<template>
    <div class="dropdown">
        <button class="dropdown__btn" type="button" @click="isShown = !isShown">
            {{text}}
        </button>
        <div :class="'dropdown__menu' + (isShown ? ' dropdown__menu--shown' : '')">
            <a class="dropdown__item" v-for="(val, ind) in options" :key="ind" @click="selectVal(val)">
                {{val}}
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'dropdown',
        props: {
            text: String,
            options: Array,
            onSelect: {
                type: Function,
                default() {}
            }
        },
        data() {
            return {
                isShown: false
            }
        },
        methods: {
            selectVal(val) {
                this.onSelect(val);
                this.isShown = false;
            }
        }
    }
</script>