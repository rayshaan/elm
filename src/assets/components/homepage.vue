<template>
    <main>
        <!-- 头部 -->
        <header>
            <!-- 地理位置 -->
            <div id="topPosition">
                <span id="positionIcon" class="iconfont">&#xe619;</span>
                <span id="position">迎宾大街</span>
            </div>
            <!-- 搜索框 -->
            <div id="bottomSearch">
                <div>
                    <span id="searchIcon" class="iconfont">&#xe628;</span>
                    <span id="search">搜索饿了么商家、商品名称</span>
                </div>
            </div>
        </header>
        <!-- 分类 -->
        <div id="classify">
            <ul>
                <li>
                    <router-link to="/business">
                        <img src="../images/meishi.png" alt="">
                        <span>美食</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/business">
                        <img src="../images/zaocan.png" alt="">
                        <span>早餐</span>
                    </router-link>
                </li>
                 <li>
                    <router-link to="/business">
                        <img src="../images/paotui.png" alt="">
                        <span>跑腿代购</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/business">
                        <img src="../images/hanbao.png" alt="">
                        <span>汉堡披萨</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/business">
                        <img src="../images/difang.png" alt="">
                        <span>地方小吃</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/business">
                        <img src="../images/mifen.png" alt="">
                        <span>米粉面馆</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/business">
                        <img src="../images/baozi.png" alt="">
                        <span>包子粥店</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/business">
                        <img src="../images/zhaji.png" alt="">
                        <span>炸鸡炸串</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 中部品质套餐 -->
        <div id="centralsection">
            <!-- 品质套餐 -->
            <div id="quality">
                <div id="quatitle">
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃得好</p>
                    <p>立即抢购&nbsp;></p>
                </div>
                <img src="../images/quality.png" alt="" id="quaimg">
            </div>
            <!-- 超级会员 -->
            <div id="supervip">
                <img src="../images/supervip.png" alt="">
                <span>超级会员</span>
                <span>已为我节省116元</span>
                <span>下单即可获得奖励金&nbsp;></span>
            </div>
        </div>
        <!-- 推荐商家 -->
        <div id="recommender">
            <span class="iconfont line">&#xe60a;&nbsp;&nbsp;</span>
            <span id="tuijian">推荐商家</span>
            <span class="iconfont line">&nbsp;&nbsp;&#xe60a;</span>
        </div>
        <!-- 筛选商家 -->
        <div id="screen">
            <ul>
                <li class="iconfont">综合排序&nbsp;&#xe65c;</li>
                <li>距离最近</li>
                <li>销量最高</li>
                <li class="iconfont">筛选&nbsp;&#xe670;</li>
            </ul>
        </div>
        <!-- 底部商家 -->
        <section id="merchant">
            <section class="restaurant" v-for="(item,index) in list" :key=index>
                <router-link to="/details">
                     <!-- 左边标题 -->
                    <div class="leftimg"><img :src=item.titleimgsrc></div>
                    <div class="righttitle">
                        <!-- 右边信息 -->
                        <div class="information">
                            <h4>{{item.title}}</h4>
                            <p>
                                <img src="../../../data/images/homepage/star03.svg">
                                <span>5</span>&nbsp;&nbsp;
                                <span>月售{{item.sold}}单</span>
                            </p> 
                            <p class="data">
                                <span>{{item.service}}起送</span>
                                <span>丨</span>
                                <span>{{item.servicecost}}</span>
                            </p>
                            <p class="data" style="text-align:center">
                                <span class="time">{{item.distance}}</span>
                                <span class="time">丨</span>
                                <span class="time">{{item.speed}}分钟</span>
                            </p>
                        </div>
                        <!-- 右边活动 -->
                        <div class="activity">
                            <span class="label">{{item.tag[0]}}</span>
                            <p><span class="manjian">减</span>{{item.activity[0]}}</p>
                            <p><span class="baoxian">保</span>该商户食品安全已由国泰产险承担</p>
                        </div>
                    </div>
                </router-link>
            </section>
        </section>
    </main>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        //监听滚动条置顶
        window.addEventListener('scroll',this.totop,true);
        //添加商户数据
        this.$http.get('./data/homepage.json').then(resolve=>this.list=resolve.data.list);
        document.getElementsByTagName('title')[0].innerHTML="饿了么";
    },
    methods:{
        //搜索框置顶
        totop(){
            let t = document.documentElement.scrollTop || document.body.scrollTop; 
            let position_div=document.getElementById('topPosition');
            let search_div=document.getElementById('bottomSearch');
            let screen_div=document.getElementById('screen');
            if(screen_div){
                let screen_offsetTop=screen_div.offsetTop-screen_div.offsetHeight;
            }
            //置顶搜索框
            if(screen_div&&t>position_div.offsetHeight){
                position_div.style.display='none';
                search_div.style.position='fixed';
                search_div.style.top='0px';
                search_div.style.zIndex=999;
            }else if(screen_div&&t<=position_div.offsetHeight){
                position_div.style.display='block';
                search_div.style.position='relative';
            }
            //置顶商家筛选
            if(screen_div&&t>=screen_div.offsetTop){
                screen_div.style.position='fixed';
                screen_div.style.top=`${search_div.offsetHeight}px`;
                screen_div.style.zIndex=999;
            }
            if(screen_div&&t<300){
                screen_div.style.position='relative';
                screen_div.style.top=`0px`;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
a{text-decoration: none;}
li{list-style: none;}
/* 头部 */
header{
    width:100vw;
    font-size: 0.25rem;
    background-color: #00A9FF;
    /* 头部位置 */
    #topPosition{
        width:100%;
        height: 0.5rem;
        line-height: 0.5rem;
        color: #ffffff;
        font-weight: bold;
        padding: 0.1rem 0 0.05rem 0.2rem;
    }
    /* 头部搜索栏 */
    #bottomSearch{
        width:100%;
        height: 0.7rem;
        line-height: 0.7rem;
        color: #999999;
        font-size: 0.18rem;
        background-color: #00A9FF;
        /* 搜索框 */
        div{
            text-align: center;
            width: 92.5%;
            height: 70%;
            background-color: white;
            line-height: 0.49rem;
            position: relative;
            top: 15%;
            left: 3.75%;
        }
    }
    /* 图标大小 */
    #positionIcon,#searchIcon{
        font-size: 0.24rem;
    }
}
//分类
#classify{
    font-size: 0.05rem;
    ul{
        width:100vw;
        height: 2.36rem;
        margin-top: 0.06rem;
        li{
            text-align: center;
            width: 20%;
            height: 1.18rem;
            float: left;
            img{
                max-height: 70%;
                max-width:70%
            }
            span{
                display: block;
                margin-top: 0.04rem;
                color: black;
            }
        }
    }
}
//中部品质套餐和超级会员
#centralsection{
    width: 100vw;
    font-size: 0.2rem;
    /* 品质套餐 */
    #quality{
        width: 95%;
        height: 1.75rem;
        background-color: #F5F5F5;
        margin: 0 auto;
        position: relative;
        /* 左边标题 */
        #quatitle{
            display: inline-block;
            padding: 0.2rem 0 0 0.2rem;
            p{margin-top: 0.12rem;}
            p:nth-child(2){
                color:#777777;
                font-size: 0.19rem;
            }
            p:nth-child(3){
                color: #AF8260;
                font-size: 0.175rem;
            }
        }
        /* 右边配图 */
        #quaimg{
            max-height: 80%;
            max-width: 80%;
            position: absolute;
            top: calc((1.75rem - 80%)/2);
            right: 0.12rem;
        }
    }
    /* 超级会员 */
    #supervip{
        width: 95%;
        height: 0.55rem;
        margin: 0.06rem 2.5% 0 2.5%;
        background-color: #F8E4AF;
        font-size: 0.15rem;
        img{
            max-width: 0.3rem;
            max-height: 0.3rem;
            margin-top: 0.125rem;
            margin-left: 0.15rem;
        }
        span{
            display: inline-block;
            position: relative;
            top: -0.06rem;
            &:nth-child(2){
                left: 0.06rem;
                font-size: 0.19rem;
                font-weight: bold;
            }
            &:nth-child(3){
                left: 0.12rem;
            }
            &:nth-child(4){
                right:-0.7rem;
            }
        }
    }
}
//推荐商家
#recommender{
    width: 100vw;
    height: 0.6rem;
    text-align: center;
    font-size: 0.2rem;
    #tuijian{
        position: relative;
        top: -0.09rem;
    }
    .line{
        font-size: 0.45rem;
    }
}
//筛选商家
#screen{
    background-color: #ffffff;
    ul{
        width:100vw;
        height:0.55rem;
        font-size: 0.193rem ;
        li{
            float: left;
            width: 25%;
            height: 0.55rem;
            color:#777777;
            text-align: center;
            line-height: 0.55rem;
        }
    }
}
//商家
#merchant{
    width:100vw;
    font-size: 0.2rem;
    margin-top: 0.06rem;
    /* 每个商家 */
    .restaurant{
        width: 100%;
        height: 2.2rem;
        a{color: #666666 !important};
    }
    /* 左边配图 */
    .leftimg{
        float: left;
        width:1.2rem;
        img{
            max-height: 80%;
            max-width: 80%;
            padding: 0.20rem 0 0 0.12rem;
        }
    }
    /* 右边信息 */
    .righttitle{
        float: left;
        width:calc(100vw - 1.2rem);
        height: 100%;
        /* 上面信息 */
        .information{
            padding: 0.12rem 0 0 0.06rem;
            width:100%;
            height: 40%;
            h4{
                padding-bottom: 0.03rem;
                color: black;
            }
            p{
                margin-top: 0.03rem;
            }
            .data{
                display: inline-block;
                width:49%;
            }
            span{
                font-size: 0.15rem;
            }
            .time{
                position: relative;
            }

        }
        /* 下面活动 */
        .activity{
            padding: 0.1rem 0 0 0.12rem;
            font-size: 0.15rem;
            .label{
                display: inline-block;
                text-align: center;
                border: 1px solid #777777;
                border-radius: 0.06rem;
                padding:0.0015rem;
                margin-bottom: 0.12rem;
            }
            p{
                margin: 0.08rem 0;
            }
            .manjian{
                display: inline-block;
                width: 0.24rem;
                height: 0.24rem;
                background: #F07373;
                color: white;
                text-align: center;
                border-radius: 0.06rem;
                line-height: 0.24rem;
                margin-right: 0.12rem;
            }
            .baoxian{
                @extend .manjian;
                background: #666666;
                color: white;
            }
        }
    }
}
</style>