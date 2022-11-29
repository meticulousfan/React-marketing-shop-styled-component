import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import axios from '../../services/axios';

export default function ModalProduct(props) {
    const [descricao, setDescricao] = useState('');
    const [nome, setNome] = useState('');
    const [genero_produto_id, setGenero_produto_id] = useState('');
    const [secao_produto_id, setSecao_produto_id] = useState('');
    const [categoria_id, setCategoria_id] = useState('');
    const [estilo_id, setEstilo_id] = useState('');
    const [cor_produto, setCor_produto] = useState('');
    const [tamanho_produto, setTamanho_produto] = useState('');
    const [valor, setValor] = useState('');
    const [numero, setNumero] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmit() {
        // const res = await axios.post(`${props.route}`, {
        //     loja_id: props.id,
        //     nome: nome,
        //     descricao: descricao,
        //     cor_produto: cor_produto,
        //     tamanho_produto: tamanho_produto,
        //     valor: valor,
        //     numero: numero,
        //     genero_produto_id: genero_produto_id,
        //     secao_produto_id: secao_produto_id,
        //     categoria_id: categoria_id,
        //     estilo_id: estilo_id,
        // });
        console.log(`${props.route}`, {
            loja_id: props.id,
            nome: nome,
            descricao: descricao,
            cor_produto: cor_produto,
            tamanho_produto: tamanho_produto,
            valor: valor,
            numero: numero,
            genero_produto_id: genero_produto_id,
            secao_produto_id: secao_produto_id,
            categoria_id: categoria_id,
            estilo_id: estilo_id,
        });
    }

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar novo produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="d-flex">
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setGenero_produto_id(e.target.value);
                                }}
                                required
                            >
                                <option>Gênero</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                            </Form.Select>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setSecao_produto_id(e.target.value);
                                }}
                                required
                            >
                                <option>Seção</option>
                                <option value="1">Adulto</option>
                                <option value="2">Teen</option>
                                <option value="3">Infantil</option>
                            </Form.Select>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setCategoria_id(e.target.value);
                                }}
                                required
                            >
                                <option>Categoria</option>
                                <option value="1">Roupa</option>
                                <option value="2">Acessório</option>
                                <option value="3">Calçado</option>
                                <option value="4">Chapéu</option>
                                <option value="5">Óculos</option>
                            </Form.Select>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setEstilo_id(e.target.value);
                                }}
                                required
                            >
                                <option>Estilo</option>
                                <option value="1">Elegante</option>
                                <option value="2">Formal</option>
                                <option value="3">Casual</option>
                                <option value="4">Vintage</option>
                                <option value="5">Street</option>
                            </Form.Select>
                        </div>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <Form.Label>Cor:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setCor_produto(e.target.value)}
                            />
                            <Form.Label>Tamanho</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) =>
                                    setTamanho_produto(e.target.value)
                                }
                            />
                            <Form.Label>Valor:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setValor(e.target.value)}
                            />
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button
                        variant="success"
                        onClick={(handleClose, handleSubmit)}
                    >
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
