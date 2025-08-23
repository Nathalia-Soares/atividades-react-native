import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [corClassificacao, setCorClassificacao] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      Alert.alert('Erro', 'Por favor, preencha peso e altura');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos');
      return;
    }

    if (pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Peso e altura devem ser valores positivos');
      return;
    }

    if (pesoNum > 500) {
      Alert.alert('Erro', 'Peso muito alto. Verifique o valor inserido');
      return;
    }

    if (alturaNum > 3) {
      Alert.alert('Erro', 'Altura muito alta. Use metros (ex: 1.75)');
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(1));

    let classificacaoResultado = '';
    let cor = '';

    if (imcCalculado < 18.5) {
      classificacaoResultado = 'Abaixo do peso';
      cor = '#FF6B6B';
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      classificacaoResultado = 'Peso normal';
      cor = '#51CF66';
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      classificacaoResultado = 'Sobrepeso';
      cor = '#FFA726';
    } else {
      classificacaoResultado = 'Obesidade';
      cor = '#EF5350';
    }

    setClassificacao(classificacaoResultado);
    setCorClassificacao(cor);
  };

  const limparDados = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setClassificacao('');
    setCorClassificacao('');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="light" backgroundColor="#2C3E50" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Calculadora de IMC</Text>
          <Text style={styles.subtitle}>
            Índice de Massa Corporal
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              value={peso}
              onChangeText={setPeso}
              placeholder="Ex: 70.5"
              keyboardType="numeric"
              placeholderTextColor="#95A5A6"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Altura (m)</Text>
            <TextInput
              style={styles.input}
              value={altura}
              onChangeText={setAltura}
              placeholder="Ex: 1.75"
              keyboardType="numeric"
              placeholderTextColor="#95A5A6"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.calculateButton} onPress={calcularIMC}>
              <Text style={styles.calculateButtonText}>Calcular IMC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearButton} onPress={limparDados}>
              <Text style={styles.clearButtonText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {imc && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Seu Resultado</Text>
            
            <View style={styles.imcDisplay}>
              <Text style={styles.imcValue}>{imc}</Text>
              <Text style={styles.imcLabel}>IMC</Text>
            </View>

            <View style={[styles.classificationContainer, { backgroundColor: corClassificacao }]}>
              <Text style={styles.classificationText}>{classificacao}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Classificação IMC:</Text>
              <Text style={styles.infoText}>• Abaixo de 18.5: Abaixo do peso</Text>
              <Text style={styles.infoText}>• 18.5 - 24.9: Peso normal</Text>
              <Text style={styles.infoText}>• 25.0 - 29.9: Sobrepeso</Text>
              <Text style={styles.infoText}>• 30.0 ou mais: Obesidade</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#2C3E50',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#BDC3C7',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    color: '#2C3E50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  calculateButton: {
    flex: 1,
    backgroundColor: '#3498DB',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  imcDisplay: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imcValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  imcLabel: {
    fontSize: 18,
    color: '#7F8C8D',
    marginTop: 5,
  },
  classificationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  classificationText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '100%',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
  },
});
