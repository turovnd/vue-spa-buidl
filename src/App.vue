<template>
    <div>
        <Header/>
        <router-view class="container" />
    </div>
</template>
<script>
    import Header from './components/Header.vue'
    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>