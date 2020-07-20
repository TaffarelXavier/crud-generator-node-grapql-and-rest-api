import React, { useState, useEffect } from 'react';
 import api from '../../services/axios';

 const UserCreate = () => {
  const [nome, setNome] = useState("")
const [idade, setIdade] = useState("")
const [senha, setSenha] = useState("")
const [email, setEmail] = useState("")
const [celular, setCelular] = useState("")

const onSubmit = async (ev) => {
    const { data } = await api.post(
      '/users',
      {nome,idade,senha,email,celular },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    );
    console.log(data); // Data
    ev.preventDefault();
    };

return <>
  <form onSubmit={onSubmit}><div>
    <label htmlFor="nome_1">Nome</label>
    <input name="nome" id="nome_1" value={nome} onChange={({ target }) => {
      setNome(target.value);
    }} /></div><div>
    <label htmlFor="idade_1">Idade</label>
    <input name="idade" id="idade_1" value={idade} onChange={({ target }) => {
      setIdade(target.value);
    }} /></div><div>
    <label htmlFor="senha_1">Senha</label>
    <input name="senha" id="senha_1" value={senha} onChange={({ target }) => {
      setSenha(target.value);
    }} /></div><div>
    <label htmlFor="email_1">Email</label>
    <input name="email" id="email_1" value={email} onChange={({ target }) => {
      setEmail(target.value);
    }} /></div><div>
    <label htmlFor="celular_1">Celular</label>
    <input name="celular" id="celular_1" value={celular} onChange={({ target }) => {
      setCelular(target.value);
    }} /></div></form></>
}

export default UserCreate;
 