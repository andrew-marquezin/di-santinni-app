# Di Santinni - Teste Técnico

Interface de e-commerce mobile-first desenvolvida como parte de um teste técnico, com foco em fidelidade ao layout,
componentização e boas práticas de desenvolvimento web.

**[Ver demonstração ao vivo](https://di-santinni-mobile-app.vercel.app/)**

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior) e o [npm](https://www.npmjs.com/) (
ou [Yarn](https://yarnpkg.com/)) instalados em sua máquina.

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/andrew-marquezin/di-santinni-app.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd di-santinni-app
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

### Executando a Aplicação

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Abra o navegador:**
   A aplicação estará disponível em `http://localhost:5173` (ou em outra porta, caso a 5173 esteja em uso).

---

## 🎯 Sobre o Projeto

O objetivo deste projeto foi replicar um layout de e-commerce mobile (fornecido em um arquivo Figma) com a maior
fidelidade possível ("pixel perfect"). A aplicação foi desenvolvida utilizando ReactJS e segue as melhores práticas de
SEO, componentização e organização de código, conforme as especificações do teste.

## ✨ Features

- **Arquitetura baseada em componentes:** O projeto é dividido em componentes reutilizáveis e bem definidos.
- **Layout Mobile-First:** Desenvolvido com uma largura máxima de 375px para simular um ambiente mobile.
- **Carrosséis Dinâmicos:** Seções como "Navegue por Categorias" e "Destaque das Marcas" são implementadas com
  carrosséis funcionais.
- **Filtragem de Produtos:** A seção de produtos possui abas para filtrar por gênero (Masculino, Feminino, etc.).
- **Navegação Fixa:** A barra de navegação inferior parmanece fixo na tela.
- **Otimização para SEO:** Foram aplicadas práticas de SEO, incluindo o uso de meta tags, semântica HTML e atributos
  `alt` em imagens.

## 📸 Screenshot

*(Recomendação: Tire um print da sua aplicação rodando e substitua o link abaixo. Isso valoriza muito a apresentação.)*

![Screenshot do App](/di-santinni-screenshot.png)

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/)**
- **[Vite](https://vitejs.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **CSS Modules**

---

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

```
di-santinni-app/
├── public/               # Arquivos estáticos (imagens, fontes, etc.)
├── src/
│   ├── assets/           # SVGs e imagens usados nos componentes
│   ├── components/       # Componentes React reutilizáveis
│   ├── data/             # Mock de dados (database.json)
│   ├── App.css           # Estilos globais do App
│   ├── App.tsx           # Componente principal que monta as páginas
│   ├── index.css         # Estilos da raiz (root, body)
│   └── main.tsx          # Ponto de entrada da aplicação React
├── .gitignore
├── index.html            # Template HTML principal
├── package.json
└── README.md             # Este arquivo
```

---

## 👨‍💻 Autor

**Andy | Fullstack Developer**

- GitHub: [@andrew-marquezin](https://github.com/andy-marquezin)
- LinkedIn: [@andrew-marinho](https://www.linkedin.com/in/andrew-marinho-20522417b/)
