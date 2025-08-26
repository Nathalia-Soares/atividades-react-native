# 🏃‍♂️ Rastreador de Exercícios - React Native

Um aplicativo móvel desenvolvido em React Native que permite aos usuários rastrearem suas atividades físicas e exercícios, com feedback inteligente sobre o progresso e sugestões personalizadas baseadas em metas de condicionamento físico.

## 🎯 Sobre o Projeto

O **Rastreador de Exercícios** é uma aplicação que coleta informações sobre atividades físicas do usuário, utiliza estruturas de decisão para fornecer feedback sobre o progresso em relação a metas de condicionamento físico e sugere exercícios adicionais com base nos objetivos individuais.

## ✨ Funcionalidades

### 📊 Rastreamento de Atividades
- **Adicionar atividades** com nome, duração e tipo
- **4 tipos de exercício**: Cardio 🏃‍♂️, Força 💪, Flexibilidade 🧘‍♀️, Esporte ⚽
- **Lista de atividades** realizadas com data e hora
- **Remover atividades** individualmente ou limpar todas
- **Histórico completo** de exercícios

### 🎯 Sistema de Metas e Progresso
- **Meta semanal personalizável** (padrão: 150 minutos)
- **Barra de progresso visual** com cores dinâmicas
- **Cálculo automático** do progresso em tempo real
- **Acompanhamento visual** do desempenho

### 🧠 Feedback Inteligente com Estruturas de Decisão
O aplicativo utiliza estruturas de decisão para fornecer feedback personalizado baseado no progresso:

#### 🎉 Meta Atingida (100%)
- Parabéns e sugestões para manter o ritmo
- Sugestão de aumentar a meta para o próximo desafio
- Atividades relaxantes para comemorar a conquista

#### 🔥 Quase Lá (75-99%)
- Mostra quantos minutos faltam para atingir a meta
- Sugestões específicas para completar a meta
- Atividades motivacionais para manter o foco

#### 💪 Bom Progresso (50-74%)
- Percentual de conclusão da meta
- Sugestões para adicionar mais exercícios
- Novos tipos de atividades para variar a rotina

#### 🚀 Vamos Começar (<50%)
- Motivação para iniciantes
- Exercícios básicos e acessíveis
- Dicas para estabelecer uma rotina consistente

### 💡 Sugestões de Exercícios Personalizadas
Baseadas no progresso atual do usuário:

#### 🆕 Iniciantes (<30%)
- **Caminhada Leve** (20 min) - Perfeita para iniciantes
- **Alongamentos Básicos** (15 min) - Melhora a flexibilidade
- **Flexões de Parede** (10 min) - Fortalece braços e peito

#### 🔄 Intermediários (30-70%)
- **Corrida Leve** (30 min) - Aumenta resistência cardiovascular
- **Agachamentos** (15 min) - Fortalece pernas e glúteos
- **Yoga Básico** (25 min) - Equilibra corpo e mente

#### 🏆 Avançados (>70%)
- **Treino HIIT** (45 min) - Queima calorias intensamente
- **Musculação** (60 min) - Desenvolve força e massa muscular
- **Pilates** (40 min) - Melhora postura e core

### 🎨 Interface Moderna
- Design limpo e intuitivo
- Paleta de cores personalizada
- Cards com sombras para melhor hierarquia visual
- Interface responsiva com ScrollView
- Ícones emoji para melhor experiência visual

## 🎨 Paleta de Cores

O aplicativo utiliza uma paleta de cores cuidadosamente escolhida:

- **Azul Escuro**: `#010F42` - Header e títulos principais
- **Azul Médio**: `#0F4D91` - Botões e elementos interativos
- **Azul Claro**: `#000082` - Botão de feedback
- **Dourado**: `#D4AF37` - Barra de progresso e elementos de destaque
- **Branco**: `#E2EBE3` - Textos sobre fundos escuros

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Nathalia-Soares/atividades-react-native.git
cd 06_rastreamento-exercicios
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

1. **Adicione atividades**:
   - Digite o nome da atividade
   - Insira a duração em minutos
   - Selecione o tipo de exercício
   - Clique em "Adicionar Atividade"

2. **Configure sua meta**:
   - Ajuste a meta semanal de exercícios
   - Visualize o progresso na barra

3. **Veja o feedback**:
   - Clique em "Ver Feedback"
   - Leia as sugestões personalizadas
   - Explore os exercícios recomendados

4. **Gerencie atividades**:
   - Visualize todas as atividades realizadas
   - Remova atividades individuais
   - Limpe todas as atividades quando necessário

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

**Rastreador de Exercícios** - Transforme seus objetivos de fitness em realidade! 💪🌟
