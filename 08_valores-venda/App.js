import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const cores = {
  primario: '#0b0136',
  medio: '#273071',
  claro: '#444fa1',
  destaque: '#5b97b1',
  branco: '#ffffff',
};

const PAGAMENTOS = [
  { id: '1', titulo: 'Dinheiro/Pix', descricao: 'À vista no dinheiro/Pix', desconto: 0.15 },
  { id: '2', titulo: 'Cartão Débito', descricao: 'Pagamento no débito', desconto: 0.10 },
  { id: '3', titulo: 'Crédito 1x', descricao: 'Cartão crédito à vista', desconto: 0.05 },
  { id: '4', titulo: 'Crédito 2x', descricao: 'Cartão crédito em 2x', desconto: 0.00 },
  { id: '5', titulo: 'Crédito 3x+', descricao: 'Cartão crédito em 3x ou mais', desconto: 0.00 },
];

export default function App() {
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [pagamentoId, setPagamentoId] = useState('1');
  const [erro, setErro] = useState('');
  const [resultado, setResultado] = useState(null);

  const pagamentoSelecionado = useMemo(
    () => PAGAMENTOS.find(p => p.id === pagamentoId) || PAGAMENTOS[0],
    [pagamentoId]
  );

  const parseNumero = (valor) => {
    if (typeof valor !== 'string') return NaN;
    // aceita vírgula ou ponto
    const normalizado = valor.replace(/\s/g, '').replace(',', '.');
    return parseFloat(normalizado);
  };

  const formatarMoeda = (n) => {
    try {
      return (n ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } catch {
      return `R$ ${Number(n ?? 0).toFixed(2).replace('.', ',')}`;
    }
  };

  const calcular = () => {
    setErro('');
    setResultado(null);

    const p = parseNumero(preco);
    const q = parseInt((quantidade || '').toString().replace(/\D/g, ''), 10);

    if (isNaN(p) || p <= 0) {
      setErro('Informe um preço válido.');
      return;
    }
    if (isNaN(q) || q <= 0) {
      setErro('Informe uma quantidade válida.');
      return;
    }

    const subtotal = p * q;
    const descontoPerc = pagamentoSelecionado.desconto;
    const valorDesconto = subtotal * descontoPerc;
    const total = subtotal - valorDesconto;

    setResultado({
      subtotal,
      descontoPerc,
      valorDesconto,
      total,
      pagamento: pagamentoSelecionado,
      quantidade: q,
      preco: p,
    });
  };

  const limpar = () => {
    setPreco('');
    setQuantidade('');
    setPagamentoId('1');
    setErro('');
    setResultado(null);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="light" backgroundColor={cores.primario} />

      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Calculadora de Vendas</Text>
        <Text style={estilos.subtitulo}>Calcule desconto por tipo de pagamento</Text>
      </View>

      <ScrollView style={estilos.conteudo} showsVerticalScrollIndicator={false}>
        <View style={estilos.card}>
          <Text style={estilos.tituloCard}>Dados da Compra</Text>

          <Text style={estilos.label}>Preço do produto (R$)</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 120,50"
            placeholderTextColor="#ccd3ff"
            value={preco}
            onChangeText={setPreco}
            keyboardType="decimal-pad"
          />

          <Text style={estilos.label}>Quantidade</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 2"
            placeholderTextColor="#ccd3ff"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />
        </View>

        <View style={estilos.card}>
          <Text style={estilos.tituloCard}>Tipo de Pagamento</Text>
          <Text style={estilos.descricao}>Selecione uma opção (exibe o código)</Text>
          <View style={estilos.pagamentosGrid}>
            {PAGAMENTOS.map((p) => (
              <TouchableOpacity
                key={p.id}
                style={[
                  estilos.pagamentoOpcao,
                  pagamentoId === p.id && estilos.pagamentoOpcaoAtivo,
                ]}
                onPress={() => setPagamentoId(p.id)}
              >
                <Text style={estilos.pagamentoCodigo}>#{p.id}</Text>
                <Text style={[
                  estilos.pagamentoTitulo,
                  pagamentoId === p.id && estilos.pagamentoTituloAtivo,
                ]}>
                  {p.titulo}
                </Text>
                <Text style={estilos.pagamentoDescricao}>{p.descricao}</Text>
                <Text style={estilos.pagamentoDesconto}>
                  Desconto: {Math.round(p.desconto * 100)}%
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {!!erro && (
            <View style={estilos.erroBox}>
              <Text style={estilos.erroTexto}>{erro}</Text>
            </View>
          )}

          <TouchableOpacity style={estilos.botao} onPress={calcular}>
            <Text style={estilos.textoBotao}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botaoSecundario} onPress={limpar}>
            <Text style={estilos.textoBotaoSecundario}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {resultado && (
          <View style={estilos.cardResultado}>
            <Text style={estilos.tituloCard}>Resultado</Text>

            <View style={estilos.linhaResultado}>
              <Text style={estilos.rotulo}>Tipo de pagamento:</Text>
              <Text style={estilos.valor}>{resultado.pagamento.titulo} (#{resultado.pagamento.id})</Text>
            </View>
            <View style={estilos.linhaResultado}>
              <Text style={estilos.rotulo}>Preço unitário:</Text>
              <Text style={estilos.valor}>{formatarMoeda(resultado.preco)}</Text>
            </View>
            <View style={estilos.linhaResultado}>
              <Text style={estilos.rotulo}>Quantidade:</Text>
              <Text style={estilos.valor}>{resultado.quantidade}</Text>
            </View>
            <View style={estilos.divisor} />
            <View style={estilos.linhaResultado}>
              <Text style={estilos.rotulo}>Valor da compra:</Text>
              <Text style={estilos.valor}>{formatarMoeda(resultado.subtotal)}</Text>
            </View>
            <View style={estilos.linhaResultado}>
              <Text style={estilos.rotulo}>Desconto ({Math.round(resultado.descontoPerc * 100)}%):</Text>
              <Text style={[estilos.valor, estilos.valorDesconto]}>- {formatarMoeda(resultado.valorDesconto)}</Text>
            </View>
            <View style={estilos.linhaResultadoTotal}>
              <Text style={estilos.rotuloTotal}>Valor final:</Text>
              <Text style={estilos.valorTotal}>{formatarMoeda(resultado.total)}</Text>
            </View>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fb',
  },
  cabecalho: {
    backgroundColor: cores.primario,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: cores.branco,
    marginTop: 36,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#c9cef8',
    textAlign: 'center',
  },
  conteudo: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: cores.medio,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 4,
  },
  cardResultado: {
    backgroundColor: cores.medio,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: cores.destaque,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.branco,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 12,
    color: '#dbe1ff',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#e6e8ff',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 2,
    borderColor: cores.claro,
    backgroundColor: '#ffffff10',
    color: cores.branco,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  pagamentosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  pagamentoOpcao: {
    backgroundColor: '#ffffff10',
    borderWidth: 2,
    borderColor: cores.claro,
    borderRadius: 12,
    padding: 12,
    width: '48%',
    marginBottom: 10,
  },
  pagamentoOpcaoAtivo: {
    backgroundColor: cores.claro,
    borderColor: cores.destaque,
  },
  pagamentoCodigo: {
    color: '#dbe1ff',
    fontSize: 12,
    marginBottom: 4,
  },
  pagamentoTitulo: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: '700',
  },
  pagamentoTituloAtivo: {
    color: '#fff',
  },
  pagamentoDescricao: {
    color: '#e6e8ff',
    fontSize: 12,
    marginTop: 2,
  },
  pagamentoDesconto: {
    marginTop: 8,
    color: '#c9cef8',
    fontSize: 12,
    fontWeight: '600',
  },
  erroBox: {
    backgroundColor: '#ffeff0',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ffb7bd',
  },
  erroTexto: {
    color: '#b20021',
    fontSize: 13,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: cores.destaque,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotao: {
    color: cores.primario,
    fontSize: 16,
    fontWeight: '800',
  },
  botaoSecundario: {
    borderWidth: 2,
    borderColor: cores.destaque,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoSecundario: {
    color: cores.destaque,
    fontSize: 16,
    fontWeight: '700',
  },
  linhaResultado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  linhaResultadoTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rotulo: {
    color: '#e6e8ff',
    fontSize: 14,
  },
  valor: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  valorDesconto: {
    color: '#e3ffef',
  },
  rotuloTotal: {
    color: '#e6e8ff',
    fontSize: 16,
    fontWeight: '800',
  },
  valorTotal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },
  divisor: {
    height: 1,
    backgroundColor: '#ffffff30',
    marginVertical: 8,
  },
});
