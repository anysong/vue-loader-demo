<template>
    <div>
        <div>home</div>
        <ul>
            <li>
                <a v-link="{path:'/home/login'}">010</a>
                <a v-link="{path:'/home/reg'}">011</a>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
