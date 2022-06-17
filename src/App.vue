<template>
    <div id="app">
        <Register></Register>
        <List></List>
        <router-link to='/'>Home</router-link>
        <router-link to='/about'>About</router-link>
        <!-- <router-view :key="$route.fullPath"></router-view> -->
         <router-view></router-view>
    </div>
</template>

<script>
    import List from './views/List.vue'
    import Register from './views/Register.vue'

    export default {name: 'App', components: {
            List,
            Register
        },
        }
</script>

<style scoped="scoped">
    * {
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-family: 'Noto Sans KR', sans-serif;
        font-family: 'Song Myung', serif;
    }
</style>