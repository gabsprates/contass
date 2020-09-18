## Curso de React

### Objetivo

Nosso objeto é contruir uma Single-Page Application para salvar nossos duas listas de filmes:

- Filmes que já assisti
- Filmes que quero ver

Essas listas serão preenchidas a partir de uma busca pelos títulos dos filmes na [OMDb API](http://www.omdbapi.com/).

### Requsitos Básicos

Legendas:

- `LFA`: Lista de Filmes que já Assisti
- `LFQV`: Lista de Filmes que Quer Ver

#### Página inicial
1. Exibir formulário de busca;
1. Navbar com botões para exibição de uma das listas;
  - Deve exibir por padrão a `LFA`;

#### Busca:
1. Fazer busca por título de filme na API;
1. Exibir 10 resultados da busca:
  - Cada item (card de filme) deve ter dois botões de ações:
    1. Adicionar (remover se já estiver) em `LFA`;
    1. Adicionar (remover se já estiver) em `LFA`;
1. Tratamento de estado para busca sem resultados;
1. Limpar a busca;

#### Listas
1. Tratamento de estados de listas vazias;
1. Os itens (card de filme) devem ter um botão para a remoção do item da respectiva lista;
1. Os itens (card de filme) de `LFQV` devem ter um botão para adicionar à `LFA`
  - Esta ação deve remover o item de `LFQV`

#### Card de filme
1. Deve conter:
  - Pôster
  - Título
  - Ano de lançamento

  
### Requisitos Extras

- Escrita de testes;
- Não deixar a mesma requisição de busca ser feita mais de uma vez (estratégia de cache);
- Layout responsivo;
- Busca por filme dentro de uma lista

---

### Setup

- Criação de chave de API para uso pessoal

http://www.omdbapi.com/apikey.aspx

- Extensões para editor/IDE:
  - Prettier
  - ESLint
  
- Instalação de pacotes

```
yarn install
```
