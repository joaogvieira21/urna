var screen
var indexEleitor
var indexVereador
var indexPrefeito
var numVote = ""
var etapa = 0
const modal1 = document.querySelector('.modal-container1')
const modal2 = document.querySelector('.modal-container2')
const modal3 = document.querySelector('.modal-container3')

//LIGA URNA E INICIA PRIMEIRA ETAPA
function urnOn () {
    screen = document.querySelector('.screen')
    screen.style.background = "linear-gradient(to right, #e8e8e8, #c1c1c1)"
    screen.innerHTML = `
        <div class="logo-entrada">
            <img class="blinkFadeIn" id="logo-entrada" src="assets/imgs/logo.png" alt="">
        </div>`
    setTimeout(fadeOut,1500)
    function fadeOut (){
        screen.innerHTML = `
        <div class="logo-entrada">
            <img class="blinkFadeOut" id="logo-entrada" src="assets/imgs/logo.png" alt="">
        </div>`
        setTimeout(primeiraEtapa,900) 
    }
}

//BOTAO NUMERAL - VERIFICA EM QUAL ESTAPA ESTÁ, OU ADICIONAR NÚMEROS
function clickNum (n){
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
function clickWhite (){
    

}
//BOTAO CORRIGE, VERIFICA EM QUAL ETAPA ESTÁ REMOVE O ULTIMO NÚMERO DIGITADO
function clickDel (){ 
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
    } else if (etapa==3){
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


//BOTAO CONFIRMA - VERIFICA ETAPA QUE ESTÁ E CHAMA A PRÓXIMA ETAPA

function clickConfirm (){
    if (etapa==1){
        etapa2()
    } else if (etapa==2){
        steps[1].cVereadores[indexVereador].votos += 1;
        steps[0].eleitores[indexEleitor].votoVereador = numVote;
        steps[0].eleitores[indexEleitor].votou = "Sim";
        etapa3()
    }else if (etapa==3){
        steps[2].cPrefeitos[indexPrefeito].votos += 1;
        steps[0].eleitores[indexEleitor].votoPrefeito = numVote;
        screen.classList.add('fim')
        screen.innerHTML = `<div class="resultado">FIM</div>`
        let faltaVotar = steps[0].eleitores.filter(eleitor => eleitor.votou == "Não")
        console.log(faltaVotar)
        if (faltaVotar.length>0){
            setTimeout(primeiraEtapa, 1300);
        } else {
            setTimeout(resultado, 1300);
        }
    }
    
}

//PRIMEIRA ETAPA

function primeiraEtapa (){
    etapa=1
    numVote=""
    screen.classList.remove('fim')
    screen.innerHTML = `
    <div class="left-right">
        <div class="visor-left">
            <div class="d1">
                <div class="d1-1">
                </div>
                <div class="d1-2">
                    ${steps[0].titulo}
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

   for (var i = 0;i<steps[0].qtdeNum;i++){
    d1_3.innerHTML += `
        <div class="container-vote" id="numero">
        </div>
        `;
    }
    numero[0].classList.add('blink');
}

//SEGUNDA ETAPA

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

    for (var i = 0;i<steps[1].qtdeNum;i++){
        
        d13.innerHTML += `
            <div class="container-vote" id="numero">
            </div>
            `;
        }
    numero[0].classList.add('blink');
}

//TERCEIRA ETAPA

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

    for (var i = 0;i<steps[2].qtdeNum;i++){
        
        d13.innerHTML += `
            <div class="container-vote" id="numero">
            </div>
             `
    }
    numero[0].classList.add('blink');
}

//RESULTADO

function resultado (){
    screen.classList.remove('fim')
    screen.classList.add('resultado')
    let resultado = document.querySelector('.resultado')
    steps[1].cVereadores.forEach(element => {
        resultado.innerHTML += `Nome: ${element.nomeVereador} - Votos: ${element.votos}`
    });
    
}



//VERIFICA SE O ELEITOR ESTÁ NA BASE DE DADOS
var vereadorEncontrado = []
var prefeitoEncontrado = []
var nomeEncontrado
var javotou = false
var encontrado = false
function verificaVoto(n) {
    if(etapa==1){
        for (var i = 0;steps[0].eleitores.length>i;i++){
            if (steps[0].eleitores[i].votoVereador.length > 0 && numVote==steps[0].eleitores[i].tEleitor) {
                javotou = true
            } else if (numVote.length==3 && parseInt(numVote)===steps[0].eleitores[i].tEleitor && steps[0].eleitores[i].votoVereador.length == 0) {
                encontrado = true
                nomeEncontrado = steps[0].eleitores[i].eleitor;
                indexEleitor = i
            } 
        }
        let p = new Promise((resolve, reject) => {
            if (encontrado==true && numVote.length==3){
                resolve(`Nome: ${nomeEncontrado}`)
            }
            else if (encontrado==false && numVote.length==3){
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
                encontrado=false
            }).catch((err) => {
                let nome = document.getElementById("nome")
                nome.innerHTML = `${err}`
                encontrado=false
            })
        }
    } else if (etapa==2){
        for (var i = 0;steps[1].cVereadores.length>i;i++){
            if(numVote.length==5 && parseInt(numVote)===steps[1].cVereadores[i].numeroVereador) {
                encontrado = true
                vereadorEncontrado[0] = steps[1].cVereadores[i].nomeVereador
                vereadorEncontrado[1] = steps[1].cVereadores[i].numeroVereador
                vereadorEncontrado[2] = steps[1].cVereadores[i].partidoVereador
                indexVereador = i
            }
        }
        let p = new Promise((resolve, reject) => {
            if (encontrado==true && numVote.length==5){
                resolve(vereadorEncontrado)
            }
            else if (encontrado==false && numVote.length==5){
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
                encontrado=false
            }).catch((err) => {
    
                nome.innerHTML = `${err}`
                encontrado=false
            })
        }
    } else if (etapa==3){
        for (var i = 0;steps[2].cPrefeitos.length>i;i++){
            if(numVote.length==2 && parseInt(numVote)===steps[2].cPrefeitos[i].numeroPrefeito) {
                encontrado = true;
                prefeitoEncontrado[0] = steps[2].cPrefeitos[i].nomePrefeito;
                prefeitoEncontrado[1] = steps[2].cPrefeitos[i].vicePrefeito;
                prefeitoEncontrado[2] = steps[2].cPrefeitos[i].numeroPrefeito;
                prefeitoEncontrado[3] = steps[2].cPrefeitos[i].partidoPrefeito;
                indexPrefeito = i;
            }
        }
        let p = new Promise((resolve, reject) => {
            if (encontrado==true && numVote.length==2){
                resolve(prefeitoEncontrado)
            }
            else if (encontrado==false && numVote.length==2){
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


//CRIA ELEITOR
function addEleitor () {
    let nomeEleitor = document.getElementById("nomeEleitor").value;
    let tituloEleitor = document.getElementById("tituloEleitor").value;
    if (tituloEleitor.length==3 && nomeEleitor!="") {
        function createEleitor (nome, titulo){
            return {
                eleitor: nome,
                tEleitor: parseInt(titulo),
                votoVereador: "",
                votoPrefeito: "",
                votou: "Não"
            }
        }
        var eleitor = [
            createEleitor (nomeEleitor, tituloEleitor)   
        ]
        modal1.classList.remove('active')
        document.getElementById("nomeEleitor").value = ""
        document.getElementById("tituloEleitor").value = ""
        registerEleitor(eleitor[0])
}else {
    alert("Nome ou título incorretos")
    }
}
//CRIA VEREADOR
function addVereador () {
    let nomeVereador = document.getElementById("nome-vereador").value;
    let numeroVereador = document.getElementById("numero-vereador").value;
    let partidoVereador = document.getElementById("partido-vereador").value;
    function createVereador (nome, numero, partido){
        return {
            nomeVereador: nome,
            numeroVereador: parseInt(numero),
            partidoVereador: partido,
            votos:0
        }
    }
    var vereador = [
        createVereador (nomeVereador, numeroVereador, partidoVereador)   
    ]
    modal2.classList.remove('active')
    document.getElementById("nome-vereador").value = ""
    document.getElementById("numero-vereador").value = ""
    document.getElementById("partido-vereador").value = ""
    registerVereador(vereador[0]) 
}
//CRIA PREFEITO
function addPrefeito () {
    let nomePrefeito = document.getElementById("nome-prefeito").value;
    let vicePrefeito = document.getElementById("vice-prefeito").value;
    let numeroPrefeito = document.getElementById("numero-prefeito").value;
    let partidoPrefeito = document.getElementById("partido-prefeito").value;
    function createPrefeito (nome, vice, numero, partido){
        return {
            nomePrefeito: nome,
            vicePrefeito: vice,
            numeroPrefeito: parseInt(numero),
            partidoPrefeito: partido,
            votos:0
        }
    }
    var prefeito = [
        createPrefeito (nomePrefeito, vicePrefeito, numeroPrefeito, partidoPrefeito)   
    ]
    modal3.classList.remove('active')
    document.getElementById("nome-prefeito").value = ""
    document.getElementById("vice-prefeito").value = ""
    document.getElementById("numero-prefeito").value = ""
    document.getElementById("partido-prefeito").value = ""
    registerPrefeito(prefeito[0]) 
}


//CADASTRA ELEITOR
var countEle = 0;
function registerEleitor (n){
    let showEleitores = document.querySelector('.show-eleitores')
    steps[0].eleitores[countEle] = n;
    let filtro = steps[0].eleitores.filter(eleitor => eleitor.tEleitor == steps[0].eleitores[countEle].tEleitor)
    if (filtro.length==1){
        showEleitores.innerHTML += `<tr id="del-eleitor${countEle}"><td class="palavra">${steps[0].eleitores[countEle].eleitor}</td><td class="palavra">${steps[0].eleitores[countEle].tEleitor}</td><td class="icone"><i onclick="deletaEleitor(${countEle})" class="fa-regular fa-trash-can"></i></td></tr>` 
        countEle++
    }else if (filtro.length==2){
        alert("repetido")
        steps[0].eleitores.pop()
    }

} 
//CADASTRA VEREADOR
var countVer = 0;
function registerVereador (n){
    let showVereadores = document.querySelector('.show-vereadores')
    steps[1].cVereadores[countVer] = n;
    let filtro = steps[1].cVereadores.filter(vereador => vereador.numeroVereador == steps[1].cVereadores[countVer].numeroVereador)
   if (filtro.length==1){
        showVereadores.innerHTML += `<tr id="del-vereador${countVer}"><td class="palavra">${steps[1].cVereadores[countVer].nomeVereador}</td><td class="palavra">${steps[1].cVereadores[countVer].numeroVereador}</td><td class="palavra">${steps[1].cVereadores[countVer].partidoVereador}</td><td class="icone"><i onclick="deletaVereador(${countVer})" class="fa-regular fa-trash-can"></i></td></tr>` 
        countVer++
    }else if (filtro.length==2){
        alert("repetido")
        steps[1].cVereadores.pop()
    }
}
//CADASTRA PREFEITO
var countPre = 0;
function registerPrefeito (n){
    let showPrefeitos = document.querySelector('.show-prefeitos')
    steps[2].cPrefeitos[countPre] = n;
    let filtroNum = steps[2].cPrefeitos.filter(prefeito => prefeito.numeroPrefeito == steps[2].cPrefeitos[countPre].numeroPrefeito);
    let filtroPartido = steps[2].cPrefeitos.filter(prefeito => prefeito.partidoPrefeito == steps[2].cPrefeitos[countPre].partidoPrefeito)

    if (filtroNum.length==1 && filtroPartido.length==1){
        showPrefeitos.innerHTML += `<tr id="del-prefeito${countPre}"><td class="palavra">${steps[2].cPrefeitos[countPre].nomePrefeito}</td><td class="palavra">${steps[2].cPrefeitos[countPre].vicePrefeito}</td><td class="palavra">${steps[2].cPrefeitos[countPre].numeroPrefeito}</td><td class="palavra">${steps[2].cPrefeitos[countPre].partidoPrefeito}</td><td class="icone"><i onclick="deletaPrefeito(${countPre})" class="fa-regular fa-trash-can"></i></td></tr>` 
        countPre++
    }else if (filtroNum.length==2 || filtroPartido.length==2){
        alert("repetido")
        steps[2].cPrefeitos.pop()
    }
}  

//DELETA ELEITOR
function deletaEleitor(n){
   let index = document.getElementById("del-eleitor" + n)
   steps[0].eleitores[n] = {}
   index.innerHTML = ``
}
//DELETA VEREADOR
function deletaVereador(n){
    let index = document.getElementById("del-vereador" + n)
    steps[1].cVereadores[n] = {}
    index.innerHTML = ``
}
//DELETA PREFEITO
function deletaPrefeito(n){
    let index = document.getElementById("del-prefeito" + n)
    steps[2].cPrefeitos[n] = {}
    index.innerHTML = ``
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
    if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString2 = document.querySelector('.inputString2')
inputString2.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString3 = document.querySelector('.inputString3')
inputString3.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString4 = document.querySelector('.inputString4')
inputString4.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString5 = document.querySelector('.inputString5')
inputString5.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});
const inputString6 = document.querySelector('.inputString6')
inputString6.addEventListener("keypress", function(e){
    let keyCode = (e.keyCode ? e.keyCode: e.wich);
    if (keyCode > 31 && (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122))
    e.preventDefault()
});

  

