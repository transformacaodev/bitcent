<h1 align="center">
Olá Devs! 👋
</h1>

<p align="center">
 Repositório Bitcent <b>versão completa</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TDEV-01-blue" alt="Semana Transformação.DEV #01" />
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue" alt="License">   
</p>

<h2 align="center">
    <img alt="Bitcent" src=".github/cover.svg" />
</h2>

<br>

## Tecnologias

Lista de tecnologias utilizadas no projeto:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)

## Executando o projeto

1. Clone o repositório:

```bash
$ git clone https://github.com/transformacaodev/bitcent
$ cd bitcent
```

2. Crie um projeto no Firebase e ative o Firestore e Autenticação com Google.

- Permissões do Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    	allow read, write: if false;
    }

    match /financas/{email}/transacoes/{id} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
    
    match /usuarios/{email} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
  }
}
```




3. É preciso criar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_API_KEY=
```
Usar as credenciais do seu projeto no Firebase.

4. Dentro da pasta do projeto, execute os comandos abaixo:

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
O app estará disponível no endereço http://localhost:3000.

## Sobre o Projeto

Bitcent é uma aplicação web para controle de finanças pessoais com landing page e dashboard. O projeto utiliza o Firebase para autenticação e armazenamento de dados.

Projeto foi desenvolvido durante a **[Semana Tranformação.DEV](https://transformacao.dev/)**, que ocorreu nos dias 8 a 12 de Maio de 2023.


## License

Esse projeto está sob a [licença MIT](LICENSE.md).

---

Cod3r com ❤️ -  [Nossa Comunidade no Discord](https://discord.gg/JexVkcc3vr)