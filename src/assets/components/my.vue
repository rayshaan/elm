<template>
    <main>
        <!-- 登陆/注册 -->
        <div id="head">
            <div id="leftimg">
                <img src="../images/elm.png" alt="">
            </div>
            <div id="righttitle">
                <p id="login" @click="islogin&&login()">登陆/注册</p>
                <p id="phone">
                    <span id="userphone" class="iconfont">&#xe617;登录后享受更多特权</span>
                    <span id="more">></span>
                </p>
            </div>
        </div>
        <!-- 红包/金币 -->
        <div id="activity">
            <div>
                <p><span class="iconfont icon">&#xe604;</span></p>
                <p class="title"><span>红包</span></p>
            </div>
            <div>
                <p><span class="iconfont icon" style="background:#6AC20B">&#xe60e;</span></p>
                <p class="title"><span>金币</span></p>
            </div>
        </div>
        <!-- 我的地址 -->
        <div id="address" class="my">
            <p>
                <span class="iconfont">&#xe640;</span>
                <span>我的地址</span>
                <span class="right">></span>
            </p>
        </div>
        <!-- 金币商城 -->
        <div id="gold" class="my">
            <p>
                <span class="iconfont" style="color:#94D94A">&#xe671;</span>
                <span>金币商城</span>
                <span class="right">></span>
            </p>
        </div>
        <!-- 我的客服 -->
        <div id="service" class="my">
            <p>
                <span class="iconfont">&#xe661;</span>
                <span>我的客服</span>
                <span class="right">></span>
            </p>
        </div>
        <!-- 下载app -->
        <div id="download" class="my">
            <p>
                <span class="iconfont">&#xe722;</span>
                <span>下载饿了么APP</span>
                <span class="right">></span>
            </p>
        </div>
        <!-- 规则中心 -->
        <div id="rule" class="my">
            <p>
                <span class="iconfont">&#xe6f4;</span>
                <span>规则中心</span>
                <span class="right">></span>
            </p>
        </div>
        <!-- 隐私政策 -->
        <div>

        </div>
    </main>
</template>
<script>
export default {
    data(){
        return {
            islogin:true
        }
    },
    methods:{
        login(){
            this.$router.push('/login');
        }
    },
    mounted(){
        document.getElementsByTagName('title')[0].innerHTML="我的";
        //登陆后
        if(this.$route.params.data){
            this.$store.commit('change',this.$route.params.data);
        }
        if(this.$store.state.userphone!=''){
            document.getElementById('login').innerHTML='饿了么用户';
            document.getElementById('userphone').innerHTML=this.$store.state.userphone;
            //取消点击事件
            this.islogin=false;
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    font-size: 0.2rem;
}
a{
    text-decoration: none;
}
main{
    background: #F5F5F5;
}
#head{
    width: 100%;
    height: 1.5rem;
    background: #00A4FF;
    font-size: 0.2rem;
    div{
        float: left;
    }
    #leftimg{
        width: 20%;
        height: 100%;
        text-align: center;
        img{
            border-radius: 50%;
            margin-top: 0.4rem;
        }
    }
    #righttitle{
        width: 80%;
        height: 100%;
        p{
            margin-left: 0.06rem;
        }
        #login{
            margin-top: 0.35rem;
            font-size: 0.3rem;
            color: #FFFFFF;
            font-weight: bolder;
        }
        #phone{
            margin-top: 0.06rem;
            position: relative;
            #userphone{
                font-size: 0.175rem;
                color: white;
            }
            #more{
                position: absolute;
                right: 0.18rem;
                top: -0.18rem;
                color: white;
            }
        }
    }
}
#activity{
    width: 100vw;
    height: 1.2rem;
    font-size: 0.2rem;
    background: white;
    margin-bottom: 0.12rem;
    div{
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
    }
    p{
        text-align: center;
    }
    span{
        display: inline-block;
    }
    .icon{
        width:0.36rem;
        height: 0.36rem;
        background: #FF5F3E;
        border-radius: 50%;
        line-height: 0.36rem;
        color: white;
        margin-top: 0.24rem;
    }
    .title{
        font-size: 0.175rem;
        margin-top: 0.06rem;
    }
}
.my{
    width: 100vw;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.12rem;
    background: white;
    p{
        position: relative;
        .iconfont{
            padding-right:0.06rem;
            color: #4DA6F0;
        }
        .right{
            position: absolute;
            right: 0.24rem;
            color: #BBBBBB;
        }
    }
}
#address{
    margin-bottom: 0.12rem;
}
#gold{
    margin-bottom: 0.12rem;
}
</style>