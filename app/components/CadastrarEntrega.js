let cadastro =  {
  origem: {
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
  },
  destino: {
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
  }
}


function Registrar(texto, tipo, pagina) {
  if (pagina === "CadastroOrigem") {
    cadastro.origem[tipo] = texto
  }
  else {
    cadastro.destino[tipo] = texto
  }
}

function Validar(objeto) {
  var valido = true
  Object.keys(objeto).forEach(key => {
    if (objeto[key] === "") {
      valido = false
    }
  })
  return valido
}

function Cadastrar(navigation, route) {
  if (route.name === "CadastroOrigem") {
    if (!Validar(cadastro.origem)) return

    navigation.navigate('Principal', defDados(route, 'origem'))
  }
  else {
    if (!Validar(cadastro.destino)) return

    navigation.navigate('Principal', defDados(route, 'destino'))
  }
}

function Mostrar(route, screen) {
  if (route === undefined) return

  if (screen === 'origem' && route.origem !== undefined) {
    return route.origem.rua + ', Nº ' + route.origem.numero
  }
  else if (screen === 'destino' && route.destino !== undefined) {
    return route.destino.rua + ', Nº ' + route.destino.numero
  }
}

function defDados(route, tipo) {
  let dados = {}
    dados[tipo] = cadastro[tipo]

  if (route.params !== undefined) {
    Object.keys(route.params).map((key) => {
      if (key !== tipo) {
        dados[key] = route.params[key]
      }
    })
  }
  return dados
}

export { Cadastrar, Registrar, Mostrar }