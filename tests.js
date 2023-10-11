const {
    deepEqual
} = require('assert')

const DEFAULT_ITEM_CADASTRAR = {nome: 'Flash', poder: 'Speed', id: 1}
const database = require('./database')

describe('Suite de manipulação de herois', () => {
    //before( async () => {
        //await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    //})
    it('Deve persquisar um herois, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
    it('Deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        
        deepEqual(actual, expected)
    })
    it.only('Deve remover um heroi por id', async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })
})
