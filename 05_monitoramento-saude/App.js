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
  const [nivelEnergia, setNivelEnergia] = useState('');
  const [qualidadeSono, setQualidadeSono] = useState('');
  const [nivelEstresse, setNivelEstresse] = useState('');
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [recomendacoes, setRecomendacoes] = useState([]);

  const cores = {
    primaria: '#499C70',
    secundaria: '#2A836B',
    terciaria: '#136B69',
    escura: '#024053',
  };

  const obterDicasEnergia = (nivel) => {
    if (nivel >= 8) {
      return [
        'Excelente! Mantenha esse alto nível de energia',
        'Aproveite para praticar exercícios intensos',
        'Considere ajudar outras pessoas com sua energia positiva'
      ];
    } else if (nivel >= 6) {
      return [
        'Bom nível de energia!',
        'Faça uma caminhada de 30 minutos',
        'Beba água regularmente para manter a hidratação'
      ];
    } else if (nivel >= 4) {
      return [
        'Energia moderada - precisa de um impulso',
        'Faça alongamentos leves',
        'Consuma uma fruta ou nozes para energia rápida',
        'Respire fundo algumas vezes'
      ];
    } else {
      return [
        'Energia baixa - priorize o descanso',
        'Tire uma soneca de 20 minutos',
        'Evite cafeína no final do dia',
        'Considere ir dormir mais cedo hoje'
      ];
    }
  };

  const obterDicasSono = (qualidade) => {
    if (qualidade >= 8) {
      return [
        'Qualidade de sono excelente!',
        'Mantenha essa rotina de sono',
        'Evite telas 1 hora antes de dormir'
      ];
    } else if (qualidade >= 6) {
      return [
        'Sono bom, mas pode melhorar',
        'Mantenha o quarto escuro e fresco',
        'Estabeleça uma rotina de sono consistente'
      ];
    } else if (qualidade >= 4) {
      return [
        'Qualidade de sono moderada',
        'Evite cafeína após 14h',
        'Pratique técnicas de relaxamento antes de dormir',
        'Considere usar ruído branco'
      ];
    } else {
      return [
        'Qualidade de sono baixa - precisa de atenção',
        'Consulte um médico se persistir',
        'Evite álcool antes de dormir',
        'Mantenha horários regulares de sono',
        'Considere terapia para ansiedade'
      ];
    }
  };

  const obterDicasEstresse = (nivel) => {
    if (nivel <= 2) {
      return [
        'Nível de estresse baixo - excelente!',
        'Mantenha suas práticas de relaxamento',
        'Continue com atividades que te fazem bem'
      ];
    } else if (nivel <= 4) {
      return [
        'Estresse moderado - gerenciável',
        'Pratique respiração profunda',
        'Faça pausas regulares durante o dia'
      ];
    } else if (nivel <= 6) {
      return [
        'Estresse elevado - precisa de atenção',
        'Pratique meditação por 10 minutos',
        'Faça exercícios físicos leves',
        'Converse com amigos ou familiares',
        'Considere técnicas de mindfulness'
      ];
    } else {
      return [
        'Estresse alto - priorize o autocuidado',
        'Considere buscar ajuda profissional',
        'Pratique exercícios de respiração',
        'Reduza compromissos desnecessários',
        'Priorize atividades que te relaxem'
      ];
    }
  };

  const gerarRecomendacoes = () => {
    const energia = parseInt(nivelEnergia) || 5;
    const sono = parseInt(qualidadeSono) || 5;
    const estresse = parseInt(nivelEstresse) || 5;

    const todasDicas = [
      ...obterDicasEnergia(energia),
      ...obterDicasSono(sono),
      ...obterDicasEstresse(estresse)
    ];

    setRecomendacoes(todasDicas);
    setMostrarResultados(true);
  };

  const redefinirFormulario = () => {
    setNivelEnergia('');
    setQualidadeSono('');
    setNivelEstresse('');
    setMostrarResultados(false);
    setRecomendacoes([]);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="light" backgroundColor={cores.escura} />
      
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Monitor de Saúde</Text>
        <Text style={estilos.subtitulo}>Acompanhe seu bem-estar diário</Text>
      </View>

      <ScrollView style={estilos.conteudo} showsVerticalScrollIndicator={false}>
        {!mostrarResultados ? (
          <View style={estilos.containerFormulario}>
            <View style={estilos.grupoInput}>
              <Text style={estilos.rotulo}>Nível de Energia (1-10)</Text>
              <TextInput
                style={estilos.input}
                value={nivelEnergia}
                onChangeText={setNivelEnergia}
                placeholder="Ex: 7"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              <Text style={estilos.dica}>Valores entre 1 e 10 (1 = Muito baixo, 10 = Muito alto)</Text>
            </View>

            <View style={estilos.grupoInput}>
              <Text style={estilos.rotulo}>Qualidade do Sono (1-10)</Text>
              <TextInput
                style={estilos.input}
                value={qualidadeSono}
                onChangeText={setQualidadeSono}
                placeholder="Ex: 6"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              <Text style={estilos.dica}>Valores entre 1 e 10 (1 = Muito ruim, 10 = Excelente)</Text>
            </View>

            <View style={estilos.grupoInput}>
              <Text style={estilos.rotulo}>Nível de Estresse (1-10)</Text>
              <TextInput
                style={estilos.input}
                value={nivelEstresse}
                onChangeText={setNivelEstresse}
                placeholder="Ex: 4"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              <Text style={estilos.dica}>Valores entre 1 e 10 (1 = Muito baixo, 10 = Muito alto)</Text>
            </View>

            <TouchableOpacity style={estilos.botao} onPress={gerarRecomendacoes}>
              <Text style={estilos.textoBotao}>Gerar Recomendações</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={estilos.containerResultados}>
            <View style={estilos.cardResumo}>
              <Text style={estilos.tituloResumo}>Resumo do Dia</Text>
              <View style={estilos.linhaResumo}>
                <Text style={estilos.rotuloResumo}>Energia:</Text>
                <Text style={estilos.valorResumo}>{nivelEnergia}/10</Text>
              </View>
              <View style={estilos.linhaResumo}>
                <Text style={estilos.rotuloResumo}>Sono:</Text>
                <Text style={estilos.valorResumo}>{qualidadeSono}/10</Text>
              </View>
              <View style={estilos.linhaResumo}>
                <Text style={estilos.rotuloResumo}>Estresse:</Text>
                <Text style={estilos.valorResumo}>{nivelEstresse}/10</Text>
              </View>
            </View>

            <View style={estilos.cardRecomendacoes}>
              <Text style={estilos.tituloRecomendacoes}>Recomendações Personalizadas</Text>
              {recomendacoes.map((dica, index) => (
                <View key={index} style={estilos.itemDica}>
                  <Text style={estilos.marcadorDica}>•</Text>
                  <Text style={estilos.textoDica}>{dica}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={estilos.botaoRedefinir} onPress={redefinirFormulario}>
              <Text style={estilos.textoBotaoRedefinir}>Nova Avaliação</Text>
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
    backgroundColor: '#024053',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  conteudo: {
    flex: 1,
    padding: 20,
  },
  containerFormulario: {
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
  grupoInput: {
    marginBottom: 20,
  },
  rotulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#024053',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#499C70',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  dica: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#499C70',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  containerResultados: {
    gap: 20,
  },
  cardResumo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloResumo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024053',
    marginBottom: 15,
    textAlign: 'center',
  },
  linhaResumo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rotuloResumo: {
    fontSize: 16,
    color: '#136B69',
    fontWeight: '500',
  },
  valorResumo: {
    fontSize: 16,
    color: '#499C70',
    fontWeight: 'bold',
  },
  cardRecomendacoes: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloRecomendacoes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024053',
    marginBottom: 15,
    textAlign: 'center',
  },
  itemDica: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 5,
  },
  marcadorDica: {
    fontSize: 18,
    color: '#499C70',
    marginRight: 10,
    marginTop: 2,
  },
  textoDica: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 22,
  },
  botaoRedefinir: {
    backgroundColor: '#2A836B',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 80,
  },
  textoBotaoRedefinir: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
