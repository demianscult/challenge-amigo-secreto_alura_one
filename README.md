# 🤫 Amigo Secreto

Este projeto é um sorteador de amigo secreto online, desenvolvido com HTML, CSS e JavaScript para o desafio da Alura em parceria com a Oracle Next Education.

## 🔵 Funcionalidades

* Adicionar nomes de amigos à lista.
* Sortear um amigo secreto aleatório entre os nomes da lista.
* Exibir o resultado do sorteio na tela.

## ⚡ Como usar

1. Clone este repositório: `git clone https://github.com/demianscult/challenge-amigo-secreto_alura_one.git`
2. Abra o arquivo index.html no seu navegador.
3. Digite o nome dos seus amigos no campo "Digite um nome".
![image](https://github.com/user-attachments/assets/57784e5c-ffab-4461-ae88-0aa31d7d3df2)
5. Clique no botão "Adicionar" para adicionar o nome à lista.
![image](https://github.com/user-attachments/assets/8a80127e-a0e3-43fa-848a-49a6c77de92e)
9. Repita os passos 3 e 4 para adicionar todos os amigos.
7. Clique no botão "Sortear Amigo" para realizar o sorteio.
8. O resultado do sorteio será exibido na tela.
![image](https://github.com/user-attachments/assets/9a7a6698-d992-4334-b2e6-85dc244500d1)

## 📝 Tecnologias utilizadas

* HTML
* CSS
* JavaScript

## 🟢 Status do projeto

Completado.

## 🤯 Problemas e soluções

Durante o desenvolvimento deste projeto, enfrentei alguns desafios que gostaria de compartilhar, juntamente com as soluções que encontrei:

Problema 1: Os botões "Adicionar" e "Sortear Amigo" não estavam funcionando corretamente.
Solução: Removi os atributos onclick do HTML e adicionei os event listeners no arquivo JavaScript, utilizando document.addEventListener('DOMContentLoaded', () => { ... }); para garantir que o código fosse executado após o carregamento do DOM.
Alerta de "insira um nome válido" mesmo após digitar um nome:

Problema 2: O alerta era exibido mesmo quando um nome era digitado corretamente.
Solução: Corrigi a condição if (!nome) na função adicionarAmigo() para if (!nome || nome.trim().length === 0), verificando se o nome é vazio ou consiste apenas de espaços em branco.

## Licença

Este projeto está sob a licença MIT.

## 💖 Autor
Evellyn Pereira Silva
