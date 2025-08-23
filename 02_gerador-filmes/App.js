import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

// Base de dados de filmes organizados por gênero
const filmesPorGenero = {
  acao: [
    {
      titulo: 'Mad Max: Estrada da Fúria',
      ano: 2015,
      diretor: 'George Miller',
      descricao: 'Em um mundo pós-apocalíptico, Max se junta a um grupo de mulheres que fogem de um tirano.',
      imagem: 'https://media.fstatic.com/sIX_WTjvnUI8DMigUrY5Bz4dyys=/210x312/smart/filters:format(webp)/media/movies/covers/2015/04/mad-max-estrada-da-furia_t48252_vWQmCeL.jpg',
      avaliacao: 8.1
    },
    {
      titulo: 'John Wick',
      ano: 2014,
      diretor: 'Chad Stahelski',
      descricao: 'Um assassino aposentado busca vingança após a morte de seu cachorro.',
      imagem: 'https://media.fstatic.com/b5SBe_6din_sIgNTHD97j4n1L28=/322x478/smart/filters:format(webp)/media/movies/covers/2014/10/john-wick_t78749.jpg',
      avaliacao: 7.4
    },
    {
      titulo: 'Duro de Matar',
      ano: 1988,
      diretor: 'John McTiernan',
      descricao: 'Um policial tenta salvar reféns em um prédio tomado por terroristas.',
      imagem: 'https://media.fstatic.com/sAI3vQzaStgQqPTutsZ9tb89FW0=/322x478/smart/filters:format(webp)/media/movies/covers/2010/06/553d2f2a5eac810e76324283301b9513.jpg',
      avaliacao: 8.2
    },
    {
      titulo: 'Matrix',
      ano: 1999,
      diretor: 'Lana e Lilly Wachowski',
      descricao: 'Um hacker descobre que a realidade é uma simulação computadorizada.',
      imagem: 'https://media.fstatic.com/CAjdb3BmPmJbsiUUt48xZ1NL2Fw=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/bd3cef6e681142d110baaa646641b899.jpg',
      avaliacao: 8.7
    },
    {
      titulo: 'Missão Impossível',
      ano: 1996,
      diretor: 'Brian De Palma',
      descricao: 'Um agente secreto é acusado de traição e deve provar sua inocência.',
      imagem: 'https://media.fstatic.com/V0p3tBXo-7a0wfC44c5q83JG8b4=/210x312/smart/filters:format(webp)/media/movies/covers/2012/01/2ee81ae1d6297e829168601b46076e47.jpg',
      avaliacao: 7.1
    }
  ],
  comedia: [
    {
      titulo: 'Superbad',
      ano: 2007,
      diretor: 'Greg Mottola',
      descricao: 'Dois amigos tentam comprar álcool para uma festa antes do ensino médio acabar.',
      imagem: 'https://media.fstatic.com/zZltT3OyQ_DoZ946pXyPlrFYiVk=/322x478/smart/filters:format(webp)/media/movies/covers/2010/03/66033833a7c230781047de0949140383.jpg',
      avaliacao: 7.6
    },
    {
      titulo: 'Missão Madrinha de Casamento',
      ano: 2011,
      diretor: 'Paul Feig',
      descricao: 'Uma mulher compete com a nova amiga da noiva para ser a dama de honra.',
      imagem: 'https://media.fstatic.com/gH03mJOt0fAfIRe1_Orl3L0ymnQ=/210x312/smart/filters:format(webp)/media/movies/covers/2017/03/Missao_Madrinha_de_Casamento.jpg',
      avaliacao: 6.8
    },
    {
      titulo: 'Se Beber, Não Case!',
      ano: 2009,
      diretor: 'Todd Phillips',
      descricao: 'Três amigos acordam após uma noite de festa sem lembrar de nada.',
      imagem: 'https://media.fstatic.com/FEUTGGbJ6JlfFwtSVkKHePv6VfY=/322x478/smart/filters:format(webp)/media/movies/covers/2009/07/sebebernaocase.jpg',
      avaliacao: 7.7
    },
    {
      titulo: 'Todo Mundo Quase Morto',
      ano: 2004,
      diretor: 'Edgar Wright',
      descricao: 'Um homem tenta salvar sua mãe e namorada durante um apocalipse zumbi.',
      imagem: 'https://media.fstatic.com/mDPbNGcCwI51UEeOBoIoSnpa8i8=/210x312/smart/filters:format(webp)/media/movies/covers/2009/12/2iqloie.jpg',
      avaliacao: 7.9
    },
    {
      titulo: 'Feitiço do Tempo',
      ano: 1993,
      diretor: 'Harold Ramis',
      descricao: 'Um meteorologista fica preso em um loop temporal no Dia da Marmota.',
      imagem: 'https://media.fstatic.com/GjFj6X8Vu5fOnBa7vq6EeQU0G-Q=/322x478/smart/filters:format(webp)/media/movies/covers/2018/04/DVD_uOqBWEy.JPG',
      avaliacao: 8.0
    }
  ],
  drama: [
    {
      titulo: 'Forrest Gump',
      ano: 1994,
      diretor: 'Robert Zemeckis',
      descricao: 'A vida de um homem simples que testemunha eventos históricos importantes.',
      imagem: 'https://media.fstatic.com/peF5gmTfir_DWffUzX-nQ4LoZoI=/322x478/smart/filters:format(webp)/media/movies/covers/2012/08/37c12d5ed409f8f9966234e3659f8785.jpg',
      avaliacao: 8.8
    },
    {
      titulo: 'O Poderoso Chefão',
      ano: 1972,
      diretor: 'Francis Ford Coppola',
      descricao: 'A história da família Corleone e sua ascensão no mundo do crime organizado.',
      imagem: 'https://media.fstatic.com/VDcLCF_4gQqFduQMCwKC8KgXHUw=/210x312/smart/filters:format(webp)/media/movies/covers/2011/08/f623d26a6107a9cdbb2d805ed45675a6.jpg',
      avaliacao: 9.2
    },
    {
      titulo: 'Pulp Fiction',
      ano: 1994,
      diretor: 'Quentin Tarantino',
      descricao: 'Várias histórias entrelaçadas no submundo do crime de Los Angeles.',
      imagem: 'https://media.fstatic.com/Kk4NgGRp7Edk0qhuzS1LzgVKQ9w=/210x312/smart/filters:format(webp)/media/movies/covers/2011/08/cc1cac6d34dcc8b321b0f352c550262c.jpg',
      avaliacao: 8.9
    },
    {
      titulo: 'Titanic',
      ano: 1997,
      diretor: 'James Cameron',
      descricao: 'Um romance entre passageiros de diferentes classes sociais no navio Titanic.',
      imagem: 'https://media.fstatic.com/nwGmhSUNTlM6VnQMtUjYmLRhL2o=/195x289/smart/filters:format(webp)/media/movies/covers/2011/06/da9393500913f67e2209cbd3bfaa1700.jpg',
      avaliacao: 7.9
    },
    {
      titulo: 'O Silêncio dos Inocentes',
      ano: 1991,
      diretor: 'Jonathan Demme',
      descricao: 'Uma agente do FBI busca a ajuda de um serial killer para capturar outro.',
      imagem: 'https://cdn.fstatic.com/media/movies/covers/2016/03/o-silencio-dos-inocentes_t7031.jpg',
      avaliacao: 8.6
    }
  ],
  ficcao: [
    {
      titulo: 'Interestelar',
      ano: 2014,
      diretor: 'Christopher Nolan',
      descricao: 'Uma equipe de astronautas viaja através de um buraco de minhoca para salvar a humanidade.',
      imagem: 'https://media.fstatic.com/JlV6ee2aKH6hJn9OhDPPR8WtGBc=/322x478/smart/filters:format(webp)/media/movies/covers/2014/09/interestelar_t27814_1.jpg',
      avaliacao: 8.6
    },
    {
      titulo: 'Blade Runner',
      ano: 1982,
      diretor: 'Ridley Scott',
      descricao: 'Um caçador de replicantes em um futuro distópico de Los Angeles.',
      imagem: 'https://media.fstatic.com/ENoclsw-dv0X7eGLOuhmYIvPsnE=/195x289/smart/filters:format(webp)/media/movies/covers/2010/08/ee17059e510afd71b5dce35d8c908329.jpg',
      avaliacao: 8.1
    },
    {
      titulo: 'Ex Machina',
      ano: 2014,
      diretor: 'Alex Garland',
      descricao: 'Um programador é convidado para testar a inteligência artificial de um robô.',
      imagem: 'https://media.fstatic.com/L0DqsZcVa9NKfyp5x8gF3UYa_4A=/195x289/smart/filters:format(webp)/media/movies/covers/2015/05/ex-machina_t85637.jpg',
      avaliacao: 7.7
    },
    {
      titulo: 'Arrival - A Chegada',
      ano: 2016,
      diretor: 'Denis Villeneuve',
      descricao: 'Uma linguista tenta se comunicar com alienígenas que chegaram à Terra.',
      imagem: 'https://media.fstatic.com/CVfmKG-6c8n1x22cJSeEmN3z2rg=/210x312/smart/filters:format(webp)/media/movies/covers/2016/11/14480768_10154612198142425_5504361846139053173_o.jpg',
      avaliacao: 7.9
    },
    {
      titulo: 'Her',
      ano: 2013,
      diretor: 'Spike Jonze',
      descricao: 'Um homem solitário desenvolve um relacionamento com um sistema operacional.',
      imagem: 'https://media.fstatic.com/JtRclqoNHICx9z0BHgEYpooHsaM=/322x478/smart/filters:format(webp)/media/movies/covers/2014/06/ela_t52084_1.jpg',
      avaliacao: 8.0
    }
  ],
  terror: [
    {
      titulo: 'O Exorcista',
      ano: 1973,
      diretor: 'William Friedkin',
      descricao: 'Uma mãe busca ajuda para sua filha que está possuída por um demônio.',
      imagem: 'https://media.fstatic.com/vdxOhDxoyk4CXKqkj40Qs2ZQyBU=/322x478/smart/filters:format(webp)/media/movies/covers/2012/02/ca6d35f8f7dc0f7b93838f173bde3d69.jpg',
      avaliacao: 8.0
    },
    {
      titulo: 'O Iluminado',
      ano: 1980,
      diretor: 'Stanley Kubrick',
      descricao: 'Um escritor e sua família ficam isolados em um hotel durante o inverno.',
      imagem: 'https://media.fstatic.com/8rODntQUhPFiEa6EuStgPIjVks0=/195x289/smart/filters:format(webp)/media/movies/covers/2010/12/5ecbe41ded5098d2dc80abdf835dfba0.jpg',
      avaliacao: 8.4
    },
    {
      titulo: 'Halloween',
      ano: 1978,
      diretor: 'John Carpenter',
      descricao: 'Um assassino em série retorna à sua cidade natal no Halloween.',
      imagem: 'https://media.fstatic.com/Kg5026v4nt4WUb12wGDW54kQqjg=/210x312/smart/filters:format(webp)/media/movies/covers/2011/05/1e05db5bca08d598ee6c38b7c2b8d144.jpg',
      avaliacao: 7.7
    },
    {
      titulo: 'Psicose',
      ano: 1960,
      diretor: 'Alfred Hitchcock',
      descricao: 'Uma secretária foge com dinheiro roubado e se hospeda em um motel isolado.',
      imagem: 'https://media.fstatic.com/US5sGCFKyLGUklU9_ngTQgugoOg=/322x478/smart/filters:format(webp)/media/movies/covers/2013/06/psicose_t6917.jpg',
      avaliacao: 8.5
    },
    {
      titulo: 'A Bruxa',
      ano: 2015,
      diretor: 'Robert Eggers',
      descricao: 'Uma família puritana enfrenta forças sobrenaturais na Nova Inglaterra do século XVII.',
      imagem: 'https://media.fstatic.com/TgFyEqGOWJs-2JBKDpHdnFh1Hog=/210x312/smart/filters:format(webp)/media/movies/covers/2016/03/a-bruxa_t113126_QfO8UZd.jpg',
      avaliacao: 7.0
    }
  ]
};

