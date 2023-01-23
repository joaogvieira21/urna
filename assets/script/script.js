var tela;
var selecionado;
var indexEleitor;
var indexVereador;
var indexPrefeito;
var numVote = "";
var etapa = 0;
const modal1 = document.querySelector('.modal-container1');
const modal2 = document.querySelector('.modal-container2');
const modal3 = document.querySelector('.modal-container3');

//LIGA URNA E INICIA PRIMEIRA ETAPA
function ligaUrna () {
    tela = document.getElementById("tela")
    tela.style.background = "linear-gradient(to right, #e8e8e8, #c1c1c1)";
    tela.innerHTML = `
        <div class="logo-entrada">
            <img class="blinkFadeIn" id="logo-entrada" src="assets/imgs/logo.png" alt="">
        </div>`
    setTimeout(fadeOut,1500)
    function fadeOut (){
        tela.innerHTML = `
        <div class="logo-entrada">
            <img class="blinkFadeOut" id="logo-entrada" src="assets/imgs/logo.png" alt="">
        </div>`
        setTimeout(primeiraEtapa,900)
    
    }
}

//BOTAO NUMERAIS
function clicaNum (n){
    if (etapa==1) {
        if (numVote.length==0){
            numero[0].innerHTML = n;             
            numVote = numVote + n;
            numero[0].classList.remove('blink');
            numero[1].classList.add('blink');
            verificaVoto(numVote)
        } else if (numVote.length==1){
            numero[1].innerHTML = n;
            numVote = numVote + n;
            numero[1].classList.remove('blink');
            numero[2].classList.add('blink');
            verificaVoto(numVote)
        }else if (numVote.length==2){
            numero[2].innerHTML = n;
            numVote = numVote + n;
            numero[2].classList.remove('blink');
            verificaVoto(numVote)
        } 
    }else if (etapa==2){
        if (numVote.length==0){
            numero[0].innerHTML = n;             
            numVote = numVote + n;
            numero[0].classList.remove('blink');
            numero[1].classList.add('blink');
            verificaVoto(numVote)
        } else if (numVote.length==1){
            numero[1].innerHTML = n;
            numVote = numVote + n;
            numero[1].classList.remove('blink');
            numero[2].classList.add('blink');
            verificaVoto(numVote)
        }else if (numVote.length==2){
            numero[2].innerHTML = n;
            numVote = numVote + n;
            numero[2].classList.remove('blink');
            numero[3].classList.add('blink');
            verificaVoto(numVote)
        }else if (numVote.length==3){
            numero[3].innerHTML = n;
            numVote = numVote + n;
            numero[3].classList.remove('blink');
            numero[4].classList.add('blink');
            verificaVoto(numVote)
        }else if (numVote.length==4){
            numero[4].innerHTML = n;
            numVote = numVote + n;
            numero[4].classList.remove('blink');
            verificaVoto(numVote)
        }
    }else if (etapa==3) {
        if (numVote.length==0){
            numero[0].innerHTML = n;             
            numVote = numVote + n;
            numero[0].classList.remove('blink');
            numero[1].classList.add('blink');
            verificaVoto(numVote)
        } else if (numVote.length==1){
            numero[1].innerHTML = n;
            numVote = numVote + n;
            numero[1].classList.remove('blink');
            verificaVoto(numVote)
        }
    }
} 

//BOTAO EM BRANCO
function clicaBranco (){
    

}
//BOTAO CORRIGE
function clicaCorrige (){ 
    if (etapa==1){
        if (numVote.length==3){
            numero[2].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[2].classList.add('blink');
            zeraNome()
        } else if (numVote.length==2){
            numero[1].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[1].classList.add('blink');
            numero[2].classList.remove('blink');
            zeraNome()
        }else if (numVote.length==1){
            numero[0].innerHTML = "";
            numVote = numVote.slice(0, -1);  
            numero[0].classList.add('blink');
            numero[1].classList.remove('blink');
            zeraNome()
        }
    } else if (etapa==2){
        if (numVote.length==5){
            numero[4].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[4].classList.add('blink');
            zeraNome()
        }
        else if (numVote.length==4){
            numero[3].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[3].classList.add('blink');
            numero[4].classList.remove('blink');
            zeraNome()
        }
        else if (numVote.length==3){
            numero[2].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[2].classList.add('blink');
            numero[3].classList.remove('blink');
            zeraNome()
        } else if (numVote.length==2){
            numero[1].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[1].classList.add('blink');
            numero[2].classList.remove('blink');
            zeraNome()
        }else if (numVote.length==1){
            numero[0].innerHTML = "";
            numVote = numVote.slice(0, -1);  
            numero[0].classList.add('blink');
            numero[1].classList.remove('blink');
            zeraNome()
        }
    }else if (etapa==3){
        if (numVote.length==2){
            numero[1].innerHTML = "";
            numVote = numVote.slice(0, -1);
            numero[1].classList.add('blink');
            zeraNome()
        }else if (numVote.length==1){
            numero[0].innerHTML = "";
            numVote = numVote.slice(0, -1);  
            numero[0].classList.add('blink');
            numero[1].classList.remove('blink');
            zeraNome()
        }
    } 
}


