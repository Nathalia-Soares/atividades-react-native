# 🎯 Jogo da Adivinhação

Um jogo interativo desenvolvido em React Native onde o jogador deve adivinhar um número aleatório entre 1 e 100, recebendo dicas sobre se o número é maior ou menor que o palpite fornecido.

## 🚀 Funcionalidades

### ✨ Principais Recursos
- **Geração Aleatória:** Número secreto gerado automaticamente entre 1 e 100
- **Sistema de Dicas:** Feedback inteligente sobre se o palpite é maior ou menor
- **Contador de Tentativas:** Acompanha quantas tentativas foram feitas
- **Sistema de Pontuação:** Registra e exibe a melhor pontuação
- **Interface Intuitiva:** Design moderno com paleta de cores escura
- **Validação de Dados:** Verifica se os valores inseridos são válidos

### 🎮 Mecânicas do Jogo
- **Objetivo:** Adivinhar o número secreto com o menor número de tentativas
- **Dicas:** "📈 Maior" ou "📉 Menor" baseadas no palpite
- **Vitória:** Mensagem de parabéns com número de tentativas
- **Recorde:** Sistema de melhor pontuação persistente

## 🎨 Design

### Paleta de Cores
- **Fundo Principal:** `#01191e` (verde escuro)
- **Cards e Containers:** `#03282f` (verde médio escuro)
- **Texto Principal:** `#ffffff` (branco)
- **Bordas e Detalhes:** `#0d3840` (verde azulado)
- **Elementos Secundários:** `#02272e`, `#001116`, `#001a1f`

### Interface
- Design escuro e moderno
- Contraste otimizado para legibilidade
- Elementos bem definidos com bordas
- Hierarquia visual clara
- Emojis para melhor experiência do usuário

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento
- **JavaScript ES6+** - Linguagem de programação
- **React Hooks** - Gerenciamento de estado (useState, useEffect)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm
- Expo CLI
- Emulador Android/iOS ou dispositivo físico

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd 04_jogo-adivinhacao
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

## 📋 Como Jogar

### 1. Iniciar o Jogo
- Toque no botão **"🎮 Iniciar Jogo"**
- Um número aleatório entre 1 e 100 será gerado

### 2. Fazer um Palpite
- Digite um número no campo de entrada
- O número deve estar entre 1 e 100
- Toque em **"🔍 Verificar"**

### 3. Receber Dicas
- **📈 "O número é maior que X"** - Seu palpite é menor que o número secreto
- **📉 "O número é menor que X"** - Seu palpite é maior que o número secreto

### 4. Continuar Tentando
- Use as dicas para se aproximar do número correto
- Tente acertar com o menor número de tentativas possível

### 5. Vitória
- Quando acertar, receberá uma mensagem de parabéns
- O número de tentativas será exibido
- Se for uma nova melhor pontuação, será destacado

### 6. Jogar Novamente
- Toque em **"Jogar Novamente"** para iniciar uma nova partida
- Ou use **"🔄 Reiniciar"** para voltar ao menu inicial

## 🔧 Estrutura do Código

### Estados Principais
```javascript
const [numeroSecreto, setNumeroSecreto] = useState(null);
const [palpite, setPalpite] = useState('');
const [tentativas, setTentativas] = useState(0);
const [mensagem, setMensagem] = useState('');
const [jogoIniciado, setJogoIniciado] = useState(false);
const [melhorPontuacao, setMelhorPontuacao] = useState(null);
```

### Funções Principais
```javascript
// Gera número aleatório entre 1 e 100
const gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Inicia novo jogo
const iniciarJogo = () => { /* lógica de inicialização */ };

// Verifica o palpite do jogador
const verificarPalpite = () => { /* lógica de validação e dicas */ };

// Reinicia o jogo
const reiniciarJogo = () => { /* lógica de reset */ };
```

## 🎯 Lógica do Jogo

### Geração do Número Secreto
```javascript
// Fórmula para gerar número entre 1 e 100
numeroAleatorio = Math.floor(Math.random() * 100) + 1
```

### Sistema de Dicas
- **Palpite < Número Secreto:** "📈 O número é maior que X"
- **Palpite > Número Secreto:** "📉 O número é menor que X"
- **Palpite = Número Secreto:** Mensagem de vitória

### Validações
- ✅ Verificação de números válidos (1-100)
- ✅ Tratamento de entradas vazias
- ✅ Alertas para valores inválidos
- ✅ Controle de tentativas

## 🏆 Sistema de Pontuação

### Como Funciona
- Registra o menor número de tentativas para acertar
- Persiste durante a sessão do jogo
- Exibe quando uma nova melhor pontuação é alcançada
- Mostra a pontuação atual na tela inicial

### Exemplos de Pontuação
- **Excelente:** 1-3 tentativas
- **Bom:** 4-7 tentativas
- **Regular:** 8-15 tentativas
- **Pode melhorar:** 16+ tentativas

## 🎮 Estratégias de Jogo

### Dicas para Jogar Melhor
1. **Comece pelo meio:** Tente 50 primeiro
2. **Use a estratégia binária:** Divida o intervalo ao meio a cada tentativa
3. **Prestar atenção nas dicas:** Use as informações para se aproximar
4. **Não repetir palpites:** Cada tentativa deve ser diferente

### Exemplo de Jogada Eficiente
- **Tentativa 1:** 50 → "Maior"
- **Tentativa 2:** 75 → "Menor"
- **Tentativa 3:** 62 → "Maior"
- **Tentativa 4:** 68 → "Menor"
- **Tentativa 5:** 65 → "Acertou!"

## 🔍 Validações Implementadas

### Validações de Entrada
- ✅ Verificação de números válidos
- ✅ Range entre 1 e 100
- ✅ Tratamento de strings vazias
- ✅ Conversão de string para número

### Mensagens de Erro
- "Por favor, insira um número válido entre 1 e 100"
- Feedback visual para entradas inválidas

## 📱 Compatibilidade

### Plataformas Suportadas
- ✅ Android (via Expo)
- ✅ iOS (via Expo)
- ✅ Web (via Expo Web)

### Requisitos Mínimos
- **Android:** API 21+ (Android 5.0)
- **iOS:** iOS 11.0+
- **Expo:** Versão 45+

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido como parte de atividades práticas de React Native.

---

**🎯 Desafio:** Tente bater seu recorde pessoal! Quantas tentativas você consegue fazer para adivinhar o número?
