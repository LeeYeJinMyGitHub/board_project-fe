<template>
    <div id="app">
        <Register></Register>
        <Header></Header>
        <h3>안녕하세요</h3>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/layout/Header.vue'
    import Register from './views/Register.vue'

    export default {name: 'App', components: {
            Header,
            Register
        }}
</script>

<style scoped="scoped">
    * {
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-family: 'Noto Sans KR', sans-serif;
        font-family: 'Song Myung', serif;
        text-align: center;
    }
    body {
        
    }
</style>