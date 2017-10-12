import Vue from 'vue';
import router from '../vue/router';
import ElementUI from 'element-ui';
import Content from '../vue/components/Content.vue'

Vue.use(ElementUI);


new Vue({
    el: '#content',
    components: {
        'app-content': Content
    },
    router
});

