import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [atividades, setAtividades] = useState([]);
  const [novaAtividade, setNovaAtividade] = useState('');
  const [duracao, setDuracao] = useState('');
  const [tipoExercicio, setTipoExercicio] = useState('cardio');
  const [metaSemanal, setMetaSemanal] = useState('150');
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  const cores = {
    azulEscuro: '#010F42',
    azulMedio: '#0F4D91',
    azulClaro: '#000082',
    dourado: '#D4AF37',
    branco: '#E2EBE3',
  };

  const tiposExercicio = [
    { id: 'cardio', nome: 'Cardio', icone: '🏃‍♂️' },
    { id: 'forca', nome: 'Força', icone: '💪' },
    { id: 'flexibilidade', nome: 'Flexibilidade', icone: '🧘‍♀️' },
    { id: 'esporte', nome: 'Esporte', icone: '⚽' },
  ];

  const adicionarAtividade = () => {
    if (novaAtividade && duracao) {
      const atividade = {
        id: Date.now(),
        nome: novaAtividade,
        duracao: parseInt(duracao),
        tipo: tipoExercicio,
        data: new Date().toLocaleDateString('pt-BR'),
      };
      setAtividades([...atividades, atividade]);
      setNovaAtividade('');
      setDuracao('');
    }
  };

  const removerAtividade = (id) => {
    setAtividades(atividades.filter(atividade => atividade.id !== id));
  };

  const calcularProgresso = () => {
    const totalMinutos = atividades.reduce((total, atividade) => total + atividade.duracao, 0);
    const meta = parseInt(metaSemanal) || 150;
    const progresso = Math.min((totalMinutos / meta) * 100, 100);
    return { totalMinutos, meta, progresso };
  };

  const obterFeedback = () => {
    const { totalMinutos, meta, progresso } = calcularProgresso();
    
    if (progresso >= 100) {
      return {
        titulo: '🎉 Meta Atingida!',
        mensagem: 'Parabéns! Você atingiu sua meta semanal de exercícios.',
        cor: '#4CAF50',
        sugestoes: [
          'Mantenha o ritmo! Continue com sua rotina atual',
          'Considere aumentar sua meta para o próximo desafio',
          'Comemore sua conquista com uma atividade relaxante'
        ]
      };
    } else if (progresso >= 75) {
      return {
        titulo: '🔥 Quase Lá!',
        mensagem: `Você está a ${Math.round(meta - totalMinutos)} minutos de atingir sua meta!`,
        cor: '#FF9800',
        sugestoes: [
          'Uma caminhada de 30 minutos pode completar sua meta',
          'Tente uma sessão de yoga ou alongamento',
          'Considere uma atividade que você goste para manter a motivação'
        ]
      };
    } else if (progresso >= 50) {
      return {
        titulo: '💪 Bom Progresso!',
        mensagem: `Você completou ${Math.round(progresso)}% da sua meta semanal.`,
        cor: '#2196F3',
        sugestoes: [
          'Adicione mais 20-30 minutos de exercício hoje',
          'Experimente um novo tipo de atividade física',
          'Estabeleça pequenas metas diárias para manter o foco'
        ]
      };
    } else {
      return {
        titulo: '🚀 Vamos Começar!',
        mensagem: `Você completou ${Math.round(progresso)}% da sua meta. Ainda há tempo!`,
        cor: '#F44336',
        sugestoes: [
          'Comece com uma caminhada de 15 minutos',
          'Faça alongamentos básicos em casa',
          'Estabeleça uma rotina diária de exercícios',
          'Encontre um parceiro de treino para motivação'
        ]
      };
    }
  };

  const obterSugestoesExercicios = () => {
    const { progresso } = calcularProgresso();
    
    if (progresso < 30) {
      return [
        { nome: 'Caminhada Leve', duracao: 20, tipo: 'cardio', descricao: 'Perfeita para iniciantes' },
        { nome: 'Alongamentos Básicos', duracao: 15, tipo: 'flexibilidade', descricao: 'Melhora a flexibilidade' },
        { nome: 'Flexões de Parede', duracao: 10, tipo: 'forca', descricao: 'Fortalece braços e peito' }
      ];
    } else if (progresso < 70) {
      return [
        { nome: 'Corrida Leve', duracao: 30, tipo: 'cardio', descricao: 'Aumenta resistência cardiovascular' },
        { nome: 'Agachamentos', duracao: 15, tipo: 'forca', descricao: 'Fortalece pernas e glúteos' },
        { nome: 'Yoga Básico', duracao: 25, tipo: 'flexibilidade', descricao: 'Equilibra corpo e mente' }
      ];
    } else {
      return [
        { nome: 'Treino HIIT', duracao: 45, tipo: 'cardio', descricao: 'Queima calorias intensamente' },
        { nome: 'Musculação', duracao: 60, tipo: 'forca', descricao: 'Desenvolve força e massa muscular' },
        { nome: 'Pilates', duracao: 40, tipo: 'flexibilidade', descricao: 'Melhora postura e core' }
      ];
    }
  };

  const limparAtividades = () => {
    setAtividades([]);
    setMostrarFeedback(false);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="light" backgroundColor={cores.azulEscuro} />
      
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Rastreador de Exercícios</Text>
        <Text style={estilos.subtitulo}>Monitore suas atividades físicas</Text>
      </View>

      <ScrollView style={estilos.conteudo} showsVerticalScrollIndicator={false}>
        {/* Seção de Adicionar Atividade */}
        <View style={estilos.card}>
          <Text style={estilos.tituloCard}>Adicionar Atividade</Text>
          
          <TextInput
            style={estilos.input}
            value={novaAtividade}
            onChangeText={setNovaAtividade}
            placeholder="Nome da atividade (ex: Corrida)"
            placeholderTextColor="#999"
          />
          
          <TextInput
            style={estilos.input}
            value={duracao}
            onChangeText={setDuracao}
            placeholder="Duração em minutos"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />

          <Text style={estilos.label}>Tipo de Exercício:</Text>
          <View style={estilos.tiposContainer}>
            {tiposExercicio.map((tipo) => (
              <TouchableOpacity
                key={tipo.id}
                style={[
                  estilos.tipoBotao,
                  tipoExercicio === tipo.id && estilos.tipoBotaoAtivo
                ]}
                onPress={() => setTipoExercicio(tipo.id)}
              >
                <Text style={estilos.tipoIcone}>{tipo.icone}</Text>
                <Text style={[
                  estilos.tipoTexto,
                  tipoExercicio === tipo.id && estilos.tipoTextoAtivo
                ]}>
                  {tipo.nome}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={estilos.botaoAdicionar} onPress={adicionarAtividade}>
            <Text style={estilos.textoBotao}>Adicionar Atividade</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Progresso */}
        <View style={estilos.card}>
          <Text style={estilos.tituloCard}>Progresso Semanal</Text>
          
          <View style={estilos.metaContainer}>
            <Text style={estilos.label}>Meta Semanal (minutos):</Text>
            <TextInput
              style={estilos.inputMeta}
              value={metaSemanal}
              onChangeText={setMetaSemanal}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>

          <View style={estilos.progressoContainer}>
            <View style={estilos.barraProgresso}>
              <View 
                style={[
                  estilos.progressoPreenchido, 
                  { width: `${calcularProgresso().progresso}%` }
                ]} 
              />
            </View>
            <Text style={estilos.textoProgresso}>
              {calcularProgresso().totalMinutos} / {calcularProgresso().meta} minutos
            </Text>
          </View>

          <TouchableOpacity 
            style={estilos.botaoFeedback} 
            onPress={() => setMostrarFeedback(!mostrarFeedback)}
          >
            <Text style={estilos.textoBotao}>Ver Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Feedback */}
        {mostrarFeedback && (
          <View style={estilos.card}>
            <View style={[estilos.feedbackHeader, { backgroundColor: obterFeedback().cor }]}>
              <Text style={estilos.feedbackTitulo}>{obterFeedback().titulo}</Text>
              <Text style={estilos.feedbackMensagem}>{obterFeedback().mensagem}</Text>
            </View>
            
            <Text style={estilos.tituloSugestoes}>Sugestões:</Text>
            {obterFeedback().sugestoes.map((sugestao, index) => (
              <View key={index} style={estilos.sugestaoItem}>
                <Text style={estilos.sugestaoBullet}>•</Text>
                <Text style={estilos.sugestaoTexto}>{sugestao}</Text>
              </View>
            ))}

            <Text style={estilos.tituloSugestoes}>Exercícios Recomendados:</Text>
            {obterSugestoesExercicios().map((exercicio, index) => (
              <View key={index} style={estilos.exercicioItem}>
                <View style={estilos.exercicioHeader}>
                  <Text style={estilos.exercicioNome}>{exercicio.nome}</Text>
                  <Text style={estilos.exercicioDuracao}>{exercicio.duracao} min</Text>
                </View>
                <Text style={estilos.exercicioDescricao}>{exercicio.descricao}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Lista de Atividades */}
        {atividades.length > 0 && (
          <View style={estilos.card}>
            <Text style={estilos.tituloCard}>Atividades Realizadas</Text>
            {atividades.map((atividade) => (
              <View key={atividade.id} style={estilos.atividadeItem}>
                <View style={estilos.atividadeInfo}>
                  <Text style={estilos.atividadeNome}>{atividade.nome}</Text>
                  <Text style={estilos.atividadeDetalhes}>
                    {atividade.duracao} min • {atividade.data}
                  </Text>
                </View>
                <TouchableOpacity 
                  style={estilos.botaoRemover}
                  onPress={() => removerAtividade(atividade.id)}
                >
                  <Text style={estilos.textoRemover}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
            
            <TouchableOpacity style={estilos.botaoLimpar} onPress={limparAtividades}>
              <Text style={estilos.textoBotao}>Limpar Todas</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cabecalho: {
    backgroundColor: '#010F42',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E2EBE3',
    marginTop: 40,
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#D4AF37',
  },
  conteudo: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#010F42',
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: '#0F4D91',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010F42',
    marginBottom: 10,
  },
  tiposContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tipoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0F4D91',
    backgroundColor: '#f9f9f9',
    minWidth: '48%',
    marginBottom: 10,
  },
  tipoBotaoAtivo: {
    backgroundColor: '#0F4D91',
    borderColor: '#000082',
  },
  tipoIcone: {
    fontSize: 20,
    marginRight: 8,
  },
  tipoTexto: {
    fontSize: 14,
    fontWeight: '600',
    color: '#010F42',
  },
  tipoTextoAtivo: {
    color: '#E2EBE3',
  },
  botaoAdicionar: {
    backgroundColor: '#0F4D91',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#E2EBE3',
    fontSize: 18,
    fontWeight: '600',
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputMeta: {
    borderWidth: 2,
    borderColor: '#0F4D91',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    width: 100,
    marginLeft: 10,
  },
  progressoContainer: {
    marginBottom: 20,
  },
  barraProgresso: {
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressoPreenchido: {
    height: '100%',
    backgroundColor: '#D4AF37',
    borderRadius: 10,
  },
  textoProgresso: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010F42',
    textAlign: 'center',
  },
  botaoFeedback: {
    backgroundColor: '#000082',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 40,
  },
  feedbackHeader: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  feedbackTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E2EBE3',
    marginBottom: 10,
    textAlign: 'center',
  },
  feedbackMensagem: {
    fontSize: 16,
    color: '#E2EBE3',
    textAlign: 'center',
  },
  tituloSugestoes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#010F42',
    marginBottom: 15,
    marginTop: 20,
  },
  sugestaoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  sugestaoBullet: {
    fontSize: 18,
    color: '#D4AF37',
    marginRight: 10,
    marginTop: 2,
  },
  sugestaoTexto: {
    fontSize: 16,
    color: '#010F42',
    flex: 1,
    lineHeight: 22,
  },
  exercicioItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  exercicioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  exercicioNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#010F42',
  },
  exercicioDuracao: {
    fontSize: 14,
    color: '#0F4D91',
    fontWeight: '600',
  },
  exercicioDescricao: {
    fontSize: 14,
    color: '#666',
  },
  atividadeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  atividadeInfo: {
    flex: 1,
  },
  atividadeNome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010F42',
    marginBottom: 5,
  },
  atividadeDetalhes: {
    fontSize: 14,
    color: '#666',
  },
  botaoRemover: {
    backgroundColor: '#ff6b6b',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoRemover: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: '#ff6b6b',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
});
