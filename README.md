# Processo Seletivo Monks - Especialista em Desenvolvimento Web

## 🧾 Visão Geral

Projeto full stack desenvolvido para o processo seletivo da Monks, consistindo em uma landing page responsiva com dados dinâmicos, formulário validado e integração com backend em PHP + MySQL via Docker.

---

## 🚀 Como rodar o projeto

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

### Backend (PHP + MySQL via Docker)

```bash
cd backend
docker-compose up -d
```

A API estará disponível em: [http://localhost:8000](http://localhost:8000)

> ⚠️ Certifique-se de que o banco está populado corretamente e o backend esteja aceitando requisições CORS de `http://localhost:3000`.

---

## 📁 Estrutura de Pastas

### Frontend
- `components/`: Componentes reutilizáveis (Header, Hero, Tags, Cards, etc.)
- `context/GlobalContext.tsx`: Gerencia estado global via Context API (cards e tags).
- `services/api.ts`: Instância do Axios configurada.
- `pages/`: Tela principal.
- `styles.ts`: Styled-components de cada componente.

### Backend
- `controller/`: Arquivos responsáveis por lidar com as requisições.
- `repository/`: Lógica de acesso ao banco MySQL.
- `index.php`: Arquivo principal com roteamento de requisições.
- `.htaccess`: Reescrita de URL para suportar rotas amigáveis via Apache.

---

## 🧪 Funcionalidades Implementadas

- ✅ Consumo dinâmico dos cards e tags via API
- ✅ Utilização de Context API para armazenar e reutilizar os dados globalmente
- ✅ Skeleton loading com CSS puro para feedback de carregamento
- ✅ Responsividade total da interface
- ✅ Hero com layout flexível e imagem com `object-fit`
- ✅ Formulário com validação de campos obrigatórios e verificação de segurança
- ✅ Botão de envio com `disabled` estilizado via styled-components
- ✅ Envio do formulário com campos `category1` a `category4` para o backend
- ✅ Correção de caracteres com `decodeURIComponent` no frontend
- ✅ Suporte a requisições `OPTIONS` para resolver CORS

---

## 📡 Rotas da API disponíveis

### `GET /api/cards`

Retorna um array de cards com imagem e título.

**Exemplo de resposta:**
```json
[
  {
    "id": 1,
    "title": "Exemplo de Card",
    "imageUrl": "/cards/card1.png"
  }
]
```

---

### `GET /api/tags`

Retorna uma lista de tags.

**Exemplo de resposta:**
```json
[
  { "name": "Proteção" },
  { "name": "Higiene" }
]
```

---

### `POST /api/form`

Recebe os campos do formulário e salva no banco.

**Payload esperado:**
```json
{
  "category1": "valor obrigatório",
  "category2": "valor obrigatório",
  "category3": "opcional",
  "category4": "opcional"
}
```

**Respostas:**
- `201 Created`: Sucesso com ID retornado
- `400 Bad Request`: Campos obrigatórios ausentes
- `500 Internal Server Error`: Erro interno

---

## 🛠 Tecnologias Utilizadas

### Frontend
- React + TypeScript
- Styled-components
- Axios
- Context API

### Backend
- PHP 8+
- MySQL
- Apache + Docker
- CORS manual com headers

---

## 📌 Observações

- As informações são carregadas dinamicamente.
- A imagem do Hero foi ajustada com `flex` e `object-fit` (sem `position: absolute`).
- Formulário está validado e só envia dados se os obrigatórios estiverem corretos.
- Skeleton é utilizado enquanto os dados são carregados.

---

## 👨‍💻 Desenvolvido por

João Vitor Salvini
