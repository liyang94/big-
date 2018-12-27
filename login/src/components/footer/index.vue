<template>
    <footer>
        <router-link tag = "dl" to = "/gexingtuijian">
            <dt><img src="../../static/img/k.jpg" alt=""></dt>
            <dd>发现</dd>
        </router-link>
        <router-link tag = "dl" to = "/video">
            <dt><img src="../../static/img/l.jpg" alt=""></dt>
            <dd>视频</dd>
        </router-link>
        <router-link tag = "dl" to = "/our">
            <dt><img src="../../static/img/m.jpg" alt=""></dt>
            <dd>我们</dd>
        </router-link>
        <router-link tag = "dl" to = "/friends">
            <dt><img src="../../static/img/n.jpg" alt=""></dt>
            <dd>朋友</dd>
        </router-link>
        <router-link tag = "dl" to = "/zhanghao">
            <dt><img src="../../static/img/o.jpg" alt=""></dt>
            <dd>账号</dd>
        </router-link>
</footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    footer{
    width: 100%;
    height: 90px;
    display: flex;
    position: fixed;
    bottom: -1px;
    background: #f5f5f5;
    dl{
        height: 80px;
        flex: 1;
        margin-top: 10px;
        dt{
            text-align: center;
            img{
                width: 50px;

                height: 50px;
            } 
        }
        dd{
            height: 30px;
            text-align: center;
            padding: 0;
            margin: 0;
        }
    }
}
</style>