//BOTAO CONFIRMA

function clicaConfirma (){
    if (etapa==1){
        etapa2()
    } else if (etapa==2){
        etapas[1].cVereadores[indexVereador].votos += 1;
        etapas[0].eleitores[indexEleitor].votoVereador = numVote;
        etapas[0].eleitores[indexEleitor].votou = "Sim";
        etapa3()
    }else if (etapa==3){
        etapas[2].cPrefeitos[indexPrefeito].votos += 1;
        etapas[0].eleitores[indexEleitor].votoPrefeito = numVote;
        tela.classList.add('fim')
        tela.innerHTML = `<div class="resultado">FIM</div>`
        let faltaVotar = etapas[0].eleitores.filter(eleitor => eleitor.votou == "Não")
        console.log(faltaVotar)
        if (faltaVotar.length>0){
            setTimeout(primeiraEtapa, 1300);
        }/*else {
            setTimeout(resultado, 1300);
        }*/
    }
    
}
/*function resultado (){
    tela.classList.remove('fim')
    tela.classList.add('resultado')
    let resultado = document.querySelector('.resultado')
    etapas[1].cVereadores.forEach(element => {
        resultado.innerHTML += `Nome: ${element.nomeVereador} - Votos: ${element.votos}`
    });
    
}*/

function primeiraEtapa (){
    etapa=1
    numVote=""
    /*let logoEntrada = document.getElementById("logo-entrada")
    logoEntrada.style.display = "none";*/
    tela.classList.remove('fim')
    tela.innerHTML = `
    <div class="left-right">
        <div class="visor-left">
            <div class="d1">
                <div class="d1-1">
                </div>
                <div class="d1-2">
                    ${etapas[0].titulo}
                </div>
                <div class="d1-3" id="d1-3">
                      
                </div>
                <div class="d1-4">
                    <div class="nome" id="nome">
                    </div>
                    <div class="vicePrefeito" id="nome">
                    </div>
                    <div class="numeroPartido">
                    </div>
                    <div class="partido">
                    </div>
                </div>
            </div>
        </div>
        <div class="visor-right">
        </div>
    </div>
        <div class="d2">
            Aperte a tecla:<br/>
            CONFIRMA para CONFIRMAR<br/>
            CORRIGE para REINICIAR
        </div>
    `
   let d1_3 = document.getElementById("d1-3")

   for (var i = 0;i<etapas[0].qtdeNum;i++){
    d1_3.innerHTML += `
        <div class="inp" id="numero">
        </div>
        `;
    }
    numero[0].classList.add('blink');
}
function etapa2(){
    etapa = 2;
    numVote = ""
    let d11 = document.querySelector('.d1-1')
    let d12 = document.querySelector('.d1-2')
    let d13 = document.querySelector('.d1-3')
    let nome = document.getElementById("nome");
    let numeroPartido = document.querySelector('.numeroPartido')
    let partido = document.querySelector('.partido')
    nome.innerHTML = ``
    d13.innerHTML = ``
    d11.innerHTML = `Seu voto para`
    d12.innerHTML = `Vereador` 
    numeroPartido.innerHTML = ``
    partido.innerHTML = ``

    for (var i = 0;i<etapas[1].qtdeNum;i++){
        
        d13.innerHTML += `
            <div class="inp" id="numero">
            </div>
            `;
        }
    numero[0].classList.add('blink');
    console.log(indexEleitor)
}
function etapa3(){
    etapa = 3;
    numVote = ""
    let d11 = document.querySelector('.d1-1')
    let d12 = document.querySelector('.d1-2')
    let d13 = document.querySelector('.d1-3')
    let nome = document.getElementById("nome");
    let numeroPartido = document.querySelector('.numeroPartido')
    let partido = document.querySelector('.partido')
    nome.innerHTML = ``
    d13.innerHTML = ``
    d11.innerHTML = `Seu voto para`
    d12.innerHTML = `Prefeito` 
    numeroPartido.innerHTML = ``
    partido.innerHTML = ``

    for (var i = 0;i<etapas[2].qtdeNum;i++){
        
        d13.innerHTML += `
            <div class="inp" id="numero">
            </div>
            `;
        }
    numero[0].classList.add('blink');
    console.log(indexEleitor)
}



