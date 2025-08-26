import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';

const DESTINOS = {
  praia: {
    icone: '🏖️',
    titulo: 'Praias',
    descricao: 'Relaxe nas melhores praias do Brasil',
    destinos: [
      {
        nome: 'Fernando de Noronha',
        icone: '🌴',
        rating: '⭐⭐⭐⭐⭐',
        descricao: 'Paraíso preservado com águas cristalinas',
        atividades: ['Mergulho', 'Passeio de barco', 'Praias paradisíacas']
      },
      {
        nome: 'Porto de Galinhas',
        icone: '🐚',
        rating: '⭐⭐⭐⭐⭐',
        descricao: 'Piscinas naturais incríveis',
        atividades: ['Piscinas naturais', 'Passeio de jangada', 'Snorkel']
      },
      {
        nome: 'Copacabana',
        icone: '🏙️',
        rating: '⭐⭐⭐⭐',
        descricao: 'A praia mais famosa do Rio',
        atividades: ['Calçadão', 'Praia', 'Vida noturna']
      },
    ],
  },
  montanha: {
    icone: '⛰️',
    titulo: 'Montanhas',
    descricao: 'Aventure-se nas serras brasileiras',
    destinos: [
      {
        nome: 'Gramado',
        icone: '🏔️',
        rating: '⭐⭐⭐⭐⭐',
        descricao: 'Charme europeu no sul do Brasil',
        atividades: ['Trilhas', 'Fondue', 'Lago Negro']
      },
      {
        nome: 'Campos do Jordão',
        icone: '🚡',
        rating: '⭐⭐⭐⭐',
        descricao: 'A Suíça brasileira',
        atividades: ['Teleférico', 'Parque Amantikir', 'Cervejarias']
      },
      {
        nome: 'Serra do Cipó',
        icone: '💧',
        rating: '⭐⭐⭐⭐',
        descricao: 'Cachoeiras e natureza exuberante',
        atividades: ['Cachoeiras', 'Caminhadas', 'Rapel']
      },
    ],
  },
  historica: {
    icone: '🏛️',
    titulo: 'Cidades Históricas',
    descricao: 'Descubra a história do Brasil',
    destinos: [
      {
        nome: 'Ouro Preto',
        icone: '⛪',
        rating: '⭐⭐⭐⭐⭐',
        descricao: 'Patrimônio histórico da humanidade',
        atividades: ['Igrejas barrocas', 'Museus', 'Passeios históricos']
      },
      {
        nome: 'Salvador',
        icone: '🎭',
        rating: '⭐⭐⭐⭐⭐',
        descricao: 'Capital da cultura afro-brasileira',
        atividades: ['Pelourinho', 'Elevador Lacerda', 'Culinária típica']
      },
      {
        nome: 'Paraty',
        icone: '⛵',
        rating: '⭐⭐⭐⭐',
        descricao: 'Charme colonial à beira-mar',
        atividades: ['Centro histórico', 'Passeio de barco', 'Cachaçarias']
      },
    ],
  },
};

const CORES = {
  fundo: '#044251',
  card: '#046673',
  botao: '#01848c',
  botaoAtivo: '#00a2a7',
  texto: '#c29574',
  destaque: '#a27c67',
};

import React, { useState } from 'react';

