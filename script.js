
function resultadoFinal(nomeUser) { 
    
    if (!nomeUser) {
        alert("Por favor, digite seu nome.");
        return;
    }


    let todasRespondidas = true;
    for (let i = 1; i <= 10; i++) {
        let respostaSelecionada = document.querySelector(`input[name="questao${i}"]:checked`);
        if (!respostaSelecionada) {
            todasRespondidas = false;
            break;
        }
    }

    if (!todasRespondidas) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }
    let respostaCertas = {
        questao1: 'C',
        questao2: 'A',
        questao3: 'B',
        questao4: 'B',
        questao5: 'B',
        questao6: 'D',
        questao7: 'D',
        questao8: 'B',
        questao9: 'C',
        questao10: 'A',
    }
    let totalCorretas = 0;
    for(let questao in respostaCertas){
        let respostaUser = document.querySelector(`input[name="${questao}"]:checked`).value
        if (respostaUser === respostaCertas[questao]) {
            totalCorretas++;
        }

    }

    let resposta = `
    <h1 class="textao">Parabéns ${nomeUser}! Você acertou ${totalCorretas} de 10 questões!</h1>
`;

result.innerHTML = resposta;
}

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value / 100; 
    const peso = +document.getElementById('peso').value;
    if (peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const valorIMC = (peso / (altura * altura)).toFixed(1);
    let classificaçao = "";

    if (valorIMC <= 18.4) {
        classificaçao = "Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        classificaçao = "Peso normal";
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        classificaçao = "Sobrepeso";
    } else if (valorIMC >= 30) {
        classificaçao = "Obesidade";
    }

    document.getElementById('resultado').innerText = `${nome}, seu IMC é de ${valorIMC} e você está classificado na categoria (${classificaçao})`;
}
function gasosa() {
    const nome = document.getElementById('nome').value;
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const distancia = +document.getElementById('distan').value;
    const kmLitro = +document.getElementById('kmLitro').value;
    const preco = +document.getElementById('preco').value;

    
    const litNece = (distancia / kmLitro).toFixed(2);

    const custTotal = (litNece * preco).toFixed(2);

    document.getElementById('resultado').innerText = `${nome}, você precisará de ${litNece} litros de combustível e gastará R$ ${custTotal} para se deslocar de ${origem} para ${destino}.`;
}

function gerar(mini,maxi,quanti) {

    let numerosSorteados = [];
    for (let i = 0; i < quanti; i++) {
        const numero = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
        numerosSorteados.push(numero);
    }
    document.getElementById('resultado').innerText = `Quantidade de Números Solicitados: ${quanti} - Números Sorteados: ${numerosSorteados.join(' - ')}`;
}
function Conversor() {
    
    const moedaBase = document.querySelector('input[list="moedasB"]').value;
    const moedaConverter = document.querySelector('input[list="moedasC"]').value;
    const valor = parseFloat(document.getElementById('valor').value);

    
    const cotacoes = {
        'Real': { 'Dolar': 0.18, 'Euro': 0.17 },
        'Dolar': { 'Real': 5.29, 'Euro': 0.89 },
        'Euro': { 'Real': 5.84, 'Dolar': 1.12 }
    };


    const taxa = cotacoes[moedaBase][moedaConverter];
    const valorConvertido = valor * taxa;

    document.getElementById('resultado').innerText = `O valor ${valor} convertido de ${moedaBase} para ${moedaConverter} é de ${valorConvertido.toFixed(2)}`;
}
