export class ProductItem {
    constructor(id, imagens, nome, descricao, Qtd, cores, tamanho, valor) {
        this.id = id;
        this.imagens = imagens = [];
        this.nome = nome;
        this.descricao = descricao;
        this.Qtd = Qtd;
        this.cores = cores;
        this.tamanho = tamanho;
        this.valor = valor;
    }
}

const INITIAL_STATE = {
    items: [],
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const productsSelector = (state) => state.products.items;
