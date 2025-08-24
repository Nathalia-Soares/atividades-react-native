# 📱 Monitor de Saúde - React Native

Um aplicativo móvel desenvolvido em React Native que permite aos usuários monitorarem sua saúde e bem-estar geral através de métricas personalizadas e recomendações inteligentes.

## 🎯 Sobre o Projeto

O **Monitor de Saúde** é uma aplicação que coleta informações sobre o nível de energia, qualidade do sono e nível de estresse do usuário, utilizando estruturas de decisão para oferecer dicas e sugestões personalizadas para melhorar a saúde e bem-estar.

## ✨ Funcionalidades

### 📊 Monitoramento de Métricas
- **Nível de Energia (1-10)**: Avaliação do estado energético atual
- **Qualidade do Sono (1-10)**: Avaliação da qualidade do sono da noite anterior
- **Nível de Estresse (1-10)**: Monitoramento do estresse atual

### 🧠 Sistema de Recomendações Inteligente
O aplicativo utiliza estruturas de decisão para gerar dicas personalizadas baseadas nas respostas do usuário:

#### 💪 Para Energia:
- **8-10**: Manter alto nível, exercícios intensos, ajudar outras pessoas
- **6-7**: Caminhadas de 30 minutos, hidratação regular
- **4-5**: Alongamentos leves, frutas/nozes, respiração profunda
- **1-3**: Descanso, soneca de 20 minutos, dormir cedo

#### 😴 Para Sono:
- **8-10**: Manter rotina, evitar telas 1 hora antes de dormir
- **6-7**: Quarto escuro e fresco, rotina consistente
- **4-5**: Evitar cafeína após 14h, técnicas de relaxamento, ruído branco
- **1-3**: Consulta médica, evitar álcool, terapia para ansiedade

#### 😰 Para Estresse:
- **1-2**: Manter práticas de relaxamento, atividades que fazem bem
- **3-4**: Respiração profunda, pausas regulares
- **5-6**: Meditação, exercícios leves, conversas com amigos
- **7-10**: Ajuda profissional, autocuidado prioritário, reduzir compromissos

### 🎨 Interface Moderna
- Design limpo e intuitivo
- Paleta de cores personalizada
- Cards com sombras para melhor hierarquia visual
- Interface responsiva com ScrollView

## 🎨 Paleta de Cores

O aplicativo utiliza uma paleta de cores cuidadosamente escolhida:

- **Primária**: `#499C70` (Verde) - Botões e elementos principais
- **Secundária**: `#2A836B` (Verde escuro) - Botão de reset
- **Terciária**: `#136B69` (Verde azulado) - Labels e elementos secundários
- **Escura**: `#024053` (Azul escuro) - Header e títulos

## 🚀 Como Usar

### 1. Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue até o diretório do projeto
cd 05_monitoramento-saude

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npx run web
```

### 3. Uso do Aplicativo

1. **Abra o aplicativo** no seu dispositivo ou emulador
2. **Preencha os campos** com valores de 1 a 10:
   - Nível de Energia
   - Qualidade do Sono
   - Nível de Estresse
3. **Clique em "Gerar Recomendações"**
4. **Visualize o resumo** dos seus valores
5. **Leia as recomendações** personalizadas
6. **Clique em "Nova Avaliação"** para começar novamente

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento React Native
- **JavaScript ES6+**: Linguagem de programação
- **React Hooks**: useState para gerenciamento de estado
- **StyleSheet**: Estilização nativa do React Native

## 📱 Compatibilidade

- ✅ Android (versão 5.0+)
- ✅ iOS (versão 11.0+)
- ✅ Expo Go (aplicativo para testes)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido como parte de atividades práticas de React Native.

---

**Monitor de Saúde** - Cuide do seu bem-estar de forma inteligente! 🌟
