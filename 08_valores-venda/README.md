# 🧮 Calculadora de Valores de Venda - React Native

Um aplicativo móvel em React Native (Expo) para calcular o valor final de uma venda a partir do preço unitário, quantidade e tipo de pagamento, aplicando automaticamente descontos conforme a forma de pagamento escolhida.

## 🎯 Sobre o Projeto

O app permite inserir o preço do produto, a quantidade e selecionar o tipo de pagamento. Com base nessa escolha, aplica regras de desconto e exibe um resumo detalhado do cálculo em uma interface moderna com cards, grid de opções e tipografia legível.

## ✨ Funcionalidades

### 🧾 Dados da Compra
- Input para **Preço do produto (R$)** com suporte a vírgula ou ponto
- Input para **Quantidade** (somente números)
- Validação com mensagens de erro amigáveis

### 💳 Seleção do Tipo de Pagamento
- Opções em cards com código e descrição:
  - #1 Dinheiro/Pix → 15% de desconto
  - #2 Cartão Débito → 10% de desconto
  - #3 Crédito 1x → 5% de desconto
  - #4 Crédito 2x → 0% de desconto
  - #5 Crédito 3x+ → 0% de desconto
- Destaque visual para a opção selecionada

### 🧠 Cálculo e Resultado
- Exibe: tipo de pagamento, **preço unitário**, **quantidade**, **valor da compra (subtotal)**, **desconto aplicado** e **valor final**
- Valores formatados em moeda brasileira (pt-BR)

### 🧹 Ações Rápidas
- Botão **Calcular**
- Botão **Limpar** (reinicia o formulário e seleção)

### 🎨 Interface Moderna
- Layout com `SafeAreaView`, `ScrollView` e **cards**
- Grid responsivo para as opções de pagamento
- Hierarquia visual e cores consistentes

## 🧠 Regras e Estruturas de Decisão
- O desconto é definido pela forma de pagamento:
  - Dinheiro/Pix: 15%
  - Débito: 10%
  - Crédito 1x: 5%
  - Crédito 2x ou 3x+: 0%
- Cálculo:
  - `subtotal = preço × quantidade`
  - `valorDesconto = subtotal × desconto`
  - `total = subtotal − valorDesconto`
- Tratamento de número com vírgula ou ponto e formatação com `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })`

## 🎨 Paleta de Cores
- Primário: `#0b0136`
- Médio/Card: `#273071`
- Realce/Claro: `#444fa1`
- Destaque (botões): `#5b97b1`
- Branco: `#ffffff`

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Nathalia-Soares/atividades-react-native.git
cd 08_valores-venda
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

## ▶️ Uso do Aplicativo
1. Digite o **preço** e a **quantidade**
2. Selecione o **tipo de pagamento**
3. Toque em **Calcular** para ver o resumo e o **valor final**
4. Use **Limpar** para começar novamente

## 🛠️ Tecnologias Utilizadas
- React Native (Expo)
- JavaScript (ES6+)
- React Hooks (`useState`, `useMemo`)
- `StyleSheet` para estilização nativa

## 📱 Compatibilidade
- ✅ Android
- ✅ iOS
- ✅ Expo Go (para testes rápidos)

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor
Desenvolvido como parte de atividades práticas de React Native.

---

Calcule seus valores de venda de forma rápida e precisa! 💰📊
