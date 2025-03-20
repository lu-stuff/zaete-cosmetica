// Formatar telefone
function formatarTelefone(input) {
    let num = input.value.replace(/\D/g, '');
    
    if (num.length > 10) {
        input.value = `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7, 11)}`;
    } else if (num.length > 5) {
        input.value = `(${num.slice(0, 2)}) ${num.slice(2, 6)}-${num.slice(6, 10)}`;
    } else if (num.length > 2) {
        input.value = `(${num.slice(0, 2)}) ${num.slice(2)}`;
    }
}

// Formatar CPF
function formatarCPF(input) {
    let num = input.value.replace(/\D/g, '');
    
    if (num.length > 9) {
        input.value = `${num.slice(0, 3)}.${num.slice(3, 6)}.${num.slice(6, 9)}-${num.slice(9, 11)}`;
    } else if (num.length > 6) {
        input.value = `${num.slice(0, 3)}.${num.slice(3, 6)}.${num.slice(6)}`;
    } else if (num.length > 3) {
        input.value = `${num.slice(0, 3)}.${num.slice(3)}`;
    }
}

// Formatar CEP
function formatarCEP(input) {
    let num = input.value.replace(/\D/g, '');
    if (num.length > 5) {
        input.value = `${num.slice(0, 5)}-${num.slice(5, 8)}`;
    }
}
