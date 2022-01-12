import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import VueParticles from "vue-particles";
import LandingPage from "./components/LandingPage.vue";
import LoginSignup from "./components/LoginSignup/LoginSignup.vue";
import ForgotPwd from "./components/PwdReset/ForgotPwd.vue";
import PwdReset from "./components/PwdReset/PwdReset.vue";
import ProfileCompletion from "./components/Profile/ProfileCompletion.vue";
import Profile from "./components/Profile/Profile.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/login_signup', component: LoginSignup },
    { path: '/forgot_pwd', component: ForgotPwd },
    { path: '/pwd_reset', component: PwdReset },
    { path: '/profile_completion', component: ProfileCompletion },
    { path: '/profile', component: Profile },
  ]
})

app.use(router);
app.use(VueParticles);

app.mount('#app');
