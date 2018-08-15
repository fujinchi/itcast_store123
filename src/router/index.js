import Vue from 'vue';
import Router from 'vue-router';
// 导入组件（所有import都应该写在文件最上面部分）
// 登陆页面配路由
import Login from '@/views/Login';
import Home from '@/views/Home';
// .vue可以省略
// 在build/webpack.base.conf.js 中进行配置
// extensions: ['.js','.vue','.json']
// @代表的是src的绝对路径
// import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { name: 'Login', path: '/login', component: Login },
    { name: 'Home', path: '/', component: Home }
  ]
});
