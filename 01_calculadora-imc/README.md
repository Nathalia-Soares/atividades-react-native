# Calculadora de IMC

Um aplicativo React Native para calcular o Índice de Massa Corporal (IMC) com interface moderna e funcional.

## 📱 Funcionalidades

- **Cálculo de IMC**: Insira seu peso e altura para calcular automaticamente seu IMC
- **Classificação**: O aplicativo classifica seu resultado em:
  - Abaixo do peso (IMC < 18.5)
  - Peso normal (IMC 18.5 - 24.9)
  - Sobrepeso (IMC 25.0 - 29.9)
  - Obesidade (IMC ≥ 30.0)
- **Interface moderna**: Design limpo e intuitivo com cores que indicam a classificação
- **Validação de dados**: Verifica se os valores inseridos são válidos
- **Responsivo**: Funciona em diferentes tamanhos de tela

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Nathalia-Soares/atividades-react-native.git
cd 01_calculadora-imc
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

## 📋 Como usar

1. **Inserir dados**:
   - Digite seu peso em quilogramas (ex: 70.5)
   - Digite sua altura em metros (ex: 1.75)

2. **Calcular**:
   - Toque no botão "Calcular IMC"

3. **Ver resultado**:
   - O IMC será exibido em destaque
   - A classificação aparecerá com uma cor específica
   - Informações sobre as faixas de IMC são mostradas

4. **Limpar dados**:
   - Use o botão "Limpar" para começar novamente

## 🎨 Design

- **Cores**:
  - Azul escuro (#2C3E50) para o cabeçalho
  - Verde (#51CF66) para peso normal
  - Laranja (#FFA726) para sobrepeso
  - Vermelho (#EF5350) para obesidade
  - Vermelho claro (#FF6B6B) para abaixo do peso

- **Interface**:
  - Cards com sombras para melhor organização
  - Campos de entrada com bordas arredondadas
  - Botões com cores contrastantes
  - Tipografia clara e legível

## 📊 Fórmula do IMC

```
IMC = Peso (kg) / Altura² (m)
```

## ⚠️ Importante

Este aplicativo é apenas uma ferramenta educacional. Para avaliações médicas precisas, consulte sempre um profissional de saúde.

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- JavaScript (ES6+)
- React Hooks (useState)

## 📱 Compatibilidade

- iOS 11.0+
- Android 5.0+
- Web (Chrome, Firefox, Safari)