export default function App() {
  const [preferencia, setPreferencia] = useState(null);
  const [destinoSelecionado, setDestinoSelecionado] = useState(null);

  const handleEscolherDestino = (destino) => {
    setDestinoSelecionado(destino);
  };

  const handleVoltar = () => {
    if (destinoSelecionado) {
      setDestinoSelecionado(null);
    } else {
      setPreferencia(null);
    }
  };

  const renderTelaInicial = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Planeje sua Viagem</Text>
        <Text style={styles.subtitulo}>Descubra destinos incríveis no Brasil</Text>
      </View>

      <ScrollView style={styles.conteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Escolha seu tipo de destino</Text>
          <Text style={styles.descricaoCard}>Selecione o que mais combina com você</Text>

          <View style={styles.categoriasContainer}>
            {Object.keys(DESTINOS).map((key) => {
              const categoria = DESTINOS[key];
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.categoriaCard}
                  onPress={() => setPreferencia(key)}
                >
                  <Text style={styles.categoriaIcone}>{categoria.icone}</Text>
                  <Text style={styles.categoriaTitulo}>{categoria.titulo}</Text>
                  <Text style={styles.categoriaDescricao}>{categoria.descricao}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const renderListaDestinos = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>{DESTINOS[preferencia].titulo}</Text>
        <Text style={styles.subtitulo}>Destinos recomendados para você</Text>
      </View>

      <ScrollView style={styles.conteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Destinos Disponíveis</Text>
          <Text style={styles.descricaoCard}>Toque em um destino para ver mais detalhes</Text>
          
          {DESTINOS[preferencia].destinos.map((destino, index) => (
            <TouchableOpacity
              key={index}
              style={styles.destinoItem}
              onPress={() => handleEscolherDestino(destino)}
            >
              <View style={styles.destinoHeader}>
                <Text style={styles.destinoIcone}>{destino.icone}</Text>
                <View style={styles.destinoInfo}>
                  <Text style={styles.destinoNome}>{destino.nome}</Text>
                  <Text style={styles.destinoRating}>{destino.rating}</Text>
                </View>
              </View>
              <Text style={styles.destinoDescricao}>{destino.descricao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoVoltarFooter} onPress={handleVoltar}>
          <Text style={styles.voltarFooterTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  const renderDetalhesDestino = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>{destinoSelecionado.nome}</Text>
        <Text style={styles.subtitulo}>{destinoSelecionado.rating}</Text>
      </View>

      <ScrollView style={styles.conteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.destinoDetalheHeader}>
            <Text style={styles.destinoDetalheIcone}>{destinoSelecionado.icone}</Text>
            <Text style={styles.destinoDetalheTitulo}>{destinoSelecionado.nome}</Text>
            <Text style={styles.destinoDetalheDescricao}>{destinoSelecionado.descricao}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.tituloCard}>Atividades e Atrações</Text>
          <Text style={styles.descricaoCard}>O que você pode fazer neste destino</Text>
          
          {destinoSelecionado.atividades.map((atividade, index) => (
            <View key={index} style={styles.atividadeItem}>
              <Text style={styles.atividadeIcone}>🎯</Text>
              <Text style={styles.atividadeTexto}>{atividade}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoVoltarFooter} onPress={handleVoltar}>
          <Text style={styles.voltarFooterTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.containerPrincipal}>
      <StatusBar style="light" backgroundColor={CORES.fundo} />
      {!preferencia && renderTelaInicial()}
      {preferencia && !destinoSelecionado && renderListaDestinos()}
      {destinoSelecionado && renderDetalhesDestino()}
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  cabecalho: {
    backgroundColor: CORES.fundo,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CORES.texto,
    marginTop: 40,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: CORES.destaque,
    textAlign: 'center',
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
    color: CORES.fundo,
    marginBottom: 8,
  },
  descricaoCard: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  categoriasContainer: {
    gap: 15,
  },
  categoriaCard: {
    backgroundColor: CORES.card,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  categoriaIcone: {
    fontSize: 48,
    marginBottom: 12,
  },
  categoriaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  categoriaDescricao: {
    fontSize: 14,
    color: CORES.texto,
    textAlign: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
    marginBottom: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  botaoVoltarFooter: {
    backgroundColor: CORES.botao,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  voltarFooterTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  destinoItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: CORES.botao,
  },
  destinoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  destinoIcone: {
    fontSize: 32,
    marginRight: 15,
  },
  destinoInfo: {
    flex: 1,
  },
  destinoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.fundo,
    marginBottom: 4,
  },
  destinoRating: {
    fontSize: 14,
    color: CORES.botao,
  },
  destinoDescricao: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  destinoDetalheHeader: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  destinoDetalheIcone: {
    fontSize: 64,
    marginBottom: 15,
  },
  destinoDetalheTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CORES.fundo,
    marginBottom: 8,
    textAlign: 'center',
  },
  destinoDetalheDescricao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  atividadeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  atividadeIcone: {
    fontSize: 20,
    marginRight: 15,
  },
  atividadeTexto: {
    fontSize: 16,
    color: CORES.fundo,
    fontWeight: '500',
    flex: 1,
  },
});
