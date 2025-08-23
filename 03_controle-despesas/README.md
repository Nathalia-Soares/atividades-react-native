# 📊 Controle de Despesas

Um aplicativo móvel desenvolvido em React Native para controle financeiro pessoal, que permite calcular economia mensal e fornece feedback motivacional baseado na performance financeira.

## 🚀 Funcionalidades

### ✨ Principais Recursos
- **Cálculo de Economia:** Calcula automaticamente o valor e porcentagem economizada no mês
- **Feedback Motivacional:** Mensagens personalizadas baseadas na performance financeira
- **Interface Intuitiva:** Design moderno com cores frias (azul, verde, roxo)
- **Validação de Dados:** Verifica se os valores inseridos são válidos
- **Suporte a Déficit:** Funciona mesmo quando há gastos maiores que receitas

### 📱 Cenários Cobertos
- **Economia > 15%:** "Invista seu dinheiro" 💰
- **Economia 10-15%:** "Vamos investir no próximo mês" 📈
- **Economia < 10%:** "Vamos continuar tentando" 💪
- **Déficit:** "Atenção: Suas despesas são maiores que suas receitas" ⚠️

## 🎨 Design

### Paleta de Cores
- **Fundo Principal:** Roxo suave (`#8679a6`)
- **Azul:** Botões e elementos interativos (`#4a90e2`)
- **Verde:** Valores positivos (`#00b894`)
- **Roxo Escuro:** Bordas e detalhes (`#5d4e75`)
- **Vermelho:** Alertas e déficit (`#e74c3c`)

### Interface
- Design responsivo e moderno
- Campos de entrada com validação visual
- Cards informativos com sombras
- Feedback visual por cores
- ScrollView para melhor usabilidade

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento
- **JavaScript ES6+** - Linguagem de programação
- **React Hooks** - Gerenciamento de estado (useState)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm
- Expo CLI
- Emulador Android/iOS ou dispositivo físico

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Nathalia-Soares/atividades-react-native.git
cd 03_controle-despesas
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

## 📋 Como Usar

### 1. Inserir Dados
- Digite suas **receitas mensais** no primeiro campo
- Digite suas **despesas mensais** no segundo campo
- Use apenas números (o app aceita decimais)

### 2. Calcular Resultado
- Toque no botão **"Calcular"** para processar os dados
- O app validará os valores e mostrará o resultado

### 3. Interpretar Resultados
- **Economia/Déficit:** Valor em reais economizado ou gasto a mais
- **Porcentagem:** Percentual em relação às receitas
- **Mensagem:** Feedback motivacional baseado na performance

### 4. Limpar Dados
- Use o botão **"Limpar"** para resetar todos os campos

## 🔧 Estrutura do Código

### Componentes Principais
```javascript
// Estados principais
const [receitas, setReceitas] = useState('');
const [despesas, setDespesas] = useState('');
const [resultado, setResultado] = useState(null);

// Funções principais
const calcularEconomia = () => { /* lógica de cálculo */ };
const limparDados = () => { /* limpeza dos campos */ };
const getMensagemStyle = (tipo) => { /* estilos dinâmicos */ };
```

### Estilos CSS
- **Nomenclatura em Português:** Todos os estilos seguem padrão brasileiro
- **Estilos Dinâmicos:** Cores e aparência mudam conforme o resultado
- **Responsividade:** Adaptação para diferentes tamanhos de tela

## 📊 Lógica de Cálculo

### Fórmulas Utilizadas
```javascript
// Economia em reais
economia = receitas - despesas

// Porcentagem economizada
porcentagemEconomia = (economia / receitas) * 100
```

### Regras de Negócio
- **Receitas devem ser > 0**
- **Valores devem ser números válidos**
- **Suporte a valores negativos (déficit)**
- **Porcentagem pode ser negativa**

## 🎯 Casos de Uso

### Cenário 1: Economia Excelente
- **Receitas:** R$ 5.000
- **Despesas:** R$ 3.500
- **Resultado:** R$ 1.500 (30% de economia)
- **Mensagem:** "Invista seu dinheiro"

### Cenário 2: Economia Moderada
- **Receitas:** R$ 4.000
- **Despesas:** R$ 3.600
- **Resultado:** R$ 400 (10% de economia)
- **Mensagem:** "Vamos investir no próximo mês"

### Cenário 3: Déficit
- **Receitas:** R$ 3.000
- **Despesas:** R$ 3.500
- **Resultado:** -R$ 500 (-16.7% de déficit)
- **Mensagem:** "Atenção: Suas despesas são maiores que suas receitas"

## 🔍 Validações

### Validações Implementadas
- ✅ Verificação de valores numéricos válidos
- ✅ Receitas devem ser maiores que zero
- ✅ Tratamento de valores vazios
- ✅ Suporte a números decimais
- ✅ Feedback visual para erros

### Mensagens de Erro
- "Por favor, insira valores válidos para receitas e despesas"
- "As receitas devem ser maiores que zero"

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido como parte de atividades práticas de React Native.

---

**💡 Dica:** Use este app regularmente para manter o controle das suas finanças pessoais e desenvolver hábitos financeiros saudáveis!
