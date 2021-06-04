<template>
    <main id="food">
         <!-- 菜单 -->
        <div id="menu">
            <div id="left">
            <!-- 左边分类页 -->    
                <ul>
                    <li v-for="(item,index) in list" :key=index @click="toShow(item.title)" :class="{choose:show==item.title}">{{item.name}}</li>
                </ul>
            </div>
            <div id="container">
                <div class="right" v-for="(item,index) in list" :key=index :id=item.title>
                    <p style="padding-left:0.15rem">{{item.name}}</p>
                    <section v-for="(it,ind) in item.foods" :key=ind>
                        <div class="foodimg">
                            <img :src=it.src alt="">
                        </div>
                        <div class="foodmsg">
                            <p>{{it.name}}</p>
                            <p>主要原料：{{it.material}}</p>
                            <p>
                                <span>月售{{it.sell}}份</span>
                                <span>好评率{{it.evaluate}}</span>
                            </p>
                            <p>
                                <span class="price">{{it.price}}</span>
                                <span style="visibility: hidden;" class="iconfont sub" @click="sub($event)">&#xe60d;</span>
                                <span style="visibility: hidden;" class="count">0</span>
                                <span class="iconfont add" @click="add($event)">&#xe603;</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
         <!-- 结算页面 -->
        <div id="wrap">
            <div id="footer">
                <div id="manjian">满35减5,满65减11,满100减15</div>
                <div id="jiesuan">
                    <div>
                        <span v-show="hide" id="allconut">0</span>
                        <div id="circle">
                            <span class="iconfont" id="shop">&#xe614;</span>
                        </div>
                    </div>
                    <div>
                        <span id="product">未选购商品</span>
                        <span>另需配送费8.8元</span>
                    </div>
                    <div id="send" @click="topay&&pay()">￥20起送</div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            show:'rexiao',
            hide:false,
            price:0,
            topay:false
        }
    },
    mounted(){
        let _this=this;
        this.$http.get('./data/food.json').then(resolve=>_this.list=resolve.data);
    },
    methods:{
        toShow(a){
            this.show=a;
            document.getElementById(a).scrollIntoView();
        },
        add(a){
            //点击+1
            a.target.previousElementSibling.innerHTML=parseInt(a.target.previousElementSibling.innerHTML)+1;
            //总数+1
            document.getElementById('allconut').innerHTML=parseInt(document.getElementById('allconut').innerHTML)+1;
            //显示减号和数量
            if(a.target.previousElementSibling.innerHTML>0){
                a.target.previousElementSibling.style.visibility='visible';
                a.target.previousElementSibling.previousElementSibling.style.visibility='visible';
                this.hide=true;
            }
            //购物车变色
            document.getElementById('shop').style.background="#3190E8";
            document.getElementById('shop').style.color="white";
            //价格
            let price_span=a.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
            let price=parseFloat(price_span.slice(1));
            //总价
            this.price+=price;
            let foodprice=parseFloat(parseFloat(this.price).toFixed(1))
            //选购提示
            let product=document.getElementById('product');
            product.innerHTML=`￥${foodprice}`;
            product.style.fontSize='0.2rem';
            product.style.fontWeight=400;
            product.style.color='white';

            let manjian=document.getElementById('manjian');
            let send=document.getElementById('send');
            //不到20
            if(foodprice<20){
                manjian.innerHTML=`还差<span style="color:red">${parseFloat(20-foodprice).toFixed(1)}</span>起送`;
                send.innerHTML=`还差￥${parseFloat(20-foodprice).toFixed(1)}起送`;
                send.style.fontSize="0.16rem";
            }else if(foodprice>=20&&foodprice<35){//满20起送
                manjian.innerHTML=`再买<span style="color:red">${parseFloat(35-foodprice).toFixed(1)}</span>减5元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
            }else if(foodprice>=35&&foodprice<65){//35-5
                manjian.innerHTML=`已减<span style="color:red">5</span>元,再买<span style="color:red">${parseFloat(65-foodprice).toFixed(1)}</span>减11元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
                product.innerHTML=`￥${parseFloat(foodprice)-5}`
            }else if(foodprice>=65&&foodprice<100){//65-11
                manjian.innerHTML=`已减<span style="color:red">11</span>元,再买<span style="color:red">${parseFloat(100-foodprice).toFixed(1)}</span>减15元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
                product.innerHTML=`￥${parseFloat(foodprice-11).toFixed(1)}`
            }else if(foodprice>=100){
                manjian.innerHTML=`已减<span style="color:red">15</span>元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
                product.innerHTML=`￥${parseFloat(foodprice-15).toFixed(1)}`
            }
            this.topay=foodprice>=20?true:false;

            let food={
                "name":a.target.parentNode.parentNode.firstChild.innerHTML,
                "count":parseInt(a.target.previousElementSibling.innerHTML),
                "price":a.target.parentNode.firstChild.innerHTML,
                "src":a.target.parentNode.parentNode.previousElementSibling.firstChild.src
            }
            //写入vuex
            this.$store.commit('addfood',food);
        },
        sub(a){
            //如果数量是0不能减小
            if(a.target.nextElementSibling.innerHTML==0){
                return
            }else{
                //点击-1
                a.target.nextElementSibling.innerHTML=parseInt(a.target.nextElementSibling.innerHTML)-1;
                //总数-1
                document.getElementById('allconut').innerHTML=parseInt(document.getElementById('allconut').innerHTML)-1;
                //如果减小到0,隐藏这行的减号按钮
                if(a.target.nextElementSibling.innerHTML==0){
                    a.target.style.visibility='hidden';
                    a.target.nextElementSibling.style.visibility='hidden';
                }
                //如果总数是0,减小就隐藏
                if(document.getElementById('allconut').innerHTML==0){
                    this.hide=false;
                }
            }
            let price_span=a.target.previousElementSibling.innerHTML;
            let price=parseFloat(price_span.slice(1));

            this.price-=price;
            let foodprice=parseFloat(parseFloat(this.price).toFixed(1))
            let product=document.getElementById('product');
            product.innerHTML=`￥${foodprice}`;
            product.style.fontSize='0.2rem';
            product.style.fontWeight=400;
            product.style.color='white';

            let manjian=document.getElementById('manjian');
            let send=document.getElementById('send');
            if(foodprice==0){//减小到0
                document.getElementById('shop').style.background="#363636";
                document.getElementById('shop').style.color="#5F5F63";

                manjian.innerHTML=`<span>满35减5,满65减11,满100减15</span>`;
                product.innerHTML='未选购商品'
                product.style.fontSize="0.175rem";
                product.style.fontWeight="normal";
                product.style.color="rgb(153,153,153)";
                send.innerHTML=`￥20起送`;
                send.style.fontSize="0.175rem";
                send.style.background='rgb(83,83,86)';
                send.style.color='white'
            }else if(foodprice>0&&foodprice<20){//减到0~20
                manjian.innerHTML=`还差<span style="color:red">${parseFloat(20-foodprice).toFixed(1)}</span>起送`;
                send.innerHTML=`还差￥${parseFloat(20-foodprice).toFixed(1)}起送`;
                send.style.fontSize="0.16rem";
                send.style.background='rgb(83,83,86)';
                send.style.color='white'
            }else if(foodprice>=20&&foodprice<35){//20~35
                manjian.innerHTML=`再买<span style="color:red">${parseFloat(35-foodprice).toFixed(1)}</span>减5元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
            }else if(foodprice>=35&&foodprice<65){
                manjian.innerHTML=`已减<span style="color:red">5</span>元,再买<span style="color:red">${parseFloat(65-foodprice).toFixed(1)}</span>减5元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
                product.innerHTML=`￥${parseFloat(foodprice)-5}`
            }else if(foodprice>=65&&foodprice<100){
                manjian.innerHTML=`已减<span style="color:red">11</span>元,再买<span style="color:red">${parseFloat(100-foodprice).toFixed(1)}</span>减5元`;
                send.innerHTML=`<router-link to="/pay">去结算</router-link>`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
                product.innerHTML=`￥${parseFloat(foodprice-11).toFixed(1)}`
            }else if(foodprice>=100){
                manjian.innerHTML=`已减<span style="color:red">15</span>元`;
                send.innerHTML=`去结算`;
                send.style.fontSize="0.2rem";
                send.style.background='#38CA73';
                product.innerHTML=`￥${parseFloat(foodprice-15).toFixed(1)}`
            }
            this.topay=foodprice>=20?true:false;

            let food={
                "name":a.target.parentNode.parentNode.firstChild.innerHTML,
                "count":parseInt(a.target.nextElementSibling.innerHTML)+1,
                "price":a.target.previousElementSibling.innerHTML,
                "src":a.target.parentNode.parentNode.previousElementSibling.firstChild.src
            }
            //写入vuex
            this.$store.commit('subfood',food);
        },
        pay(){
            let price=document.getElementById('product').innerHTML.slice(1);

            this.$router.push('/pay')
            
        }
        
    }
}
</script>
<style lang="scss" scoped>
//当前选中
.choose{
    background: #ffffff;
    color: rgb(51,51,51);
}
#menu{
    &::-webkit-scrollbar{
        width:0;   
    }
    width: 100%;
    font-size: 0.175rem;
    margin-top: 0.06rem;
    height: 100vh;
    position: relative;
    div{
        float: left;
    }
    #left{
        width: 1rem;
        height: 100%;
        background: #F8F8F8;
        ul{
            li{
                text-align: center;
                padding: 0.1rem 0 0.1rem 0;
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                color: #666;
                &:first-child{
                    span{
                        color: red;
                    }
                }
            }
        }
    }
    #container{
        width: calc(100% - 1rem);
        height: 100%;
        overflow-y: scroll;
        .right{
            width: 100%;
            
            section{
                width: 100%;
                height: 1.75rem;
                float: left;
                div{
                    float: left;
                }
                .foodimg{
                    width: 40%;
                    height: 100%;
                    img{
                        max-height: 80%;
                        max-width: 80%;
                        margin: 0.12rem 0 0 0.12rem;
                    }
                }
                .foodmsg{
                    width: 60%;
                    height: 100%;
                    p:nth-child(1){
                        font-size: 0.25rem;
                        color: rgb(51,51,51);
                        font-weight:700;
                        margin-top: 0.12rem;
                    }
                    p:nth-child(2){
                        font-size: 0.1rem;
                        color: rgb(153,153,153);
                        margin: 0.06rem 0;
                    }
                    p:nth-child(3){
                        @extend p:nth-child(2);
                        span:nth-child(2){
                            margin-left: 0.06rem;
                        }
                    }
                    p:nth-child(4){
                        margin-top: 0.30rem;
                        position: relative;
                        .price{
                            color: rgb(255,83,57);
                            font-family: poison,PingFang SC,Helvetica Neue,Arial,sans-serif;
                            font-size: 0.2rem;
                        }
                        .sub{
                            font-size: 0.275rem;
                            color: #2395FF;
                            position: absolute;
                            right: 0.95rem;
                            top: 0.01rem;
                        }
                        .count{
                            position: absolute;
                            right: 0.7rem;
                            top: 0.05rem;
                        }
                        .add{
                            font-size: 0.3rem;
                            color: #2395FF;
                            position: absolute;
                            right: 0.3rem;
                        }
                    }
                }
            }
        }
    }
}
#wrap{
    height:1rem;
}
#footer{
    width: 100vw;
    font-size: 0.2rem;
    position: fixed;
    height: 1rem;
    bottom: 0;
    left: 0;
    #manjian{
        width:100vw;
        height: 0.3rem;
        background: #FFFADB;
        text-align: center;
        font-size: 0.12rem;
        line-height: 0.3rem;
        position: relative;
    }
    #jiesuan{
        width: 100vw;
        height: 100%;
        background: #505052;
        #allconut{
            display: inline-block;
            width: 0.24rem;
            height: 0.24rem;
            background: red;
            color: white;
            border-radius: 50%;
            line-height: 0.24rem;
            position: absolute;
            left: 0.7rem;
            top:-0.2rem;
            z-index: 999;
            text-align: center;
            font-size: 0.175rem;
        }
        div{
            float: left;
        }
        div:nth-child(1){
            width: 25%;
            height: 100%;
            position: relative;
        }
        #circle{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: #444444;
            position: absolute;
            top: -0.2rem;
            left: 0.25rem;
            text-align: center;
            line-height: 0.6rem;
            span{
                display: inline-block;
                width: 70%;
                height: 70%;
                background: #363636;
                border-radius: 50%;
                margin-top: 0.12rem;
                font-size: 0.3rem;
                color: #5F5F63;
            }
        }
        div:nth-child(2){
            width: 50%;
            height: 100%;
            color: rgb(153,153,153);
            span{
                font-size: 0.16rem;
                display: block;
            }
            span:first-child{
                margin-top: 0.12rem;
            }
        }
        div:nth-child(3){
            width: 25%;
            height: 1rem;
            background: #535356;
            color: white;
            line-height: 0.7rem;
            text-align: center;
            font-weight: 700;
        }
    }
}
</style>