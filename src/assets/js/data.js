import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        userphone:"",
        show:"",
        pay:0,
        list:[]
    },
    mutations:{
        change(state,n){
            state.userphone=n
        },
        addfood(state,n){
            if(state.list.length){
                var food="";
                var result=state.list.some((item,index)=>{
                    if(item.name==n.name){
                        food=item;
                        return true
                    }else{
                        return false
                    }
                })
                if(result){//存在更新数量
                    food.count=n.count;
                }else{//不存在添加
                    state.list.push(n);
                }
            }else{
                state.list.push(n);
            }
        },
        subfood(state,m){
            var food="";
            var result=state.list.some((item,index)=>{
                if(item.name==m.name){
                    food=item;
                    return true
                }else{
                    return false
                }
            })
            if(result){//数量不是1直接--
                if(food.count!=1){
                    food.count--;
                }else{//数量是1直接删除
                    state.list.forEach((item,index)=>{
                        if(item.name==m.name){
                            state.list.splice(index,1)
                        }
                    });
                }
            }
        },
        cleardata(state){//清空数据
            state.list=[];
        }
    }
});
