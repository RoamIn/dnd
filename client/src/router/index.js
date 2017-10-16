import Vue from 'vue';
import Router from 'vue-router';
import TPL from '@/components/tpl';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tpl',
            component: TPL
        }
    ]
});
