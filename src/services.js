
export function somar(n1, n2){
    return n1 + n2;
}


export function dobr(n1){
    let a =n1*2;
    return a;
}


export function temp(n1){

    let msg = false;

    if (n1 > 38 ){
        msg = true
    }
    return msg
}

export function media(n1, n2, n3 ){

    let a = (n1 + n2 + n3) / 3;

    return a;
}

export function array(n1){
    let a  = [0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < 11; i++) {
        a[i] = i * n1;
    }
    return a
}

export function corprim(cor){
    let msg = false ;
    let menor = cor.toLowerCase();
    

    if(menor == "vermelho" || menor == "amarelo" || menor == "azul")
        msg = true

        return msg;
}

export function cinema(inteiras, meias, semana, nacional){
    let int = 28.50;
    let met = 14.25;
    let valortotal = 0;

    if(nacional == "Brasileira"){
        int = 5;
        met = 5;
    }

    else if(semana == "quarta"){
        int = 14.25;
        met = 7.12;
    }

    valortotal = (int * inteiras) + (meias * met);

    return valortotal;
}

export function maior (n){
    let total=0
    for (let i = 0; i < n.length; i++) {
        if( n[i]>total )
        total=n[i]
    }
return total
}

export function repetir(frase, letra){
    let vezes = 0;

    for (let i = 0; i < frase.length; i++) {
        if(frase[i] == letra)
            vezes++

    }

    return vezes;
}