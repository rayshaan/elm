<template>
    <main>
        <section v-for="(item,index) in list" :key=index>
            <div class="leftimg">
                <img :src=item.img>
            </div>
            <div class="righttitle">
                <p class="title">
                    <span>{{item.name}}</span>
                    <span>{{item.state}}</span>
                </p>
                <p class="time">{{item.time}}</p>
                <p class="product">
                    <span>{{item.product}}</span>
                    <span>{{item.price}}</span>
                </p>
            </div>
        </section>
        <div id="more">
            <p>查看三个月前的外卖订单 ﹀</p>
        </div>
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
        this.$http.get('./data/order.json').then(resolve=>this.list=resolve.data.list);
        document.getElementsByTagName('title')[0].innerHTML="订单";
    }
}
</script>
<style lang="scss" scoped>
*{
    font-size: 0.2rem;
}
main{
    background: #F5F5F5;
}
section{
    width:100vw;
    height: 1.35rem;
    background: #FFFFFF;
    margin: 0.12rem 0;
    div{
        float: left;
    }
    .leftimg{
        width:17.5%;
        height:100%;
        text-align: center;
        img{
            max-height: 70%;
            max-width:70%;
            padding-top: 0.12rem;
        }
    }
    .righttitle{
        width:82.5%;
        height:100%;
        .title{
            width: 100%;
            margin-top: 0.1rem;
            position: relative;
            span:last-child{
                color: #B1B1B1;
                font-size: 0.175rem;
                position: absolute;
                right: 0.24rem;
            }
        }
        .time{
            margin-top: 0.03rem;
            color: #B1B1B1;
            font-size: 0.16rem;
        }
        .product{
            padding: 0.3rem 0 0.2rem 0;
            position: relative;
            span:first-child{
                font-size: 0.175rem;
            }
            span:last-child{
                font-size: 0.175rem;
                font-weight: bold;
                position: absolute;
                right: 0.24rem;
            }
        }
    }
}
#more{
    width:100vw;
    height: 0.6rem;
    text-align: center;
    p{
        font-size: 0.15rem;
        color: #B1B1B1;
    }
}
</style>