// 需要专门引入vue-router
import VueRouter from 'vue-router'
//引入组件
import footer from '../components/footer.vue'
import homepage from '../components/homepage.vue'
import find from '../components/find.vue'
import order from '../components/order.vue'
import my from '../components/my.vue'
import business from '../components/business.vue'
import details from '../components/details.vue'
import login from '../components/login.vue'
import pay from '../components/pay.vue'


export default new VueRouter({
    routes:[
        {
            path:'/',
            component:footer,
            children:[
                {
                    path:'/homepage',
                    component:homepage
                },
                {
                    path:'/find',
                    component:find
                },
                {
                    path:'/order',
                    component:order
                },
                {
                    path:'/my',
                    name:'my',
                    component:my
                },
                {
                    path:'/business',
                    component:business
                }
            ],
            redirect:'/homepage'
        },
        {
            path:'/details',
            component:details
        },
        {
            path:"/login",
            name:'login',
            component:login
        },
        {
            path:"/pay",
            component:pay
        }
    ]
})