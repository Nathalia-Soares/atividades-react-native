# 🎬 Recomendador de Filmes

Um aplicativo React Native que sugere filmes aos usuários com base em suas preferências de gênero. O aplicativo possui uma base de dados com 25 filmes distribuídos em 5 gêneros diferentes.

## 📱 Funcionalidades

- **Seleção de Gêneros**: Interface intuitiva para escolher gêneros favoritos
- **Base de Dados**: 25 filmes distribuídos em 5 gêneros (5 filmes por gênero)
- **Recomendações Inteligentes**: Algoritmo que seleciona filmes baseado nas preferências
- **Interface Moderna**: Design escuro com cards coloridos para cada gênero
- **Informações Detalhadas**: Cada filme exibe título, ano, diretor, avaliação e descrição
- **Imagens Personalizadas**: Capas de filmes geradas via placeholder.com

## 🎭 Gêneros Disponíveis

### 💥 Ação
- Mad Max: Estrada da Fúria (2015)
- John Wick (2014)
- Duro de Matar (1988)
- Matrix (1999)
- Missão Impossível (1996)

### 😂 Comédia
- Superbad (2007)
- Missão Madrinha de Casamento (2012)
- Se Beber, Não Case! (2009)
- Todo Mundo Quase Morto (2009)
- Feitiço do Tempo (2018)

### 🎭 Drama
- Forrest Gump (1994)
- O Poderoso Chefão (1972)
- Pulp Fiction (1994)
- Titanic (1997)
- O Silêncio dos Inocentes (1991)

### 🚀 Ficção Científica
- Interestelar (2014)
- Blade Runner (1982)
- Ex Machina (2014)
- Arrival - A Chegada (2016)
- Her (2013)

### 👻 Terror
- O Exorcista (1973)
- O Iluminado (1980)
- Halloween (1978)
- Psicose (1960)
- A Bruxa (2015)

## 🚀 Como executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o aplicativo**:
   ```bash
   npm run web
   ```

3. **Executar no dispositivo/emulador**:
   - Pressione `a` para Android
   - Pressione `i` para iOS
   - Pressione `w` para Web

## 📋 Como usar

1. **Selecionar Gêneros**:
   - Toque nos cards dos gêneros que você gosta
   - Você pode selecionar múltiplos gêneros
   - Os gêneros selecionados ficam destacados com um checkmark

2. **Gerar Recomendações**:
   - Toque no botão "🎲 Gerar Recomendações"
   - O aplicativo selecionará 2 filmes aleatórios de cada gênero escolhido

3. **Explorar Resultados**:
   - Cada filme mostra:
     - Imagem da capa
     - Título e ano
     - Diretor
     - Avaliação (⭐/10)
     - Breve descrição

4. **Limpar Seleção**:
   - Use o botão "Limpar Seleção" para começar novamente

## 🎨 Design

- **Tema Escuro**: Interface moderna com fundo escuro
- **Cards Coloridos**: Cada gênero tem sua cor característica:
  - Ação: Vermelho (#E74C3C)
  - Comédia: Laranja (#F39C12)
  - Drama: Azul (#3498DB)
  - Ficção Científica: Roxo (#9B59B6)
  - Terror: Cinza escuro (#2C3E50)

- **Layout Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Animações**: Feedback visual ao selecionar gêneros
- **Tipografia**: Hierarquia clara de informações

## 🧠 Algoritmo de Recomendação

O aplicativo utiliza um algoritmo simples mas eficaz:

1. **Seleção por Gênero**: Para cada gênero selecionado, escolhe 2 filmes aleatórios
2. **Embaralhamento**: Mistura todos os filmes selecionados para variedade
3. **Validação**: Garante que pelo menos um gênero seja selecionado

## 🛠️ Tecnologias utilizadas

- **React Native**: Framework principal
- **Expo**: Plataforma de desenvolvimento
- **JavaScript (ES6+)**: Linguagem de programação
- **React Hooks**: useState para gerenciamento de estado
- **placeholder.com**: Geração de imagens de capa

## 📱 Compatibilidade

- iOS 11.0+
- Android 5.0+
- Web (Chrome, Firefox, Safari)

## 🔧 Estrutura do Código

```javascript
// Base de dados organizada por gênero
const filmesPorGenero = {
  acao: [...],
  comedia: [...],
  drama: [...],
  ficcao: [...],
  terror: [...]
};

// Configuração dos gêneros
const generos = [
  { id: 'acao', nome: 'Ação', cor: '#E74C3C', icone: '💥' },
  // ...
];
```

## 🎯 Próximas Funcionalidades

- [ ] Sistema de favoritos
- [ ] Filtros por ano de lançamento
- [ ] Avaliações dos usuários
- [ ] Trailer dos filmes
- [ ] Mais gêneros e filmes
- [ ] Histórico de recomendações

## 📄 Licença

Este projeto é apenas para fins educacionais. Os filmes mencionados são propriedade de seus respectivos estúdios e distribuidores.