//VERIFICA SE O ELEITOR ESTÁ NA BASE DE DADOS
var vereadorEncontrado = []
var prefeitoEncontrado = []
var nomeEncontrado;
var javotou = false;
var encontrado = false;
function verificaVoto(n) {
    if(etapa==1){
        for (var i = 0;etapas[0].eleitores.length>i;i++){
            if (etapas[0].eleitores[i].votoVereador.length > 0 && numVote==etapas[0].eleitores[i].tEleitor) {
                javotou = true;
            } else if (numVote.length==3 && parseInt(numVote)===etapas[0].eleitores[i].tEleitor && etapas[0].eleitores[i].votoVereador.length == 0) {
                encontrado = true;
                nomeEncontrado = etapas[0].eleitores[i].eleitor;
                indexEleitor = i;
            } 
        }
        let p = new Promise((resolve, reject) => {
            if (encontrado==true){
                resolve(`Nome: ${nomeEncontrado}`)
            }
            else if (encontrado==false){
                reject(`NÃO ENCONTRADO`)
            }
        })
        if (javotou==true) {
            let nome = document.getElementById("nome")
                nome.innerHTML = `Ja votou!`
                javotou=false
        }
        else if (numVote.length==3){
            p.then((message) => {
                let nome = document.getElementById("nome")
                nome.innerHTML = `${message}`
                encontrado=false;
            }).catch((err) => {
                let nome = document.getElementById("nome")
                nome.innerHTML = `${err}`
                encontrado=false;
            })
        }
    }else if (etapa==2){
        for (var i = 0;etapas[1].cVereadores.length>i;i++){
            if(numVote.length==5 && parseInt(numVote)===etapas[1].cVereadores[i].numeroVereador) {
                encontrado = true;
                vereadorEncontrado[0] = etapas[1].cVereadores[i].nomeVereador;
                vereadorEncontrado[1] = etapas[1].cVereadores[i].numeroVereador;
                vereadorEncontrado[2] = etapas[1].cVereadores[i].partidoVereador;
                indexVereador = i;
            }
        }
        let p = new Promise((resolve, reject) => {
            if (encontrado==true){
                resolve(vereadorEncontrado)
            }
            else if (encontrado==false){
                reject(`NÃO ENCONTRADO`)
            }
        })
        if (numVote.length==5){
            p.then((message) => {
                let nome = document.getElementById("nome")
                let numeroPartido = document.querySelector('.numeroPartido')
                let partido = document.querySelector('.partido')
                nome.innerHTML = `Nome: ${message[0]}`
                numeroPartido.innerHTML = `Número: ${message[1]}`
                partido.innerHTML = `Partido: ${message[2]}`
                encontrado=false;
            }).catch((err) => {
    
                nome.innerHTML = `${err}`
                encontrado=false;
            })
        }
    }else if (etapa==3){
        for (var i = 0;etapas[2].cPrefeitos.length>i;i++){
            if(numVote.length==2 && parseInt(numVote)===etapas[2].cPrefeitos[i].numeroPrefeito) {
                encontrado = true;
                prefeitoEncontrado[0] = etapas[2].cPrefeitos[i].nomePrefeito;
                prefeitoEncontrado[1] = etapas[2].cPrefeitos[i].vicePrefeito;
                prefeitoEncontrado[2] = etapas[2].cPrefeitos[i].numeroPrefeito;
                prefeitoEncontrado[3] = etapas[2].cPrefeitos[i].partidoPrefeito;
                indexPrefeito = i;
            }
        }
        let p = new Promise((resolve, reject) => {
            if (encontrado==true){
                resolve(prefeitoEncontrado)
            }
            else if (encontrado==false){
                reject(`NÃO ENCONTRADO`)
            }
        })
        if (numVote.length==2){
            p.then((message) => {
                let nome = document.getElementById("nome")
                let numeroPartido = document.querySelector('.numeroPartido')
                let partido = document.querySelector('.partido')
                let vicePrefeito = document.querySelector('.vicePrefeito')
                nome.innerHTML = `Nome: ${message[0]}`
                vicePrefeito.innerHTML = `Vice: ${message[1]}`
                numeroPartido.innerHTML = `Número: ${message[2]}`
                partido.innerHTML = `Partido: ${message[3]}`
                encontrado=false;
            }).catch((err) => {
    
                nome.innerHTML = `${err}`
                encontrado=false;
            })
        }
    }
}

