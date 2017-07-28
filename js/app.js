import styles from '../css/styles.css';
import styles2 from '../css/styles2.css';


import Router from './router';
import ready from 'document-ready-promise';


var router = new Router();
ready().then(() => {
    router.executePageModule();
});