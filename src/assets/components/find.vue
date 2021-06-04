<template>
    <main id="container">
        <!-- 上面活动 -->
        <div id="top">
            <div id="left">
                <h3>金币商城</h3>
                <p>0元好物在这里</p>
                <img src="../images/find1.png" alt="">
            </div>
            <div id="right">
                <div id="tuijian">
                    <div class="title">
                        <h3 style="color:#1BA9E1">推荐有奖</h3>
                        <span class="con">20元现金拿不停</span>
                    </div>
                    <div class="img1">
                        <img src="../images/find2.png" alt="">
                    </div>
                </div>
                <div id="zhoubian">
                    <div class="title">
                        <h3 style="color:#ED6660">周边优惠</h3>
                        <span class="con">领取口碑好券</span>
                    </div>
                    <div class="img2">
                        <img src="../images/find3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 下面抽奖 -->
        <div id="center">
            <div id="gift">
                <span id="before">——</span>
                <span class="iconfont clock">&#xe65b;</span>
                <h3>限时好礼</h3>&nbsp;
                <span id="after">——</span>
                <p>金币换好礼</p>
            </div>
            <div id="list">
                <ul>
                    <li id="ps4">
                        <div><img src="../images/find4.png" alt=""></div>
                        <div>
                            <p>PS4抽奖</p>
                            <p class="none">￥2299</p>
                            <p>200金币</p>
                        </div>
                    </li>
                    <li id="jbl">
                        <div><img src="../images/find5.png" alt=""></div>
                        <div>
                            <p>JBL耳机抽奖</p>
                            <p class="none">￥599</p>
                            <p>200金币</p>
                        </div>
                    </li>
                    <li id="beats">
                        <div><img src="../images/find6.png" alt=""></div>
                        <div>
                            <p>Beates耳机抽奖</p>
                            <p class="none">￥759</p>
                            <p>200金币</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="more">
                <span>查看更多&nbsp;></span>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    mounted(){
        document.getElementsByTagName('title')[0].innerHTML="发现";
    }
}
</script>
<style lang="scss" scoped>
#top{
    width: 100vw;
    height: 2rem;
    font-size: 0.2rem;
    margin-top: 0.12rem;
    img{
        max-width: 50%;
        max-height: 50%;
    }
    #left{
        width: 45%;
        height: 100%;
        float: left;
        text-align: center;
        h3{
            margin: 0.12rem 0 0.06rem 0;
        }
        p{
            font-size: 0.175rem;
            color: #777777;
            margin-bottom: 0.06rem;
        }
    }
    #right{
        width: 55%;
        height: 100%;
        float: left;
        #tuijian{
            width: 100%;
            height: 50%;
            padding:0.12rem 0 0 0.06rem;
        }
        #zhoubian{
            @extend #tuijian;
        }
        .title,.img1,.img2{
            float: left;
        }
        h3{
            padding-bottom: 0.1rem;
        }
        .con{
            color: #777777;
            font-size: 0.18rem;
        }
        .img1{
            position: relative;
            top: 0.1rem;
            right: -0.25rem;
        }
        .img2{
            max-width: 50%;
            max-height: 40%;
            position: relative;
            top: 0.1rem;
            right: -0.4rem;
        }
    }

}
#center{
    margin-top: 0.3rem;
    width: 100vw;
    height: 4rem;
    #gift{
        width: 100%;
        height: 0.8rem;
        font-size: 0.2rem;
        text-align: center;
        position: relative;
        #before::before{
            content:"";
            display: inline-block;
            width: 0.06rem;
            height:0.06rem;
            border-radius: 50%;
            background-color: black;
            position: absolute;
            left: 1.68rem;
            top: 0.225rem;
        }
        h3{
            display: inline-block;
        }
        .clock{
            color: red;
            font-size: 0.35rem;
        }
        #after::before{
            @extend #before::before;
            left: 3.26rem;
        }
        p{
            color:#777777;
            font-size: 0.175rem;
            margin-top: 0.06rem;
            margin-left: 0.3rem;
        }
    }
    #list{
        width: 100%;
        height: 2.3rem;
        font-size: 0.2rem;
        ul{
            width: 100%;
            height: 100%;
        }
        ul>li{
            list-style: none;
            float: left;
            width: 30%;
            height: 100%;
            margin: 0 0 0 0.12rem;
            text-align: center;
            position: relative;
            img{
                max-height: 100%;
                max-width: 80%;
                margin-top: 0.2rem;
            }
            p{
                font-size: 0.175rem;
                margin-top: 0.12rem;
                &:nth-child(3){
                    color: red;
                }
            }
            .none{
                color: #777777;
                font-size: 0.15rem;
            }
            .none::before{
                content:"";
                display: inline-block;
                width: 0.5rem;
                height: 0.015rem;
                background: gray;
                position: absolute;
                top: 1.575rem;
                left: 0.5rem;
            }
        }
    }
    #more{
        width: 100%;
        height: 0.5rem;
        text-align: center;
        font-size: 0.16rem;
        color: #777777;
        line-height: 0.5rem;
    }
}
</style>