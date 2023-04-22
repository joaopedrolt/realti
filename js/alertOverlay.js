const overlayAlert = document.getElementById('alert-overlay');
const closeAlertOverlay = document.getElementById('close-alert-overlay');
const containerAlertOverlay = document.getElementById('container-alert-overlay');
const contentAlertOverlay = document.getElementById('content-alert-overlay');

let timeoutID;
let currentType = '';

function hideAlertOverley() {
    containerAlertOverlay.classList.add('fade-out');

    setTimeout(() => {
        overlayAlert.classList.remove('active');
        containerAlertOverlay.classList.remove('fade-out');
        containerAlertOverlay.classList.remove('done');
        containerAlertOverlay.classList.remove('error');
    }, 600)
}

function alertSwitch(type) {
    switch (type) {
        case 'subscribe':
            containerAlertOverlay.classList.add('done');
            contentAlertOverlay.innerText = 'Inscrição feita com sucesso! Você será notificado das nossas promoções.'
            overlayAlert.classList.add('active');
            break;
        case 'subscribe-invalid-email':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Por favor insira um e-mail válido!'
            overlayAlert.classList.add('active');
            document.getElementById('newsletter-input').value = '';
            break;
        case 'subscribe-cooldown-request':
            let remainingTime = parseInt(localStorage.getItem('remainingTime')) || 0;
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = `Por favor aguarde ${remainingTime > 1 ? `${remainingTime} minutos` :
                `${remainingTime} minuto`} para inserir um novo e-mail.`
            overlayAlert.classList.add('active');
            break;
        case 'contact-cooldown-request':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Por favor aguarde alguns instantes para mandar uma nova mensagem.';
            overlayAlert.classList.add('active');
            break;
        case 'internal-error':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Houve um problema técnico, por favor tente mais tarde, obrigado.'
            overlayAlert.classList.add('active');
            break;
        case 'email-sent':
            containerAlertOverlay.classList.add('done');
            contentAlertOverlay.innerText = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
            overlayAlert.classList.add('active');
            break;
        case 'contact-field-error':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Por favor preencha todos os campos corretamente.'
            overlayAlert.classList.add('active');
            break;
        case 'contact-empty-name':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Campo nome está vazio!'
            overlayAlert.classList.add('active');
            break;
        case 'contact-invalid-email':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Por favor insira um e-mail válido!'
            overlayAlert.classList.add('active');
            break;
        case 'contact-invalid-phone':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'Por favor insira um número válido!'
            overlayAlert.classList.add('active');
            break;
        case 'contact-message-length':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'A mensagem deve ter pelo menos 15 caracteres.'
            overlayAlert.classList.add('active');
            break;
        case 'api-not-connected':
            containerAlertOverlay.classList.add('error');
            contentAlertOverlay.innerText = 'API não conectada, apenas mostruário!'
            overlayAlert.classList.add('active');
            break;
        default:
            break;
    }

    timeoutID = setTimeout(() => {
        hideAlertOverley();
    }, 5000);
}

export function showAlertOverley(type) {
    if (overlayAlert.classList.contains('active')) {
        if (currentType != type) {
            clearTimeout(timeoutID);
            hideAlertOverley();
            setTimeout(() => {
                currentType = type;
                alertSwitch(type);
            }, 600)
        }
    } else {
        currentType = type;
        alertSwitch(type);
    }
}

closeAlertOverlay.onclick = () => {
    clearTimeout(timeoutID);
    hideAlertOverley();
};