import merge from 'lodash/merge';
/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Manager from './components/Manager.vue';
import Field from './components/Field.vue';
import './styles.scss';

let defaults = {
    API_URL: 'http://localhost:8080'
};

export default {
    install: (app, opts) => {
        app.component('app-icon', FontAwesomeIcon);
        app.component('vue-medialibrary-manager', Manager);
        app.component('vue-medialibrary-field', Field);

        const options = merge(defaults, opts);

        app.config.globalProperties.$medialibrary = options;
    }
};
