let botao = document.getElementById('botao')
function updateContator(){
    let counter = document.getElementById('counter')
    if(localStorage.peoples){
        let Npeople = JSON.parse(localStorage.peoples).length
        counter.innerHTML = Npeople
    }
    else{
        counter.innerHTML = 0
    }
}

botao.addEventListener('click', ()=>{
    // Peguei os values dos meus 2 inputs
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    
    if(localStorage.peoples){
        let array = JSON.parse(localStorage.peoples)//Transformei novamente para uma array, para poder adicionar novos elementos
        array.push({nome: fname, sobrenome: lname})//Adicinando elementos ao array
        localStorage.setItem('peoples', JSON.stringify(array))
    }
    else{
        localStorage.setItem('peoples', JSON.stringify([{nome: fname, sobrenome: lname}]))// Caso não exista, crie esse array, com esse objeto e essas propriedades // Está como string, pois o LocalStorage armazena apenas como string/number/booleano
    }
    updateContator()//Atualiza o contador ao adicionar um novo objeto 
})
updateContator() // Serve para mostrar o contador, mesmo que não tenha nenhum objeto no nosso array