//ZERA O NOME
function zeraNome (){
    let nome = document.getElementById("nome")
    let vicePrefeito = document.querySelector('.vicePrefeito')
    let numeroPartido = document.querySelector('.numeroPartido')
    let partido = document.querySelector('.partido')
    nome.innerHTML = ``
    vicePrefeito.innerHTML = ``
    numeroPartido.innerHTML = ``
    partido.innerHTML = ``
}


//CRIA ELEITOR
function criaEleitor () {
    let nomeEleitor = document.getElementById("nomeEleitor").value;
    let tituloEleitor = document.getElementById("tituloEleitor").value;
    if (tituloEleitor.length==3 && nomeEleitor!="") {
        function criarEleitor (nome, titulo){
            return {
                eleitor: nome,
                tEleitor: parseInt(titulo),
                votoVereador: "",
                votoPrefeito: "",
                votou: "Não"
            }
        }
        var eleitor = [
            criarEleitor (nomeEleitor, tituloEleitor)   
        ]
        modal1.classList.remove('active')
        document.getElementById("nomeEleitor").value = ""
        document.getElementById("tituloEleitor").value = ""
        cadastraEleitor(eleitor[0])
}else {
    alert("Nome ou título incorretos")
    }
}
//CRIA VEREADOR
function criaVereador () {
    let nomeVereador = document.getElementById("nome-vereador").value;
    let numeroVereador = document.getElementById("numero-vereador").value;
    let partidoVereador = document.getElementById("partido-vereador").value;
    function criarVereador (nome, numero, partido){
        return {
            nomeVereador: nome,
            numeroVereador: parseInt(numero),
            partidoVereador: partido,
            votos:0
        }
    }
    var vereador = [
        criarVereador (nomeVereador, numeroVereador, partidoVereador)   
    ]
    modal2.classList.remove('active')
    document.getElementById("nome-vereador").value = ""
    document.getElementById("numero-vereador").value = ""
    document.getElementById("partido-vereador").value = ""
    cadastraVereador(vereador[0]) 
}
//CRIA PREFEITO
function criaPrefeito () {
    let nomePrefeito = document.getElementById("nome-prefeito").value;
    let vicePrefeito = document.getElementById("vice-prefeito").value;
    let numeroPrefeito = document.getElementById("numero-prefeito").value;
    let partidoPrefeito = document.getElementById("partido-prefeito").value;
    function criarPrefeito (nome, vice, numero, partido){
        return {
            nomePrefeito: nome,
            vicePrefeito: vice,
            numeroPrefeito: parseInt(numero),
            partidoPrefeito: partido,
            votos:0
        }
    }
    var prefeito = [
        criarPrefeito (nomePrefeito, vicePrefeito, numeroPrefeito, partidoPrefeito)   
    ]
    modal3.classList.remove('active')
    document.getElementById("nome-prefeito").value = ""
    document.getElementById("vice-prefeito").value = ""
    document.getElementById("numero-prefeito").value = ""
    document.getElementById("partido-prefeito").value = ""
    cadastraPrefeito(prefeito[0]) 
}


