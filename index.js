let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 31, 22, 0)
    },
    {
      nome: "Mayk Brito",
      email: "maykbrito@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 31, 22, 0)
    },
    // Adicionando mais 8 participantes
    {
      nome: "José Rodrigues",
      email: "jose@gmail.com",
      dataInscrição: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: null
    },
  
    {
      nome: "Lucas Silva",
      email: "lucas@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 12, 0)
    },
    {
      nome: "Ana Rodrigues",
      email: "ana@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: null
    }, 
    {
      nome: "Carla Santos",
      email: "carla@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 25, 22, 0)
    },
    {
      nome: "Pedro Almeida",
      email: "pedro@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 22, 20, 0)
    },
    {
      nome: "Mariana Costa",
      email: "mariana@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 22, 22, 0)
    },
    {
      nome: "Rafael Oliveira",
      email: "rafael@gmail.com",
      dataInscricao: new Date(2024, 2, 22, 19, 20),
      dataCheckIn: new Date(2024, 2, 22, 22, 0)
    },
   
    // ...
    // Repita o processo até o Participante 10
  ]
  
  const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
    // condicional
    if(participante.dataCheckIn == null) {
      dataCheckIn = `
      <button data-email="${participante.email}"  onclick="fazerCheckIn(event)">
      Confirmar check-in
      </button>
      `
    }
  
    return `
    <tr>
        <td>
          <strong>
            ${participante.nome}
          </strong>
          <br>
          <small>
            ${participante.email}
          </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
      </tr>
    `
  }
  
  
  const atualizarLista = (participantes) => {
  
    let output = ""
      //estrutura de repeticão - loop
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
      }
      //Pegar informação do HTML
  
  
      //Subistituir a informação do HTML
      document.querySelector('tbody').innerHTML = output
      //pesquisar por uma tag no HTML
   } //arrow funcion
  
   atualizarLista(participantes)
  
   const adicionarParticipante = (event) => {
     event.preventDefault()
  
     const dadosDoFormulario = new FormData(event.target)
  
     const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null
    }
  
  
    // verificar se o participante já existe
    const participanteExiste = participantes.find(
      (p) => p.email == participante.email
     
    )
  
    if(participanteExiste) {
      alert('Email já cadastrado!')
      return
    }
  
    participantes = [participante, ...participantes]
    atualizarLista(participantes)
  
    // lipar o formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
   }
  
   const fazerCheckIn = (event) => {
     //confirmar se realmente quer check-in
     const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
     if(confirm(mensagemConfirmacao) == false) {
      return
     }
  
     // encontrar o participante dentro da lista
     const participante = participantes.find((p) => {
      return p.email == event.target.dataset.email
     })
     // atualizar o check-in do participante
     participante.dataCheckIn = new Date()
     // atualizar a lista de participantes.
     atualizarLista(participantes)
   }
  