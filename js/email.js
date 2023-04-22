"user strict";

import { showAlertOverley } from './alertOverlay.js';

const buttonSubscribe = document.getElementById('btn-subscribe');

const buttonContactSend = document.getElementById('btn-send');

buttonContactSend.onclick = () => {
    showAlertOverley('api-not-connected');
};

buttonSubscribe.onclick = () => {
    showAlertOverley('api-not-connected');
};