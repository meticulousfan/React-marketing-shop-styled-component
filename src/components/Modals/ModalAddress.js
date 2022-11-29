import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import axios from '../../services/axios';

export default function ModalAddress(props) {
    const [ponto_referencia, setPonto_referencia] = useState('');
    const [cep, setCep] = useState('');
    const [UF, setUF] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmit() {
        const res = await axios.post(`${props.route}`, {
            usuario_id: props.id,
            ponto_referencia: ponto_referencia,
            CEP: cep,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
        });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Adicionar endereço
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações de endereço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Ponto de referência</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) =>
                                    setPonto_referencia(e.target.value)
                                }
                            />
                            <Form.Label>CEP:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="00000.000"
                                autoFocus
                                onChange={(e) => setCep(e.target.value)}
                            />
                            <Form.Label>UF:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setUF(e.target.value)}
                            />
                            <Form.Label>Cidade:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setCidade(e.target.value)}
                            />
                            <Form.Label>Bairro:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setBairro(e.target.value)}
                            />
                            <Form.Label>Rua:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setRua(e.target.value)}
                            />
                            <Form.Label>N°:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNumero(e.target.value)}
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
