import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(null);
  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [melhorPontuacao, setMelhorPontuacao] = useState(null);

  // Gerar número aleatório entre 1 e 100
  const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  // Iniciar novo jogo
  const iniciarJogo = () => {
    const novoNumero = gerarNumeroAleatorio();
    setNumeroSecreto(novoNumero);
    setPalpite('');
    setTentativas(0);
    setMensagem('Tente adivinhar o número entre 1 e 100!');
    setJogoIniciado(true);
  };

  // Verificar palpite
  const verificarPalpite = () => {
    const palpiteNum = parseInt(palpite);

    if (isNaN(palpiteNum) || palpiteNum < 1 || palpiteNum > 100) {
      Alert.alert('Erro', 'Por favor, insira um número válido entre 1 e 100.');
      return;
    }

    const novaTentativa = tentativas + 1;
    setTentativas(novaTentativa);

    if (palpiteNum === numeroSecreto) {
      // Jogador acertou!
      let mensagemVitoria = `🎉 Parabéns! Você acertou em ${novaTentativa} tentativa${novaTentativa > 1 ? 's' : ''}!`;
      
      // Verificar se é uma nova melhor pontuação
      if (!melhorPontuacao || novaTentativa < melhorPontuacao) {
        setMelhorPontuacao(novaTentativa);
        mensagemVitoria += '\n🏆 Nova melhor pontuação!';
      }

      setMensagem(mensagemVitoria);
      setJogoIniciado(false);
      
      Alert.alert(
        '🎉 Parabéns!',
        `Você acertou o número ${numeroSecreto} em ${novaTentativa} tentativa${novaTentativa > 1 ? 's' : ''}!`,
        [
          {
            text: 'Jogar Novamente',
            onPress: iniciarJogo
          }
        ]
      );
    } else {
      // Fornecer dica
      if (palpiteNum < numeroSecreto) {
        setMensagem(`📈 O número é maior que ${palpiteNum}. Tente novamente!`);
      } else {
        setMensagem(`📉 O número é menor que ${palpiteNum}. Tente novamente!`);
      }
      setPalpite('');
    }
  };

  // Reiniciar jogo
  const reiniciarJogo = () => {
    setJogoIniciado(false);
    setPalpite('');
    setTentativas(0);
    setMensagem('');
    setNumeroSecreto(null);
  };

  // Inicializar o jogo quando o componente for montado
  useEffect(() => {
    if (!jogoIniciado && !numeroSecreto) {
      setMensagem('Clique em "Iniciar Jogo" para começar!');
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🎯 Jogo da Adivinhação</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Tente adivinhar o número secreto entre 1 e 100!
          </Text>
        </View>

        {!jogoIniciado ? (
          <View style={styles.inicioContainer}>
            <TouchableOpacity style={styles.botaoIniciar} onPress={iniciarJogo}>
              <Text style={styles.textoBotao}>🎮 Iniciar Jogo</Text>
            </TouchableOpacity>
            
            {melhorPontuacao && (
              <View style={styles.pontuacaoContainer}>
                <Text style={styles.pontuacaoText}>
                  🏆 Melhor pontuação: {melhorPontuacao} tentativa{melhorPontuacao > 1 ? 's' : ''}
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.jogoContainer}>
            <View style={styles.tentativasContainer}>
              <Text style={styles.tentativasText}>
                Tentativas: {tentativas}
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Seu palpite:</Text>
              <TextInput
                style={styles.input}
                value={palpite}
                onChangeText={setPalpite}
                placeholder="Digite um número entre 1 e 100"
                keyboardType="numeric"
                placeholderTextColor="#0d3840"
                maxLength={3}
              />
            </View>

            <View style={styles.botoesContainer}>
              <TouchableOpacity style={styles.botaoVerificar} onPress={verificarPalpite}>
                <Text style={styles.textoBotao}>🔍 Verificar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarJogo}>
                <Text style={styles.textoBotao}>🔄 Reiniciar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.mensagemContainer}>
              <Text style={styles.mensagemText}>{mensagem}</Text>
            </View>
          </View>
        )}

        {jogoIniciado && (
          <View style={styles.dicasContainer}>
            <Text style={styles.dicasTitle}>💡 Dicas:</Text>
            <Text style={styles.dicasText}>
              • O número está entre 1 e 100{'\n'}
              • Use as dicas para se aproximar{'\n'}
              • Quanto menos tentativas, melhor!
            </Text>
          </View>
        )}
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01191e',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  infoContainer: {
    backgroundColor: '#03282f',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#0d3840',
  },
  infoText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
  },
  inicioContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  botaoIniciar: {
    backgroundColor: '#0d3840',
    padding: 18,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  pontuacaoContainer: {
    marginTop: 20,
    backgroundColor: '#02272e',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0d3840',
  },
  pontuacaoText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
  jogoContainer: {
    backgroundColor: '#03282f',
    padding: 25,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#0d3840',
  },
  tentativasContainer: {
    backgroundColor: '#001a1f',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  tentativasText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#0d3840',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    color: '#001116',
    textAlign: 'center',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  botaoVerificar: {
    backgroundColor: '#0d3840',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  botaoReiniciar: {
    backgroundColor: '#001a1f',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  mensagemContainer: {
    backgroundColor: '#001116',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ffffff',
  },
  mensagemText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 22,
  },
  dicasContainer: {
    backgroundColor: '#02272e',
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#0d3840',
  },
  dicasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  dicasText: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
    textAlign: 'center',
  },
});