//CADASTRA ELEITOR
var countEle = 0;
function cadastraEleitor (n){
    let mostraEleitores = document.querySelector('.mostra-eleitores')
    etapas[0].eleitores[countEle] = n;
    let filtro = etapas[0].eleitores.filter(eleitor => eleitor.tEleitor == etapas[0].eleitores[countEle].tEleitor)
    if (filtro.length==1){
        mostraEleitores.innerHTML += `<tr id="del-eleitor${countEle}"><td class="palavra">${etapas[0].eleitores[countEle].eleitor}</td><td class="palavra">${etapas[0].eleitores[countEle].tEleitor}</td><td class="icone"><i onclick="deletaEleitor(${countEle})" class="fa-regular fa-trash-can"></i></td></tr>` 
        countEle++
    }else if (filtro.length==2){
        alert("repetido")
        etapas[0].eleitores.pop()
    }

} 
//CADASTRA VEREADOR
var countVer = 0;
function cadastraVereador (n){
    let mostraVereadores = document.querySelector('.mostra-vereadores')
    console.log(n)
    etapas[1].cVereadores[countVer] = n;
    let filtro = etapas[1].cVereadores.filter(vereador => vereador.numeroVereador == etapas[1].cVereadores[countVer].numeroVereador)
   if (filtro.length==1){
        mostraVereadores.innerHTML += `<tr id="del-vereador${countVer}"><td class="palavra">${etapas[1].cVereadores[countVer].nomeVereador}</td><td class="palavra">${etapas[1].cVereadores[countVer].numeroVereador}</td><td class="palavra">${etapas[1].cVereadores[countVer].partidoVereador}</td><td class="icone"><i onclick="deletaVereador(${countVer})" class="fa-regular fa-trash-can"></i></td></tr>` 
        countVer++
    }else if (filtro.length==2){
        alert("repetido")
        etapas[1].cVereadores.pop()
    }
}
//CADASTRA PREFEITO
var countPre = 0;
function cadastraPrefeito (n){
    let mostraPrefeitos = document.querySelector('.mostra-prefeitos')
    etapas[2].cPrefeitos[countPre] = n;
    let filtroNum = etapas[2].cPrefeitos.filter(prefeito => prefeito.numeroPrefeito == etapas[2].cPrefeitos[countPre].numeroPrefeito);
    let filtroPartido = etapas[2].cPrefeitos.filter(prefeito => prefeito.partidoPrefeito == etapas[2].cPrefeitos[countPre].partidoPrefeito)
    console.log(filtroNum.length)
    console.log(filtroPartido.length)

    if (filtroNum.length==1 && filtroPartido.length==1){
        mostraPrefeitos.innerHTML += `<tr id="del-prefeito${countPre}"><td class="palavra">${etapas[2].cPrefeitos[countPre].nomePrefeito}</td><td class="palavra">${etapas[2].cPrefeitos[countPre].vicePrefeito}</td><td class="palavra">${etapas[2].cPrefeitos[countPre].numeroPrefeito}</td><td class="palavra">${etapas[2].cPrefeitos[countPre].partidoPrefeito}</td><td class="icone"><i onclick="deletaPrefeito(${countPre})" class="fa-regular fa-trash-can"></i></td></tr>` 
        countPre++
    }else if (filtroNum.length==2 || filtroPartido.length==2){
        alert("repetido")
        etapas[2].cPrefeitos.pop()
    }
}  

//DELETA ELEITOR
function deletaEleitor(n){
   let indice = document.getElementById("del-eleitor" + n)
   etapas[0].eleitores[n] = {}
   indice.innerHTML = ``
}
//DELETA VEREADOR
function deletaVereador(n){
    let indice = document.getElementById("del-vereador" + n)
   etapas[1].cVereadores[n] = {}
     indice.innerHTML = ``
}
//DELETA PREFEITO
function deletaPrefeito(n){
    let indice = document.getElementById("del-prefeito" + n)
    etapas[2].cPrefeitos[n] = {}
    indice.innerHTML = ``
 }


 //MODAL ELEITOR-VEREADOR-PREFEITO
function openModal1() {
    modal1.classList.add('active')
    modal1.onclick = e => {
      if (e.target.className.indexOf('modal-container1') !== -1) {
        modal1.classList.remove('active')
      }
    }  
}
function openModal2() {
    modal2.classList.add('active')
    modal2.onclick = e => {
      if (e.target.className.indexOf('modal-container2') !== -1) {
        modal2.classList.remove('active')
      }
    }  
}
function openModal3() {
    modal3.classList.add('active')
    modal3.onclick = e => {
      if (e.target.className.indexOf('modal-container3') !== -1) {
        modal3.classList.remove('active')
      }
    }  
}
//CONTROLADOR DE INPUT
const inputNumber1 = document.querySelector('.inputNumber1')
inputNumber1.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode < 47 || keyCode > 58){
        e.preventDefault()
    }
});
const inputNumber2 = document.querySelector('.inputNumber2')
inputNumber2.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode < 47 || keyCode > 58){
        e.preventDefault()
    }
});
const inputNumber3 = document.querySelector('.inputNumber3')
inputNumber3.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode < 47 || keyCode > 58){
        e.preventDefault()
    }
});
const inputString1 = document.querySelector('.inputString1')
inputString1.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode==32){
        console.log("passou")
    }else if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString2 = document.querySelector('.inputString2')
inputString2.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode==32){
        console.log("passou")
    }else if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString3 = document.querySelector('.inputString3')
inputString3.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode==32){
        console.log("passou")
    }else if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString4 = document.querySelector('.inputString4')
inputString4.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode==32){
        console.log("passou")
    }else if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString5 = document.querySelector('.inputString5')
inputString5.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode==32){
        console.log("passou")
    }else if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString6 = document.querySelector('.inputString6')
inputString6.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode==32){
        console.log("passou")
    }else if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});

  

