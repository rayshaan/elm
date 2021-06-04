<template>
    <main>
        <!-- 顶部 -->
        <header>
            <!-- 背景 -->
            <div id="bg">
                <img src="../../../data/images/homepage/mohu.jpg" alt="">
                <span class="iconfont back" @click="back()">&#xe611;</span>
            </div>
            <!-- 商家信息 -->
            <div id="information">
                <div>
                    <img src="../../../data/images/homepage/1.png" alt="">
                </div>
                <div id="bottom">
                    <p>街头暗号小海鲜家常菜</p>
                    <p>
                        <span>评价4.4</span>
                        <span>月售100单</span>
                        <span>商家配送约47分钟</span>
                    </p>
                    <p>
                        <span>￥6</span>
                        <span class="iconfont">&#xe660;</span>
                        <span>无门槛</span>
                        <span>领取</span>
                    </p>
                    <p>
                        <span class="tag">35减5</span>
                        <span class="tag">65减11</span>
                        <span class="tag">100减15</span>
                        <span class="iconfont">1个优惠&#xe65c;</span>
                    </p>
                    <p>公告：欢迎订阅"街头暗号"(本店已全面消毒),疫情......</p>
                </div>
            </div>
        </header>
        <!-- 导航 -->
            <div id="nav">
                <ul>
                    <li>点餐</li>
                    <li>评价</li>
                    <li>商家</li>
                </ul>
            </div>
        <div>
            <component :is="show"></component>
        </div>
    </main>
</template>
<script>
import food from './food.vue'
export default {
    data(){
        return {
            show:'food'
        }
    },
    components:{
        food
    },
    mounted(){
        window.addEventListener('scroll',this.fixed,true);
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        fixed(){
            let t = document.documentElement.scrollTop || document.body.scrollTop; 
            let nav_div=document.getElementById('nav');
            if(nav_div&&t>nav_div.offsetHeight){
                nav_div.style.position='fixed';
                nav_div.style.top='0px';
                nav_div.style.zIndex=999;
            }else if(nav_div&&t<=nav_div.offsetHeight){
                nav_div.style.position='relative';
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
header{
    width: 100vw;
    font-size: 0.2rem;
    #bg{
        width: 100%;
        height: 1.3rem;
        position: relative;
        overflow: hidden;
        &::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: gray;
            opacity: 0.6;
        }
        img{
            min-width: 100vw;
            min-height: 3rem;
        }
        .back{
            position: absolute;
            top: 0.12rem;
            left: 0.12rem;
            color: #FEFEFE;
            z-index: 100;
            font-size: 0.3rem;
        }
    }
    #information{
        width: 100vw;
        height: 1.7rem;
        position: relative;
        text-align: center;
        img{
            max-width: 60%;
            max-height: 60%;
            position: absolute;
            top: -1.2rem;
            left: 2rem;
            z-index: 1;
        }
        #bottom{
            margin-top: 0.35rem;
            p:nth-child(1){
                font-size: 0.3rem;
                color: black;
                font-weight: bold;
            }
            p:nth-child(2){
                font-size: 0.1rem;
                color: #777777;
                margin: 0.06rem 0;
                span:nth-child(2){
                    margin: 0 0.06rem;
                }
            }
            p:nth-child(3){
                width: 40%;
                height: 0.3rem;
                background: #FFE578;
                margin: 0 auto;
                text-align: center;
                line-height: 0.3rem;
                span:nth-child(1){
                    font-weight: 500;
                    color: rgb(89,69,25);
                }
                span:nth-child(2){
                    color: #FDC522;
                    margin: 0 0 0 0.06rem;
                }
                span:nth-child(3){
                    font-size: 0.175rem;
                    margin: 0 0.06rem 0 0;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        display: inline-block;
                        border: 0.06rem solid transparent;
				        border-top: 0.06rem solid white;
                        right: -0.16rem;
                    }
                    &::before{
                        content: "";
                        position: absolute;
                        display: inline-block;
                        border: 0.06rem solid transparent;
				        border-bottom: 0.06rem solid white;
                        right: -0.16rem;
                        top: 0.13rem;
                    }
                }
                span:nth-child(4){
                    font-size: 0.175rem;
                    margin: 0 0.06rem;
                }
            }
            p:nth-child(4){
                width: 70%;
                margin: 0 auto;
                text-align: left;
                margin-top: 0.12rem;
                font-size: 0.135rem;
                position: relative;
                .tag{
                    color: red;
                    border: 1px solid salmon;
                }
                span:last-child{
                    position: absolute;
                    right: 0.12rem;
                    color: #777777;
                    font-size: 0.15rem;
                }
            }
            p:last-child{
                width: 70%;
                margin: 0 auto;
                text-align: left;
                font-size: 0.15rem;
                color: #777777;
                margin-top: 0.12rem;
            }
        }
    }
}
#nav{
    width: 100vw;
    height: 0.5rem;
    background: #FFFFFF;
    font-size: 0.2rem;
    ul{
        list-style: none;
        width: 100%;
        height: 100%;
        position: relative;
        li{
            text-align: center;
            line-height: 0.5rem;
            width: 33.3%;
            height: 100%;
            float: left;
            font-weight: 400;
            color: #666;
            &:first-child{
                color: #333;
                font-weight: 700;
                &::before{
                    content: "";
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.03rem;
                    background: #2395FF;
                    position: absolute;
                    bottom: 0;
                    left: 0.6rem;
                }
            }
        }
    }
}
</style>