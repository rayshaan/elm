<template>
    <main>
        <header>
            <div id="bottomSearch">
                <div>
                    <span id="searchIcon" class="iconfont">&#xe628;</span>
                    <span id="search">搜索饿了么商家、商品名称</span>
                </div>
            </div>
        </header>
        <!-- 筛选商家 -->
        <div id="container">
            <div id="screen">
                <ul>
                    <li class="iconfont">综合排序&nbsp;&#xe65c;</li>
                    <li>距离最近</li>
                    <li>销量最高</li>
                    <li class="iconfont">筛选&nbsp;&#xe670;</li>
                </ul>
            </div>
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
        this.$http.get('./data/homepage.json').then(resolve=>this.list=resolve.data.list);
    }
}
</script>
<style lang="scss" scoped>
header{
    width:100vw;
    font-size: 0.25rem;
    height:0.7rem;
    background-color: #00A9FF;
    /* 头部搜索栏 */
    #bottomSearch{
        width:100%;
        height: 0.7rem;
        line-height: 0.7rem;
        color: #999999;
        font-size: 0.18rem;
        background-color: #00A9FF;
        position: fixed;
        z-index: 999;
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
    #searchIcon{
        font-size: 0.24rem;
    }
}
//筛选商家
#container{
    height: 0.55rem;;
}
#screen{
    background-color: #ffffff;
    position: fixed;
    z-index: 999;
    top:0.7rem;
    height: 0.55rem;
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
    /* 每个商家 */
    .restaurant{
        width: 100%;
        height: 2.2rem;
        &::after{
            content: "";
            display: table;
            clear: both;
        }
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