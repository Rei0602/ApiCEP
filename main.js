

preencherCampos = (endereço) => {
    document.getElementById('rua').value = endereço.logradouro
    document.getElementById('bairro').value = endereço.bairro
    document.getElementById('cidade').value = endereço.localidade
}

const eNumero = (numero) => /^[0-9]+$/
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


const pesquisarCep = async() => {
    const cep = document.getElementById("cep").value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)){
        const dados = await fetch(url)
        const endereço = await dados.json()
            if(endereço.hasOwnProperty('erro')){
                alert('CEP não encontrado')
            }else{
                preencherCampos(endereço)
            }
        }else{
            document.getElementById('rua').value = 'CEP INVÁLIDO'
        }
    }


window.onload = function (){
    document.getElementById('cep').addEventListener('focusout', pesquisarCep)
}


