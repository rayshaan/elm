<template>
    <div>
        <header>
            <div id="head">
                <span class="iconfont back" @click="back()">&#xe611;</span>
                <span id="confirm">确认订单</span>
            </div>
        </header>
        <main>
            <div id="location">
                <span>订单配送至</span>
                <h2 class="iconfont">新增收货地址&#xe608;</h2>
            </div>
            <div id="keycard">
                <p>
                    <span>送达时间</span>
                    <span class="iconfont">尽快送达(01:12送达)&#xe608;</span>
                </p>
                <p>
                    <span>支付方式</span>
                    <span>在线支付</span>
                </p>
            </div>
            <div id="product">
                <ul>
                    <li id="name"><span>街头暗号小海鲜家常菜</span></li>
                    <li class="food" v-for="(item,index) in this.$store.state.list" :key=index>
                        <span class="img">
                            <img :src=item.src alt="">
                        </span><!--
                        --><span class="pdname">{{item.name}}</span><!--
                        --><span class="count">x&nbsp;{{item.count}}</span><!--
                        --><span class="price">{{item.price}}</span>
                    </li>
                    <li id="sendcost" class="aaa">
                        <span>配送费</span>
                        <span>￥8.8</span>
                    </li>
                    <li class="aaa"><span class="activity">满减活动与折扣商品不同享</span><span></span></li>
                    <li id="redbag" class="aaa">
                        <span>红包</span>
                        <span class="iconfont">&#xe67c;选择地址后使用红包</span>
                    </li>
                    <li id="explain" class="aaa">
                        <span class="iconfont activity">优惠说明&#xe71d;</span>
                        <span>小计￥{{allprice}}</span>
                    </li>
                </ul>
            </div>
            <div id="checkout">
                <ul>
                    <li>
                        <span>餐具份数</span>
                        <span class="iconfont">未选择&#xe608;</span>
                    </li>
                    <li>
                        <span>订单备注</span>
                        <span class="iconfont">口味、偏好&#xe608;</span>
                    </li>
                    <li>
                        <span>发票信息</span>
                        <span>该点不支持线上开票,请电话联系商户</span>
                    </li>
                    <li id="protect">
                        <p class="iconfont">号码保护&#xe71d;</p>
                        <p>号码保护中,将对商家、骑手隐藏您的真实手机号</p>
                    </li>
                </ul>
            </div>
            <div id="container">
                <footer>
                    <span>￥{{allprice}}</span><!--
                    --><span>已优惠￥{{save}}</span><!--
                    --><span>去支付</span>
                </footer>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return {
            allprice:8.8,
            save:0,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.fixed,true);
        this.compute();
    },
    methods:{
        back(){
            this.$store.commit('cleardata');
            this.$router.go(-1)
        },
        fixed(){
            let t = document.documentElement.scrollTop || document.body.scrollTop; 
            let head=document.getElementById('head');
            if(head&&t>head.offsetHeight){
                head.style.position='fixed';
                head.style.top='0px';
                head.style.zIndex=999;
            }else if(head&&t<=head.offsetHeight){
                head.style.position='relative';
            }
        },
        compute(){
            for(let i in this.$store.state.list){
                let price=parseFloat(this.$store.state.list[i].price.slice(1));
                this.allprice+=(price*parseInt(this.$store.state.list[i].count))
                this.allprice=parseFloat(this.allprice).toFixed(1)
                if(this.allprice>=35&&this.allprice<65){
                    this.allprice-=5;
                }else if(this.allprice>=65&&this.allprice<100){
                    this.allprice-=11;
                }else if(this.allprice>=100){
                    this.allprice-=15;
                }
            }
            if(this.allprice>=20&&this.allprice<35){
                this.save=0;
            }else if(this.allprice>=35&&this.allprice<65){
                this.save=5;
            }else if(this.allprice>=65&&this.allprice<100){
                this.save=11;
            }else if(this.allprice>=100){
                this.save=15;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$bg:linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
*{
    font-size: 0.2rem;
    margin: 0;
    padding: 0;
}
header{
    width: 100vw;
    height: 0.6rem;
    background: linear-gradient(90deg,#0af,#0085ff);
    #head{
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        position: relative;
        background: linear-gradient(90deg,#0af,#0085ff);
        color: white;
        span:first-child{
            position: absolute;
            left: 0.12rem;
        }
        span:last-child{
            font-weight: 700;
        }
    }
}
main{
    width: 100vw;
    height: 100vh;
    background-image: $bg;
    #location{
        width: 100vw;
        height: 1rem;
        span{
            color: hsla(0,0%,100%,.8);
            font-size: 0.18rem;
            display: block;
            padding: 0.12rem 0 0.12rem 0.18rem;
        }
        h2{
            font-size: 0.3rem;
            color: white;
            font-weight: 700;
            text-overflow: ellipsis;
            padding: 0 0 0 0.18rem;
        }
    }
    #keycard{
        width: 95vw;
        height: 1.3rem;
        margin: 0 2.5% 0.12rem 2.5%;
        background-color: white;
        p{
            width: 100%;
            height: 0.65rem;
            line-height: 0.65rem;
            position: relative;
            padding-left: 0.18rem;
            span:last-child{
                position: absolute;
                right: 0.36rem;
                color: #2395ff;
            }
        }
    }
    #product{
        width: 95%;
        background: white;
        margin: 0 2.5%;
        ul{
            list-style: none;
            width: 100%;
            li{
              width: 100%;
              height: 0.6rem; 
              line-height: 0.6rem;
            }
            #name{
                width:100%;
                height:0.6rem;
                line-height: 0.6rem;
                font-weight: 700;
                span{
                    margin-left: 0.18rem;
                }
            }
            .food{
                margin-bottom: 0.12rem;
                span{
                    display: inline-block;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    vertical-align: top ;
                    text-align: center;
                }
                .img{
                    width: 20%;
                    img{
                        max-height: 0.6rem;
                        max-width:0.6rem;
                    }
                }
                .pdname{
                    width: 40%;
                    text-align: left;
                    text-overflow: ellipsis;
                    font-size: 0.18rem;
                }
                .count{
                    width: 20%;
                    font-size: 0.175rem;
                }
                .price{
                    width: 20%;
                    color: #ff4a07;
                }
            }
            .activity{
                font-size: 0.175rem;
                color: #bbb;
            }
            .aaa{
                position: relative;
                span:first-child{
                    margin-left: 0.18rem;
                }
                span:last-child{
                    position: absolute;
                    right: 0.2rem;
                }
            }
            #redbag{
                span:last-child{
                    line-height: normal;
                    background: rgb(255,83,22);
                    color: white;
                    font-size: 0.175rem;
                    border-radius: 0.03rem;
                    top: 0.15rem;
                }
            }
        }
    }
    #checkout{
        width: 95%;
        background: white;
        margin: 0.12rem 2.5% 0 2.5%;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: 0.6rem; 
                line-height: 0.6rem;
                position: relative;
                span:first-child{
                    margin-left: 0.18rem;
                }
                span:last-child{
                    position: absolute;
                    right: 0.18rem;
                    font-size: 0.175rem;
                    color: #bbb;
                }
            }
            #protect{
                height: 0.8rem;
                margin-bottom: 0.18rem;
                p{
                    width: 100%;
                    height: 0.4rem;
                    text-align: left;
                    padding-left: 0.18rem;
                    line-height: 0.4rem;
                    &:last-child{
                        font-size: 0.175rem;
                        color: #bbb;
                        line-height: normal;
                    }
                }
            }
        }
    }
}
#container{
    height: 0.6rem;  
}
footer{
    width: 100vw;
    height: 0.6rem;
    background: #3C3C3C;
    position: fixed;
    bottom: 0;
    left: 0;
    line-height:0.6rem;
    span{
        height: 100%;
        display: inline-block;
        vertical-align:top;
        &:nth-child(1){
            width:20%;
            text-align: center;
            color: white;
            font-weight: 400;
        }
        &:nth-child(2){
            width:50%;
            font-size: 0.175rem;
            color: #999;
        }
        &:nth-child(3){
            width:30%;
            background: #00E067;
            text-align: center;
            color: white;
        }
    }
}
</style>