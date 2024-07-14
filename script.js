// Nome, email, idade, cidade, foto e senha
let BODY = document.getElementsByTagName('body')
//console.log(body)

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
            /***********CONSTRUIR PÁGINA DE LOGIN*******************/
            let limpar = document.getElementById('formRegistro')
                container.removeChild(limpar)


            let titulo_Da_Secao = document.getElementById('tituloDaSecao')
                titulo_Da_Secao.innerHTML = 'Entrar'

            let container_dados = document.createElement('div')
                container_dados.setAttribute('id','containerDados')                
                container.appendChild(container_dados)

            let input_De_Email = document.createElement('input')
                input_De_Email.setAttribute('name','email')
            
            let input_De_Senha = document.createElement('input')
                input_De_Senha.setAttribute('name','senha')

            let label_De_Email = document.createElement('label')
                label_De_Email.setAttribute('for','email')
                label_De_Email.innerHTML = 'Email'
            
            let label_De_Senha = document.createElement('label')
                label_De_Senha.setAttribute('for','senha')
                label_De_Senha.innerHTML = 'Senha'

            let botao_Enviar = document.createElement('button')
            botao_Enviar.setAttribute('id','botao_Enviar')
            botao_Enviar.setAttribute('type','button')
            botao_Enviar.innerHTML = 'Entrar'
            /************CARREGAR PÁGINA DE LOGIN*******************/

            container.appendChild(container_dados)
            container_dados.appendChild(label_De_Email)
            container_dados.appendChild(input_De_Email)
            container_dados.appendChild(label_De_Senha)
            container_dados.appendChild(input_De_Senha)
            container_dados.appendChild(botao_Enviar)

            /*************CONSTRUIR PÁGINA DO USUÁRIO*************/
            
            let botaoEnviar = document.getElementById('botao_Enviar')
            botaoEnviar.addEventListener('click',() => {
                
                container.removeChild(container_dados)
                titulo_Da_Secao.innerHTML = `Bem vindo !`

                let container_painel = document.createElement('div')
                    container_painel.setAttribute('id','containerPainel')
            /****************CONSTRUIR MENU LATERAL***************/
                let pp = document.createElement('img')
                pp.setAttribute('src','https://cdn-icons-png.freepik.com/512/3682/3682323.png')
                pp.setAttribute('width','100px')
                pp.setAttribute('style','margin-left:250px;')
                let pp_usuario = document.createElement('h3')
                pp_usuario.innerHTML = "usuario"
                pp.setAttribute('style','margin-left:250px;')

                let ul_menu = document.createElement('ul')
                    ul_menu.setAttribute('id','menu')

                let li_menu_node_1 = document.createElement('button')
                    li_menu_node_1.innerHTML = 'PERFIL'
                
                let li_menu_node_2 = document.createElement('button')
                    li_menu_node_2.innerHTML = 'ALUNOS'
                
                let li_menu_node_3 = document.createElement('button')
                    li_menu_node_3.innerHTML = 'EXERCÍCIOS'

               
            /*******************CARREGAR MENU LATERAL*************/
                ul_menu.appendChild(pp)
                ul_menu.appendChild(pp_usuario)
                ul_menu.appendChild(li_menu_node_1)
                ul_menu.appendChild(li_menu_node_2)
                ul_menu.appendChild(li_menu_node_3)

                
            /****************CARREGAR PÁGINA DO USUÁRIO**********/

                container.appendChild(container_painel)
                document.body.appendChild(ul_menu)

            /**************************************************/



            })

        /*if(mesmoEmail(email) === false && camposVazios() === false){
            alert('111111111')
           // let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            //usuarios.push({ usuario, email, idade, cidade, foto, senha });
            //localStorage.setItem("usuarios", JSON.stringify(usuarios));
//            window.location.href = "../login/index.html"            
//            console.log(ProcurarCamposVazios())

        //PÁGINA DE LOGIN    




        }*/
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
/*
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
*/