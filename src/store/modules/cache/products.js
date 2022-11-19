export class ProductItem {
    constructor(id, imagens, nome, descricao, qtd, cores, tamanho, valor) {
        this.id = id;
        this.imagens = imagens = [];
        this.nome = nome;
        this.descricao = descricao;
        this.qtd = qtd;
        this.cores = cores;
        this.tamanho = tamanho;
        this.valor = valor;
    }
}

// "loja_id": 1,
//     "produto_id": 4,
//     "imagens_produto": [

//     ],
//     "genero_produto_id": null,
//     "secao_produto_id": null,
//     "categoria_produto_id": null,
//     "estilo_produto_id": null,
//     "nome": "Macacão",
//     "descricao": "Macacão colorido",
//     "qtd_estoque": 28,
//     "cor_produto": "Vermelho, verde-amarelo",
//     "tamanho_produto": "M",
//     "valor": 100.0

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
