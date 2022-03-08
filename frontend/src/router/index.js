import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";

Vue.use(VueRouter);

// ルート定義
const routes = [
    {
        path: "/",
        component: HomePage,
        // ログインが必要な画面には"requiresAuth"フラグをつけておく(DjangoのLoginRequiredみたいなもの)
        meta: { requiresAuth: true },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
