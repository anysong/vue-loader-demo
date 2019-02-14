<template>
    <div>
        <div>news</div>
        <ul>
            <li>
                <a v-link="{path:'/news/detail/xx1'}">xx1</a>
                <a v-link="{path:'/news/detail/xx2'}">xx2</a>
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
