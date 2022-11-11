import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail, isCpf } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FormContainer } from '../../styles/GlobalStyles';
import { Form, Title, Main } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.auth.isLoading);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [CPF, setCPF] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (!nome) {
            formErrors = true;

            toast.error('O campo nome é obrigatório.');
        }
        if (!isEmail(email)) {
            formErrors = true;

            toast.error('Email inválido ex:"example@example.com".');
        }
        if (!senha) {
            formErrors = true;

            toast.error('O campo senha é obrigatório.');
        }
        if (!CPF) {
            formErrors = true;

            toast.error('O campo CPF é obrigatório.');
        }

        if (formErrors) return;

        dispatch(actions.registerRequest({ nome, email, senha, CPF }));
    }

    return (
        <Main>
            <FormContainer>
                <Loading isLoading={isLoading} />

                <Title>Crie sua conta</Title>

                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Nome:
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                        />
                    </label>
                    <label htmlFor="senha">
                        Senha:
                        <input
                            type="senha"
                            value={senha}
                            onChange={(e) => setsenha(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </label>
                    <label htmlFor="CPF">
                        CPF:
                        <input
                            type="text"
                            value={CPF}
                            onChange={(e) => setCPF(e.target.value)}
                            placeholder="000.000.000-00"
                        />
                    </label>

                    <button type="submit">Criar minha conta</button>
                    <p>
                        Já tem uma conta?{' '}
                        <Link to="/login">
                            <strong>Faça login</strong>
                        </Link>
                    </p>
                </Form>
            </FormContainer>
        </Main>
    );
}
