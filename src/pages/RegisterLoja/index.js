import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FormContainer } from '../../styles/GlobalStyles';
import { Form, Title, Main } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
    const dispatch = useDispatch();

    // const id = useSelector((state) => state.auth.user.id);
    // const nomeStored = useSelector((state) => state.auth.user.nome);
    // const emailStored = useSelector((state) => state.auth.user.email);
    const isLoading = useSelector((state) => state.auth.isLoading);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [CPF, setCPF] = useState('');

    // useEffect(() => {
    //     if (!id) return;

    //     setNome(nomeStored);
    //     setEmail(emailStored);
    // }, [id, nomeStored, emailStored]);

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;

            toast.error('Nome deve ter entre 3 e 255 caracteres.');
        }
        if (!isEmail(email)) {
            formErrors = true;

            toast.error('Email inválido ex:"example@example.com".');
        }
        if (!id && (senha.length < 6 || senha.length > 50)) {
            formErrors = true;

            toast.error('Senha deve ter entre 6 e 50 caracteres.');
        }

        if (formErrors) return;

        dispatch(actions.registerRequest({ nome, email, senha, id }));
    }

    return (
        <Main>
            <FormContainer>
                <Loading isLoading={isLoading} />

                {/* <Title>{id ? 'Editar dados' : 'Crie sua conta'}</Title> */}
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
                            onChange={(e) => setsenha(e.target.value)}
                            placeholder="Digite seu CPF"
                        />
                    </label>

                    <button type="submit">
                        Criar minha conta
                        {/* {id ? 'Salvar' : 'Criar minha conta'} */}
                    </button>
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
