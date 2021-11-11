<h1 align="center"> Menina de Vila :girl: - Banco Safra </h1>

<div align="center">
  <img alt="logo" height="150" width="120" src="./src/assets/logo-safra.png">
</div>

<h2 align="center"> Projeto Final desenvolvido no hackathon do Talent Fest durante o bootcamp de Front-End da SAP006 Laboratoria :yellow_heart: </h2>

## Índice

1. [A Ideia](#dart-a-ideia)
2. [Desafio](#on-desafio)
3. [Objetivos Principais](#pencil2-objetivos-principais)
4. [UX/UI Design](#art-ux/ui-design)
5. [Como Utilizar](#gear-como-utilizar)
6. [Testes de Usabilidade](#busts_in_silhouette-testes-de-usabilidade)
7. [Tecnologias Utilizadas](#robot-tecnologias-utilizadas)
8. [Estrutura dos Principais Arquivos](#file_folder-estrutura-dos-principais-arquivos)
9. [Performance, Progressive Web App, Accessibility e Best Practices do Lighthouse](#bar_chart-performance-progressive-web-app-accessibility-e-best-practices-do-lighthouse)
10. [Resultados](#%EF%B8%8F-resultados)
11. [Sobre as desenvolvedoras](#woman_technologist-sobre-as-desenvolvedoras)

---
## :dart: A Ideia
O Projeto “Menina de Vila – O Portal de Educação Financeira e Investimentos. Criado por, e para, Mulheres” tem como principal objetivo, simplificar a linguagem do mercado financeiro e levar conteúdo de educação financeira para as meninas que não possuem acesso as informações na linguagem da periferia.

<div align="center" style="display: flex">
    <img alt="logo" height="150" width="150" style="margin: 50rem" src="./src/assets/logo-g-menina-de-vila.png">
</div>

---
## :on: Desafio
* Layout / Design da plataforma e dos “cards” de estudo
* Trilha de estudo
* Dashboard com informações sobre avanço
* Notificações para manter o engajamento dos estudos
* Like nos artigos e compartilhamento

---

## :pencil2: Objetivos Principais
* Gerar conhecimento sobre educação financeira e investimento
* Ter uma linguagem simples
* Atingir o publico feminino das periferias
* Gerar engajamento nas comunidades

---
## :art: UX/UI Design

### Paleta de Cores 
![img](./src/assets/paleta-cores.jpeg)

---

### Protótipo de Baixa Fidalidade
<div align="center" style="display: flex">
  <img alt="prototipo1" height="580" width="410" src="./src/img/prototipo-login2.png">
</div>

### Protótipo de Alta Fidelidade
<div align="center" style="display: flex">
  <img alt="prototipo1" height="580" width="410" src="./src/img/prototipo-login2.png">
  <img alt="prototipo2" height="580" width="410" src="./src/img/prototipo-salao3.png"><br><br>
  
  <img alt="prototipo-salao" height="600" width="750" src="./src/img/prototipo-salao.png">
</div>

---
## :gear: Como Utilizar

- A tela inicial da aplicação traz a **Página de Login** que apresenta ao usário as opções de fazer o login com email e senha já cadastrados e entrar na plataforma do Divino Burger ou prosseguir para a Página de Cadastro;
- Na **Página de Cadastro**, o funcionário pode cadastrar-se inserindo seus dados de Nome, E-mail, Senha e Setor de Trabalho;
- Ao realizar qualquer uma dessas formas de acesso, o usuário será encaminhado para o seu respectivo ambiente:
    1. **Salão**: para os garçons/garçonetes, onde ocorrerá a anotação e encaminhamento dos pedidos para a cozinha;
    2. **Cozinha**: para os cozinheiros que receberão a demanda dos pedidos realizados.

---
## :busts_in_silhouette: Testes de Usabilidade
Durante o desenvolvimento do projeto, foram realizados testes de usabilidade com diferentes indivíduos no intuito de analisar a experiência do usuário com a interface da aplicação. Com base nos resultados desses testes, foram implementadas as seguintes soluções:

- Tempo de preparação exibido somente na área de pedidos entregues;
- Relógio digital;
- Responsividade para tablet em formato retrato, adaptando a exibição do carrinho na página de Salão;
- Histórico com filtragem de pedidos do dia atual;
- Atualização automática dos pedidos;

---
## :robot: Tecnologias Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `React` | Uma biblioteca JavaScript para criar interfaces de usuário |
| `HTML 5` | Linguagem de marcação |
| `SCSS/SASS` | Linguagem de estilização |
| `JavaScript` |  Linguagem de programação interpretada estruturada |
| `Jest` | Framework de teste em JavaScript |
| `Node.js` | Software de execução de códigos JavaScript |
| `Git e GitHub` | Sistemas de controle de versões distribuídos |
| `Figma` | Editor gráfico de vetor e prototipagem de projetos |

---

## :file_folder: Estrutura dos Principais Arquivos
```
.
├── 📁public
|
├── 📁src
|   ├── 📁components
|   |   ├── 📁All-day
|   |   ├── 📁Breakfast
|   |   ├── 📁ButtonDefault
|   |   ├── 📁ButtonImg
|   |   ├── 📁ButtonRadio
|   |   ├── 📁ButtonSelect
|   |   ├── 📁CarArea
|   |   ├── 📁CartItem
|   |   ├── 📁DateTime
|   |   ├── 📁ErrorMessage
|   |   ├── 📁Header
|   |   ├── 📁Input
|   |   ├── 📁LinkAside
|   |   ├── 📁ListAllOrders
|   |   ├── 📁Loader
|   |   ├── 📁NotFound
|   |   ├── 📁Popup
|   |   ├── 📁PopupCancel
|   |   └── 📁ProductArea
|   |
|   ├── 📁img
|   |
|   ├── 📁pages
|   |   ├── 📁Hall
|   |   ├── 📁Login
|   |   ├── 📁OrdersPanel
|   |   └── 📁Register
|   |
|   ├── 📁services
|   |   
|   ├── 📁utils
|   |
|   ├── 📄global.scss
|   ├── 📄index.js
|   └── 📄routes.js
|   
├── 📄README.md
└── 📄package.json

```

## :bar_chart: Performance, Progressive Web App, Accessibility e Best Practices do Lighthouse
A aplicação superou a meta de 80% de pontuação do [Lighthouse](https://web.dev/) e o relatório completo pode ser visto [aqui](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdivino-burger.vercel.app%2F#performance).

<div align="center" >
  <img alt="light-house-perfomance" src="./src/img/light-house-perfomance.png">
</div>

---

## ✔️ Resultados

* #### Tablet
<div style="display: flex" align="center">
  <img align="center" alt="gif-cadastro" height="600" width="800" src="./src/img/gif-cadastro.gif"><br><br>
  <img align="center" alt="gif-carrinho" height="600" width="800" src="./src/img/gif-carrinho.gif"><br><br>
  <img align="center" alt="gif-pedidos" height="600" width="800" src="./src/img/gif-pedidos.gif"><br><br>
  <img align="center" alt="gif-status" height="600" width="800" src="./src/img/gif-status.gif">
</div>

* #### Responsivo
![img](./src/img/gif-responsivo.gif)

---
## :woman_technologist: Sobre as desenvolvedoras

### Karen Freitas

- [LinkedIn](https://www.linkedin.com/in/karen-freitas/)
- E-mail: karenfcorrea@gmail.com
### Patrícia Barnabé

- [LinkedIn](https://www.linkedin.com/in/patriciabarnabe)
- E-mail: patbarnabe5@gmail.com

