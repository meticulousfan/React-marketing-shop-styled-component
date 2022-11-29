import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from '../../services/axios';

export default function ModalContact() {
    const [show, setShow] = useState(false);
    const [celular, setCelular] = useState('');
    const [nome, setNome] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmit() {
        const res = await axios.post(`${props.route}`, {
            usuario_id: props.id,
            celular: celular,
            nome: nome,
        });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Adicionar contato
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações de contato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="(00)9 9999-9999"
                                autoFocus
                                onChange={(e) => setCelular(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Nome do contato</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => setNome(e.target.value)}
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
