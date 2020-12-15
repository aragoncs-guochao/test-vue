<template>
    <router-view>
        <div class="container container1280 container1100 mt-60 mt-xs-30 ticketList-wrapper" id="ticketList" data-static="{% static 'fonts/AktivGrotesk-Bold.woff2' %}" data-url="{% url 'shows:list' %}">
            <navbar/>
            <p>asda</p>
            <footerbar/>
        </div>
    </router-view>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import navbar from '../components/NavBar.vue'
import footerbar from '../components/FooterBar.vue'

Vue.use(VueAxios, axios)

export default {
    name: 'home',
    components: {
        navbar,
        footerbar
    },
    get_data: function(){
        Vue.axios.get('http://127.0.0.1:8000/dashboard/shows/ticket/list/?show=1&page=1')
        .then(response => (console.log(response)))
        .catch(function (error) { // 请求失败处理
        console.log(error);
        });
    }
}
</script>

<style>

</style>