
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
        description = 'Cuidado! Você precisa comer safado'
    }else if (bmi < 25) {
        description = 'Continue assim! Você esta no peso ideal'
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi < 30) {
        description = 'Acho que o ideal seria fazer uma dieta! Sobrepeso'
    }else if(bmi < 35) {
        description = 'Você precisa de uma dieta! obesidade grau 1'
    }else if(bmi < 40) {
        description = 'Você precisa de uma para ontem! obesidade grau 2'
    }else if (bmi >= 40) {
        description = 'Gordo do carai para de comer! obesidade grau 3'
    }else {
        description = 'O valor digitado é invalido'
    }

    value.textContent = bmi.replace('.', ',');
    value.textContent = bmi.replace('NaN', '0')
    document.getElementById('description').textContent = description;
});

function toggleTexto() {
    let texto = document.getElementById("text-more-information");
    let iconeSeta = document.getElementById("icone-seta");
    let body = document.querySelector('body');
    let novoTamanhoHeight = '150vh'; 
    let tamanhoNormal = '100vh'; 

    iconeSeta.classList.toggle("rotacionado");

    // Função para apresentar o texto informativo sobre o imc após o click na label de mais informações
    if (texto.classList.contains("hidden")) {
        texto.classList.remove("hidden");
        body.style.height = novoTamanhoHeight;
    } else {
        texto.classList.add("hidden");
        body.style.height = tamanhoNormal;
    }
}

