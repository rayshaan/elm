<template>
    <main>
        <div id="logo">
            <img src="../images/elmlogin.png" alt="">
        </div>
        <div id="message">
            <input type="text" placeholder="手机号" id="phone">
            <span>获取验证码</span>
            <input type="text" placeholder="验证码" id="code">
        </div>
        <div id="contract">          
            新用户登录即自动注册，并表示已同意
            <span class="blue">《用户服务协议》</span>和
            <span class="blue">《隐私权政策》</span>
        </div>
        <div id="login">
            <span @click="login()">登录</span>
        </div>
        <div id="us">
            <p>关于我们</p>
        </div>
    </main>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    methods:{
        login(){
            let phone=document.getElementById('phone').value;
            let code=document.getElementById('code').value;
            let reg=/^1[3|4|5|7|8][0-9]{9}$/;
            //是手机号且不为空
            if(reg.test(phone)&&code!=''){
                this.$router.push({
                    name:'my',
                    params:{data:phone}
                });
            }else{
                Toast('请确认输入的信息无误后再登陆');
            }
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    font-size: 0.175rem;
}

#logo{
    width: 100vw;
    height: 1.2rem;
    text-align: center;
    img{
        max-height: 40%;
        max-width: 40%;
        margin-top: 0.4rem;
    }
}
#message{
    width: 100vw;
    height: 1.8rem;
    position: relative;
    input{
        width: 70%;
        height: 0.5rem;
        margin: 0 15%;
        padding: 0.06rem 0 0.06rem 0.12rem;
        border-radius: 0.06rem;
        border-color: #DDDDDD;
        outline: none;
        border:none;
        border:1px solid #DEDEDE
    }
    span{
        position: absolute;
        right: 15%;
        top: 0.25rem;
        color: gray;
        font-size: 0.15rem;
    }
    #phone{
        margin-bottom: 0.24rem;
    }
}
#contract{
    width: 70vw;
    height: 0.5rem;
    margin: 0 15%;
    .blue{
        color: #52ACF0;
    }
}
#login{
    width: 100vw;
    height: 0.6rem;
    text-align: center;
    span{
        display: inline-block;
        width: 70%;
        height: 0.5rem;
        background: #02B6FD;
        border-radius:0.24rem;
        line-height: 0.5rem;
        margin-top: 0.24rem;
        color: white;
        font-size: 0.2rem;
        font-weight: bold;
    }
}
#us{
    margin-top: 0.36rem;
    text-align: center;
    color: gray;
}
</style>