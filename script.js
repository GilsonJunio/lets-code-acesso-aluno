// Nome, email, idade, cidade, foto e senha
async function carregarDados(){
    let response = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
    let data = await response.json()
    let dados = data.alunos

    console.log(dados)

    localStorage.setItem('usuarios',JSON.stringify(dados))
    console.log(data)


}

let container = document.getElementById('container')

if(localStorage.getItem('usuarios') === null){
    carregarDados()
}


let botaoRegistrar = document.getElementById("botao-registro");
if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", () => {
        let usuario = document.getElementById("usuario").value;

        let email = document.getElementById("email").value;

        let idade = document.getElementById("idade").value;

        let cidade = document.getElementById("cidade").value;

        let foto = document.getElementById("foto").value;

        let senha = document.getElementById("senha").value;


        function mesmoEmail(email){
            let usuarios_verificar = JSON.parse(localStorage.getItem('usuarios')) || [] 

            let procurarEmailIgual = usuarios_verificar.find((usuarios_verificar) => usuarios_verificar.email === email) || [];                

            if(email === procurarEmailIgual.email){
                alert('ESTE EMAIL JÁ FOI CADASTRADO')            
            }
            return email === procurarEmailIgual.email               
        }
        function camposVazios(){
            const valoresRepassados = [{usuario,email,idade,cidade,foto,senha}]

            const dadosRepassados = valoresRepassados

            let procurarCampoVazio = valoresRepassados.find((valoresRepassados) => valoresRepassados.usuario === "")

            if(procurarCampoVazio){
                alert('EXISTEM CAMPOS VAZIOS!')
            }
            else{
            return false    
            }
        }

        if(mesmoEmail(email) === false && camposVazios() === false){
            alert('111111111')
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push({ usuario, email, idade, cidade, foto, senha });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
//            window.location.href = "../login/index.html"            
            console.log(ProcurarCamposVazios())

        //PÁGINA DE LOGIN    
            let titulo_Da_Secao = document.getElementById('tituloDaSecao')
                titulo_Da_Secao.innerHTML = 'Entrar'

            let input_De_Email = createElement('input')
                input_De_Email.setAttribute('name','email')
            
            let input_De_Senha = createElement('input')
                input_De_Senha.setAttribute('name','senha')

            let label_De_Email = createElement('label')
                label_De_Email.setAttribute('for','email')
                label_De_Email.innerHTML = 'Email'
            
            let label_De_Senha = createElement('label')
                label_De_Senha.setAttribute('for','senha')
                label_De_Senha.innerHTML = 'Senha'

        }
    }
)}
let botaoLogin = document.getElementById("botao_login");
if(botaoLogin){ 
    botaoLogin.addEventListener('click', () => {
        let emailLogin = document.getElementById("email_login").value
        let senhaLogin = document.getElementById("senha_login").value

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuario = usuarios.find(usuario => usuario.email === emailLogin && usuario.senha === senhaLogin)
            localStorage.setItem('usuarioLogado',JSON.stringify(usuario))

        console.log(usuarios, emailLogin, senhaLogin, usuario)
        if(usuario){
            window.location.href = "../boas_vindas/index.html"
        }
    })
}

let tituloDaSecao = document.getElementById('tituloDaSecao')
if(tituloDaSecao){
    
    let usuario = JSON.parse(localStorage.getItem('usuarioLogado')) || [];
    let titulo = document.getElementById('titulo')
    let imagem = document.createElement('img')
    let descricao = document.createElement('p')
    descricao.innerHTML = `Cidade: ${usuario.cidade}<br> Idade:${usuario.idade} <br>Email:${usuario.email}`

    imagem.setAttribute('src', usuario.foto)

    tituloDaSecao.textContent += usuario.usuario + '!'
    titulo.appendChild(tituloDaSecao)
    titulo.appendChild(imagem)
    titulo.appendChild(descricao)
}