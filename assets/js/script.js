
const form = document.getElementById('form');
// addEventListener  Ele permite que você defina uma função (ou manipulador) 
// que será executada quando ocorrer um evento específico no elemento alvo.
form.addEventListener('submit', function(event) {
    // PreventDefault serve para modificar ou controlar o comportamento padrão de eventos.
    // Evita que algo seja enviado
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    const bmi = (weight / (height * height)).toFixed(2);
    
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');
    
    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5) {
        description = 'Cuidado! Você precisa ganhar peso'
    }else if (bmi < 25) {
        description = 'Continue assim! Você esta no peso ideal'
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi < 30) {
        description = 'Você esta com Sobrepeso!'
    }else if(bmi < 35) {
        description = 'Você esta com obesidade grau 1!'
    }else if(bmi < 40) {
        description = 'Você esta com obesidade grau 2!'
    }else if (bmi >= 40) {
        description = 'Cuidado! Você esta com obesidade grau 3!'
    }else {
        description = 'O valor digitado é invalido'
    }

    value.textContent = bmi.replace('.', ',');
    value.textContent = bmi.replace('NaN', '0')
    document.getElementById('description').textContent = description;
});

function toggleTexto() {
    let text = document.getElementById("text-more-information");
    let arrowIcon = document.getElementById("arrow-icon");
    let body = document.querySelector('body');
    let newHeightSize = '150vh'; 
    let normalSize = '100vh'; 

    arrowIcon.classList.toggle("rotated");

    // Função para apresentar o texto informativo sobre o imc após o click na label de mais informações
    if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        body.style.height = newHeightSize;
    } else {
        text.classList.add("hidden");
        body.style.height = normalSize;
    }
}

