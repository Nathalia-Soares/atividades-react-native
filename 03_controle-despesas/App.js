import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [receitas, setReceitas] = useState('');
  const [despesas, setDespesas] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularEconomia = () => {
    const receitasNum = parseFloat(receitas);
    const despesasNum = parseFloat(despesas);

    if (isNaN(receitasNum) || isNaN(despesasNum)) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para receitas e despesas.');
      return;
    }

    if (receitasNum <= 0) {
      Alert.alert('Erro', 'As receitas devem ser maiores que zero.');
      return;
    }

    const economia = receitasNum - despesasNum;
    const porcentagemEconomia = (economia / receitasNum) * 100;

    let mensagem = '';
    let corMensagem = '';
    
    if (despesasNum > receitasNum) {
      mensagem = 'Atenção: Suas despesas são maiores que suas receitas. Considere revisar seus gastos.';
      corMensagem = 'deficit';
    } else if (porcentagemEconomia > 15) {
      mensagem = 'Invista seu dinheiro';
      corMensagem = 'excelente';
    } else if (porcentagemEconomia >= 10 && porcentagemEconomia <= 15) {
      mensagem = 'Vamos investir no próximo mês';
      corMensagem = 'bom';
    } else {
      mensagem = 'Vamos continuar tentando';
      corMensagem = 'regular';
    }

    setResultado({
      economia: economia.toFixed(2),
      porcentagem: porcentagemEconomia.toFixed(1),
      mensagem: mensagem,
      corMensagem: corMensagem
    });
  };

  const limparDados = () => {
    setReceitas('');
    setDespesas('');
    setResultado(null);
  };

  const getMensagemStyle = (tipo) => {
    switch (tipo) {
      case 'deficit':
        return styles.containerMensagemDeficit;
      case 'excelente':
        return styles.containerMensagemExcelente;
      case 'bom':
        return styles.containerMensagemBom;
      case 'regular':
        return styles.containerMensagemRegular;
      default:
        return styles.containerMensagem;
    }
  };

  const getTextoMensagemStyle = (tipo) => {
    switch (tipo) {
      case 'deficit':
        return styles.textoMensagemDeficit;
      case 'excelente':
        return styles.textoMensagemExcelente;
      case 'bom':
        return styles.textoMensagemBom;
      case 'regular':
        return styles.textoMensagemRegular;
      default:
        return styles.textoMensagem;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Controle de Despesas</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Receitas do Mês (R$)</Text>
          <TextInput
            style={styles.input}
            value={receitas}
            onChangeText={setReceitas}
            placeholder="Digite suas receitas"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Despesas do Mês (R$)</Text>
          <TextInput
            style={styles.input}
            value={despesas}
            onChangeText={setDespesas}
            placeholder="Digite suas despesas"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.botao} onPress={calcularEconomia}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limparDados}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {resultado && (
          <View style={styles.containerResultado}>
            <Text style={styles.tituloResultado}>Resultado do Mês</Text>
            
            <View style={styles.itemResultado}>
              <Text style={styles.labelResultado}>
                {parseFloat(resultado.economia) >= 0 ? 'Economia:' : 'Déficit:'}
              </Text>
              <Text style={[
                styles.valorResultado,
                parseFloat(resultado.economia) < 0 && { color: '#e74c3c' }
              ]}>
                R$ {resultado.economia}
              </Text>
            </View>
            
            <View style={styles.itemResultado}>
              <Text style={styles.labelResultado}>
                {parseFloat(resultado.porcentagem) >= 0 ? 'Porcentagem Economizada:' : 'Porcentagem de Déficit:'}
              </Text>
              <Text style={[
                styles.valorResultado,
                parseFloat(resultado.porcentagem) < 0 && { color: '#e74c3c' }
              ]}>
                {resultado.porcentagem}%
              </Text>
            </View>
            
            <View style={getMensagemStyle(resultado.corMensagem)}>
              <Text style={getTextoMensagemStyle(resultado.corMensagem)}>{resultado.mensagem}</Text>
            </View>
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8679a6',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#e8f4fd',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#5d4e75',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#2c3e50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#4510c2',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  botaoLimpar: {
    backgroundColor: '#6c5ce7',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  containerResultado: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#5d4e75',
  },
  tituloResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5d4e75',
  },
  itemResultado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8f4fd',
  },
  labelResultado: {
    fontSize: 16,
    color: '#5d4e75',
    fontWeight: '500',
  },
  valorResultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00b894',
  },
  containerMensagem: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#4a90e2',
  },
  containerMensagemDeficit: {
    backgroundColor: '#ffe8e8',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  containerMensagemExcelente: {
    backgroundColor: '#e8f5e8',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#00b894',
  },
  containerMensagemBom: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#4a90e2',
  },
  containerMensagemRegular: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  textoMensagem: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a90e2',
    textAlign: 'center',
  },
  textoMensagemDeficit: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e74c3c',
    textAlign: 'center',
  },
  textoMensagemExcelente: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00b894',
    textAlign: 'center',
  },
  textoMensagemBom: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a90e2',
    textAlign: 'center',
  },
  textoMensagemRegular: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffc107',
    textAlign: 'center',
  },
});
