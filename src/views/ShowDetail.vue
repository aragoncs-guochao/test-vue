<template>
  <div
    class="container container1280 container1100 mt-60 mt-xs-30 ticketList-wrapper"
    id="ticketList"
    data-static="{% static 'fonts/AktivGrotesk-Bold.woff2' %}"
    data-url="{% url 'shows:list' %}"
  >
    <div class="row">
      <div v-for="(show, index) in shows" :key="show.insomniac_id">
        <div
          v-if="index % 3 === 0 && index > 1"
          class="clearfix visible-md"
        ></div>
        <div
          v-if="index % 4 === 0 && index > 1"
          class="clearfix visible-md visible-lg"
        ></div>
        <div class="col-md-3 col-sm-4">
          <div class="Img-panel">
            <div href="#" class="thumbnail">
              <a href="#"
                ><img
                  :src="show.bg_image"
                  class=""
                  width="310"
                  height="310"
                  alt="..."
              /></a>
            </div>
            <div class="caption show-info">
              <h5 class="h5">{{ show.name }}</h5>
              <p class="ms-date">{{ show.date }}</p>
              <p class="ms-addr">{{ show.location }}</p>
            </div>
            <div class="caption">
              <a href="#" class="btn In-btn btn-reg">{{ show.button_label }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import footerbar from "../components/FooterBar.vue";

Vue.use(VueAxios, axios);

export default {
  name: "show_detail",
  data: function () {
    return { shows: {} };
  },
  methods: {
    init: function () {
      var that = this;
      Vue.axios
        .get("http://127.0.0.1:8000/shows/list/api/")
        .then(function (response) {
          that.shows = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.init();
  },
  updated: function () {
    this.$nextTick(function () {
      footerbar.methods.footerPosition();
    });
  },
};
</script>

<style>
</style>