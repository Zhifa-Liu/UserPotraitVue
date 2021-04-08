import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home';
import yearBase from "../components/yearBase";
import emailLike from "../components/emailLike";
import carrierLike from "../components/carrierLike";
import useTypeLike from "../components/useTypeLike";
import payTypeLike from "../components/payTypeLike";
import brandLikeOfBags from "../components/brandLikeofBags";
import brandLikeOfClothes from "../components/brandLikeOfClothes";
import brandLikeOfShoes from "../components/brandLikeOfShoes";
import consumptionLevel from "../components/consumptionLevel";
import consumptionLevelDetail from "../components/consumptionLevelDetail";
import productTypeScanCount from "../components/productTypeScanCount";
import productTypeScanCountNew from "../components/productTypeScanCountNew";
import productTypeSale from "../components/productTypeSale";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/yearBase',
            name: 'yearBase',
            component: yearBase,
        },
        {
            path: '/carrierLike',
            name: 'carrierLike',
            component: carrierLike,
        },
        {
            path: '/emailLike',
            name: 'emailLike',
            component: emailLike,
        },
        {
            path: '/useTypeLike',
            name: 'useTypeLike',
            component: useTypeLike,
        },
        {
            path: '/payTypeLike',
            name: 'payTypeLike',
            component: payTypeLike,
        },
        {
            path: '/brandLikeOfShoes',
            name: 'brandLikeOfShoes',
            component: brandLikeOfShoes,
        },
        {
            path: '/brandLikeOfClothes',
            name: 'brandLikeOfClothes',
            component: brandLikeOfClothes,
        },
        {
            path: '/brandLikeOfBags',
            name: 'brandLikeOfBags',
            component: brandLikeOfBags,
        },
        {
            path: '/consumptionLevel',
            name: 'consumptionLevel',
            component: consumptionLevel,
        },
        {
            path: '/consumptionLabel',
            name: 'consumptionLabel',
            component: consumptionLevelDetail,
        },
        {
            path: '/productTypeScanCount',
            name: 'productTypeScanCount',
            component: productTypeScanCount,
        },
        {
            path: '/productTypeScanCountNew',
            name: 'productTypeScanCountNew',
            component: productTypeScanCountNew,
        },
        {
            path: '/productTypeSale',
            name: 'productTypeSale',
            component: productTypeSale,
        },
    ]
})
