# ✈️ Planejamento de Viagens - React Native

Um aplicativo móvel desenvolvido em React Native que ajuda usuários a planejarem suas viagens. Ele recomenda destinos com base nas preferências (praias, montanhas, cidades históricas) e apresenta sugestões de atividades e atrações para cada local.

## 🎯 Sobre o Projeto

O aplicativo utiliza estruturas de decisão para exibir destinos e atividades de acordo com a categoria escolhida pelo usuário. A interface foi projetada para ser moderna, com cards organizados, ícones (emojis) e navegação simples com botão "Voltar" no rodapé.

## ✨ Funcionalidades

### 🗺️ Seleção de Preferências
- Escolha entre três categorias: **Praias 🏖️**, **Montanhas ⛰️** e **Cidades Históricas 🏛️**
- Cada categoria apresenta uma descrição e um ícone representativo

### 📍 Lista de Destinos Recomendados
- Exibe uma lista de destinos para a preferência escolhida
- Cada destino possui ícone, nome, breve descrição e avaliação (⭐)
- Toque em um destino para ver mais detalhes

### 📘 Detalhes do Destino e Atividades
- Página com informações do destino selecionado
- Sugestões de atividades e atrações típicas para o local
- Layout organizado em cards para leitura fácil

### 🔁 Navegação Intuitiva
- Botão **Voltar** fixo na parte inferior (rodapé) das telas de Lista e Detalhes
- Fluxo simples: Preferência → Lista de Destinos → Detalhes do Destino

### 🎨 Interface Moderna
- Design limpo, com hierarquia visual por meio de cards e sombras sutis
- Ícones com emojis para uma experiência leve e amigável
- Responsivo com `ScrollView` e `SafeAreaView`

## 🧠 Estruturas de Decisão (Recomendações)
O app utiliza condições para apresentar conteúdo relevante:

- Se o usuário escolher **Praias**, recomenda destinos litorâneos com atividades como mergulho, passeios de barco e snorkel
- Se escolher **Montanhas**, sugere cidades serranas e trilhas, com atividades como caminhadas, teleféricos e cachoeiras
- Se optar por **Cidades Históricas**, mostra destinos com patrimônio cultural e atividades como visitas a igrejas, museus e centros históricos

## 🎨 Paleta de Cores

Paleta utilizada na aplicação:

- Primário escuro: `#044251`
- Card: `#046673`
- Botão: `#01848c`
- Botão ativo/destaque secundário: `#00a2a7`
- Texto em destaque: `#c29574`
- Destaque suave: `#a27c67`

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Nathalia-Soares/atividades-react-native.git
cd 07_planejamento-viagens
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npx run web
```

4. **Acesse no dispositivo:**
- Use o app Expo Go no seu smartphone
- Escaneie o QR Code exibido no terminal
- Ou pressione 'a' para abrir no emulador Android
- Ou pressione 'i' para abrir no emulador iOS

### Uso do Aplicativo

1. Na tela inicial, **selecione uma categoria** (Praias, Montanhas ou Cidades Históricas)
2. **Explore os destinos** recomendados e toque em um para ver detalhes
3. Veja **atividades e atrações** sugeridas para o destino
4. Use o **botão Voltar** na parte de baixo da tela para retornar à lista ou à seleção

## 🛠️ Tecnologias Utilizadas

- React Native (Expo)
- JavaScript (ES6+)
- React Hooks (`useState`)
- StyleSheet para estilização nativa

## 📱 Compatibilidade

- ✅ Android
- ✅ iOS
- ✅ Expo Go (para testes rápidos)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido como parte de atividades práticas de React Native.

---

Planeje sua próxima aventura com praticidade! 🌍🧭
