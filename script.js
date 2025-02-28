const optIcon = document.getElementById("opt-icon");
const optDiv = document.querySelector(".opt-container");
const btns = document.querySelectorAll(".opt-btn")
const blur = document.querySelector(".container")
const foto = document.getElementById("foto-de-perfil")

function nascimento(dia, mes, ano) {
 let nascimento = new Date(ano, mes - 1, dia)
 let hoje = new Date()
 let diferenca = hoje - nascimento

 return Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25))
}

var idade = nascimento(4, 12, 2007)

const perfil = document.getElementById(`apresentacao`);

perfil.textContent = `Olá, me chamo André Luigi de Miranda, tenho ${idade} anos,
 finalizei o ensino médio tecnico (Tecnico de Desenvolvimento de Sistemas) do Colegio Estadual José Pioli e atualmente estou me graduando em Analises e
Desenvolvimento de Sistemas
da Unicesumar.`

foto.addEventListener("click", function () {
 if (foto.src.includes("Andre.jpeg")) {
  foto.src = "./image/Andre2.jpeg";
 } else {
  foto.src = "./image/Andre.jpeg";
 }
});

optIcon.addEventListener("click", function () {
 menu()
})

btns.forEach(function (btn) {
 btn.addEventListener("click", function () {
  menu()
 })
})

function menu() {
 optDiv.classList.toggle('disabled')
 blur.classList.toggle('blur')
}

const habilidades = [
 { type: 'soft', habilidade: 'Proatividade', image: './image/proativo.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Adaptável', image: './image/adaptacao.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Criatividade', image: './image/criatividade.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Comunicação', image: './image/conversacao.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Resiliência', image: './image/resiliencia.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Organização', image: './image/organizacao.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Colaboração', image: './image/colaboracao.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Flexibilidade', image: './image/flexibilidade.png', creditos: 'FreePik' },
 { type: 'soft', habilidade: 'Empatia', image: './image/empatia.png', creditos: 'FreePik' },

 { type: 'hard', habilidade: 'Excel', image: './image/excel_732220.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Design Gráfico', image: './image/pantone.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Informática Hardware', image: './image/hardware.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Marketing', image: './image/marketing.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'JavaScript', image: './image/js.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Assis. Administrativo', image: './image/admin.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Assis. RH', image: './image/recursos-humanos.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Assis. Financeiro', image: './image/financeiro.png', creditos: 'FreePik' },
 { type: 'hard', habilidade: 'Assis. Contabilidade', image: './image/contabilidade.png', creditos: 'FreePik' },
]

habilidades.map((card) => {

 const cards = document.createElement('div')
 cards.classList.add('card')
 const img = document.createElement('img')
 const h2 = document.createElement('h2')

 if (card.type == 'soft') {
  img.src = card.image
  h2.innerText = card.habilidade
  const cardContainer = document.querySelector('#softSkills')
  cardContainer.appendChild(cards)
  cards.appendChild(img)
  cards.appendChild(h2)

 } else {
  img.src = card.image
  h2.innerText = card.habilidade
  const cardContainer = document.querySelector('#hardSkills')
  cardContainer.appendChild(cards)
  cards.appendChild(img)
  cards.appendChild(h2)
 }

 img.alt = card.creditos
})

