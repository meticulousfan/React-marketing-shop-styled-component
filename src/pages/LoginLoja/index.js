import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';

import { FormContainer } from '../../styles/GlobalStyles';
import { Form, Main, Title } from './styled';
import * as actions from '../../store/modules/authLoja/actions';
import Loading from '../../components/Loading';

export default function LoginLoja(props) {
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

    const isLoading = useSelector((state) => state.auth.isLoading);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    let formErrors = false;

    async function handleSubmit(e) {
        e.preventDefault();

        if (!isEmail(email)) {
            formErrors = true;

            toast.error('Email inválido.');
        }

        if (formErrors) return;

        dispatch(actions.LoginLojaRequest({ email, senha, prevPath }));
    }

    return (
        <Main>
            <FormContainer>
                <Loading isLoading={isLoading} />

                <Title>Login</Title>

                <Form onSubmit={handleSubmit}>
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
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </label>
                    <button type="submit">Login</button>
                    <p>
                        Não tem uma conta?{' '}
                        <Link to="/register-loja">
                            <strong>Cadastre-se</strong>
                        </Link>
                    </p>
                </Form>
            </FormContainer>
        </Main>
    );
}
