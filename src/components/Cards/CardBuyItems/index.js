import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GiClothes } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import axios from '../../../services/axios';
import { ContainerCard } from './styled';

export default function CardBuyItems(props) {
    const prod = props.produto;

    const [item, setItem] = useState({});

    useEffect(() => {
        async function getProduct() {
            const produto = await (
                await axios.get(`/produto/${prod.produto_id}`)
            ).data;
            const item = {
                id: produto.produto_id,
                imagem: produto.imagens_produto[0].url_imagem,
                nome: produto.nome,
                descricao: produto.descricao,
                valor: produto.valor,
                qtd: prod.qtd_produtos,
                total: prod.total,
            };
            console.log(item.imagem);

            setItem(item);
        }

        getProduct();
    }, [prod.produto_id, prod.qtd_produtos, prod.total]);

    return (
        <ContainerCard>
            <Card style={{ width: '13rem' }}>
                <div className="d-flex justify-content-center align-items-center">
                    {item.imagem ? (
                        <Card.Img variant="top" src={item.imagem} />
                    ) : (
                        <GiClothes size={90} />
                    )}
                </div>

                <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                    <div className="d-flex justify-content-between align-item-center">
                        <h6 className="me-5">qtd: {item.qtd}</h6>
                        <h5>
                            <strong>R$: 190,00</strong>
                            {/* <strong>R$: {item.total}</strong> */}
                        </h5>
                    </div>
                    <Link to={`/produto/${item.id}`}>
                        <Button variant="primary">Comprar novamente</Button>
                    </Link>
                </Card.Body>
            </Card>
        </ContainerCard>
    );
}
