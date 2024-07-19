// 1) ESTRUTURA

/* 

    function(a, b, ...args) {
        // ...
    }

*/

// 2) FUNÇÃO SEM PARÂMETRO "REST"

function incentivarQuester(mensagem, nomeQuester){
    console.log(`${mensagem} ${nomeQuester}`);
}

incentivarQuester("Parabéns por ter chego ao módulo de JavaScript avançado,", "João");

// 3) FUNÇÃO COM PARÂMETRO REST

function incentivarQuesterRest(msg, ...nomesQuesters){
    console.log(nomesQuesters);
    console.log(`${msg} ${nomesQuesters}`);
    nomesQuesters.map(nomeQuester => console.log(`${msg} ${nomeQuester}`));
}

incentivarQuesterRest("Parabéns por ter chego ao módulo de JavaScript avançado,", "João", "Pedro ", "Raphael", 1, true);