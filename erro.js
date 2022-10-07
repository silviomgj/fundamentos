function tratarErroELancar(erro) {
    // throw New Error ("...")
    // throw 10
    // throw true
    // throw "message"
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date 
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name. toUpeerCase() + '...')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)