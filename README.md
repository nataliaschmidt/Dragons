# 🐉 Dragons

Este projeto é uma aplicação web para gerenciamento de dragões. Ele permite realizar o login, visualizar a lista de dragões, cadastrar novos, editar e remover dragões existentes, além de visualizar os detalhes de cada um.

## ⚙️ Funcionalidades

- **Login**
- **Listagem de dragões em ordem alfabética**
- **Criação de novos dragões**
- **Edição e remoção de dragões**
- **Visualização de detalhes de um dragão**

## 👤 Usuário para acesso

```
Email: user@dragons.com  
Senha: dragon$123
```

## 🛣️ Rotas da aplicação

| Rota                         | Descrição                       |
|------------------------------|---------------------------------|
| `/`                          | Login                           |
| `/dragoes`                   | Listagem de dragões             |
| `/dragoes/criardragao`       | Criação de um novo dragão       |
| `/dragoes/editardragao/:id`  | Edição de um dragão existente   |
| `/dragoes/:id`               | Detalhamento de um dragão       |

## 🔧 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone git@github.com:nataliaschmidt/Dragons.git

# Acesse a pasta do projeto
cd Dragons

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

⚠️ A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)