const generos = [
  { id: 'acao', nome: 'Ação', cor: '#E74C3C', icone: '💥' },
  { id: 'comedia', nome: 'Comédia', cor: '#F39C12', icone: '😂' },
  { id: 'drama', nome: 'Drama', cor: '#3498DB', icone: '🎭' },
  { id: 'ficcao', nome: 'Ficção Científica', cor: '#9B59B6', icone: '🚀' },
  { id: 'terror', nome: 'Terror', cor: '#2C3E50', icone: '👻' }
];

export default function App() {
  const [generosSelecionados, setGenerosSelecionados] = useState([]);
  const [filmesRecomendados, setFilmesRecomendados] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const toggleGenero = (generoId) => {
    setGenerosSelecionados(prev => {
      if (prev.includes(generoId)) {
        return prev.filter(id => id !== generoId);
      } else {
        return [...prev, generoId];
      }
    });
  };

  const gerarRecomendacoes = () => {
    if (generosSelecionados.length === 0) {
      Alert.alert('Seleção Necessária', 'Por favor, selecione pelo menos um gênero de filme.');
      return;
    }

    const filmes = [];
    generosSelecionados.forEach(generoId => {
      const filmesDoGenero = filmesPorGenero[generoId];
      // Seleciona 2 filmes aleatórios de cada gênero selecionado
      const filmesAleatorios = filmesDoGenero
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      filmes.push(...filmesAleatorios);
    });

    // Embaralha os filmes selecionados
    const filmesEmbaralhados = filmes.sort(() => 0.5 - Math.random());
    setFilmesRecomendados(filmesEmbaralhados);
    setMostrarResultados(true);
  };

  const limparSelecao = () => {
    setGenerosSelecionados([]);
    setFilmesRecomendados([]);
    setMostrarResultados(false);
  };

  const renderizarFilme = (filme, index) => (
    <View key={index} style={styles.filmeCard}>
      <Image 
        source={{ uri: filme.imagem }} 
        style={styles.filmeImagem}
        resizeMode="cover"
      />
      <View style={styles.filmeInfo}>
        <Text style={styles.filmeTitulo}>{filme.titulo}</Text>
        <Text style={styles.filmeAno}>{filme.ano} • {filme.diretor}</Text>
        <Text style={styles.filmeAvaliacao}>⭐ {filme.avaliacao}/10</Text>
        <Text style={styles.filmeDescricao} numberOfLines={3}>
          {filme.descricao}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#1A1A1A" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>🎬 Recomendador de Filmes</Text>
          <Text style={styles.subtitle}>
            Selecione seus gêneros favoritos e descubra filmes incríveis!
          </Text>
        </View>

        <View style={styles.selecaoContainer}>
          <Text style={styles.secaoTitulo}>Escolha seus gêneros favoritos:</Text>
          
          <View style={styles.generosGrid}>
            {generos.map((genero) => (
              <TouchableOpacity
                key={genero.id}
                style={[
                  styles.generoCard,
                  {
                    backgroundColor: genero.cor,
                    opacity: generosSelecionados.includes(genero.id) ? 1 : 0.7,
                  }
                ]}
                onPress={() => toggleGenero(genero.id)}
              >
                <Text style={styles.generoIcone}>{genero.icone}</Text>
                <Text style={styles.generoNome}>{genero.nome}</Text>
                {generosSelecionados.includes(genero.id) && (
                  <View style={styles.checkmark}>
                    <Text style={styles.checkmarkText}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.gerarButton} 
              onPress={gerarRecomendacoes}
            >
              <Text style={styles.gerarButtonText}>🎲 Gerar Recomendações</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.limparButton} 
              onPress={limparSelecao}
            >
              <Text style={styles.limparButtonText}>Limpar Seleção</Text>
            </TouchableOpacity>
          </View>
        </View>

        {mostrarResultados && (
          <View style={styles.resultadosContainer}>
            <Text style={styles.resultadosTitulo}>
              🎯 Suas Recomendações ({filmesRecomendados.length} filmes)
            </Text>
            
            {filmesRecomendados.map((filme, index) => 
              renderizarFilme(filme, index)
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#2C2C2C',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    lineHeight: 22,
  },
  selecaoContainer: {
    backgroundColor: '#2C2C2C',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  generosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  generoCard: {
    width: (width - 90) / 2 - 10,
    aspectRatio: 1,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  generoIcone: {
    fontSize: 32,
    marginBottom: 8,
  },
  generoNome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#2C2C2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gerarButton: {
    flex: 1,
    backgroundColor: '#E74C3C',
    padding: 8,
    borderRadius: 6,
    marginRight: 6,
    alignItems: 'center',
  },
  gerarButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  limparButton: {
    flex: 1,
    backgroundColor: '#7F8C8D',
    padding: 8,
    borderRadius: 6,
    marginLeft: 6,
    alignItems: 'center',
  },
  limparButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  resultadosContainer: {
    backgroundColor: '#2C2C2C',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  resultadosTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  filmeCard: {
    backgroundColor: '#3C3C3C',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    minHeight: 180,
  },
  filmeImagem: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  filmeInfo: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  filmeTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  filmeAno: {
    fontSize: 15,
    color: '#CCCCCC',
    marginBottom: 8,
  },
  filmeAvaliacao: {
    fontSize: 15,
    color: '#F39C12',
    marginBottom: 12,
  },
  filmeDescricao: {
    fontSize: 13,
    color: '#AAAAAA',
    lineHeight: 18,
    flex: 1,
  },
});
