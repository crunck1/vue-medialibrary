import merge from 'lodash/merge';
/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

import Manager from './components/Manager.vue';
import Field from './components/Field.vue';
import './styles.scss';

let defaults = {
    API_URL: 'http://localhost:8080'
};

export default {
    install(Vue, opts) {
        Vue.component('app-icon', FontAwesomeIcon);
        Vue.component('vue-medialibrary-manager', Manager);
        Vue.component('vue-medialibrary-field', Field);


        const options = merge(defaults, opts);

        Vue.prototype.$medialibrary = options;
    },
};

export { Manager, Field };
