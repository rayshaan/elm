<!--底部选项-->
<template>
    <main>
        <router-view></router-view>
        <footer>
            <div id="container">
                <mt-tabbar fixed class="taber-bar" v-model="selected">
                    <mt-tab-item id="homepage">
                        <router-link to="/homepage">
                            <span class="iconfont elment">&#xe8ca;</span>
                            <span class="option">首页</span>
                        </router-link>
                    </mt-tab-item>
                    <mt-tab-item id="find">
                        <router-link to="/find">
                            <span class="iconfont find">&#xe620;</span>
                            <span class="option">发现</span>
                        </router-link>
                    </mt-tab-item>
                    <mt-tab-item id="order">
                        <router-link to="/order">
                            <span class="iconfont emaxcitygerenxinxitubiaoji03">&#xe61e;</span>
                            <span class="option">订单</span>
                        </router-link>
                    </mt-tab-item>
                    <mt-tab-item id="my">
                        <router-link to="/my">
                            <span class="iconfont user">&#xe601;</span>
                            <span class="option">我的</span>
                        </router-link>
                    </mt-tab-item>
                </mt-tabbar>
            </div>
        </footer>
    </main>
</template>
<script>
export default {
    data(){
        return {
            selected:'homepage'
        }
    }
}
</script>
<style lang="scss" scoped>
#container{
    height:0.6rem;
}
/* 底部最外层 */
.taber-bar{
    border: 1px solid #EDEDED;
    width:100vw;
    height:0.6rem;
    /* a */
    a{
        text-decoration: none;
        color: #989898;
        font-size: 0.144rem;
    }
    /* 图标 */
    .iconfont{
        display: block;
        font-size: 0.241rem;
    }
    /* 文字 */
    .option{
        display: block;
        margin: 0.06rem;
    }
}
/* 被选中时 */
.mint-tabbar > .mint-tab-item.is-selected{
    background-color: #FFFFFF;
    a{
        color: #0097FF;
    }
}
</style>