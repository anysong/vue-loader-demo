<template>
    <div id="nav">
        <h1>title</h1>
        <div>
            <a v-link="{path:'/home'}">01</a>
            <a v-link="{path:'/news'}">02</a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {};
</script>
<style>
    body {
        background: #ccc;
    }
</style>


