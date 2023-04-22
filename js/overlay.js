"user strict";

import serversData from './data/servers.js';
import featuredData from './data/featured.js';

const overlay = document.getElementById('overlay');
const termsButton = document.getElementById('terms');
const closeDisclaimer = document.getElementById('close-overlay');
const serversCards = document.querySelectorAll('#products #products-box-container .box .content');
const featuredCards = document.querySelectorAll('#featured .content');

const overlayTitle = document.getElementById('overlay-title');

const procFamily = document.getElementById('proc-family');
const memoryLimit = document.getElementById('memory-limit');
const memoryGen = document.getElementById('memory-gen');
const memorySlots = document.getElementById('memory-slots');
const disks = document.getElementById('disks');

const partNumber = document.getElementById('part-number');
const compatibility = document.getElementById('compatibility');
const observation = document.getElementById('observation');

const overlayMain = document.getElementById('overlay-main');
const overlayContent = document.getElementById('overlay-content');

let insideClick = false;

function showOverlay() {
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlayContent.classList.add('active');
    }, 100)
}

function closeOverlay() {
    overlayContent.classList.add('remove');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 200)
    overlayContent.classList.remove('active');
}

serversCards.forEach((card) => {
    let cardButton = card.querySelector('.btn');
    cardButton.onclick = () => {
        const serverName = card.querySelector('h3').innerText;
        const cardServerData = serversData.find(serverData => serverData.name === serverName);
        
        if (cardServerData) {
            overlayTitle.innerHTML = cardServerData.name;
            let cpuListString = '';
            cardServerData.cpuList.forEach((cpu) => {
                cpuListString = cpuListString + `${cpu}; `
            })
            procFamily.innerHTML = cpuListString;
            memoryLimit.innerHTML = cardServerData.memoryLimit;
            memoryGen.innerHTML = cardServerData.memoryGen;
            memorySlots.innerHTML = cardServerData.memorySlots;
            disks.innerHTML = cardServerData.diskSlots;
        }

        overlayMain.classList.remove('featured');
        overlayMain.classList.remove('terms');
        overlayMain.classList.add('server');
        showOverlay();
    }
})

featuredCards.forEach((card) => {
    let cardButton = card.querySelector('.btn');
    cardButton.onclick = () => {
        const cardName = card.querySelector('h3').innerText;
        const cardData = featuredData.find(cardData => cardData.name === cardName);
        
        if (cardData) {
            overlayTitle.innerHTML = cardData.name;

            partNumber.innerHTML = cardData.pn;
            compatibility.innerHTML = cardData.compatibility;
            observation.innerHTML = cardData.observation;
        }

        overlayMain.classList.remove('terms');
        overlayMain.classList.remove('server');
        overlayMain.classList.add('featured');
        showOverlay();
    }
})

termsButton.onclick = () => {
    overlayTitle.innerHTML = 'Política de Privacidade';
    overlayMain.classList.remove('server');
    overlayMain.classList.remove('featured');
    overlayMain.classList.add('terms');
    showOverlay();
}

closeDisclaimer.onclick = () => {
    closeOverlay();
}

overlayContent.onclick = () => {
    insideClick = true;
};

overlay.onclick = () => {
    if(!insideClick){
        insideClick = false;
        closeOverlay();
    }

    insideClick = false;
};