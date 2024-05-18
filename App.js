import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MinhaImagem from '../curriculo_app/assets/deb.jpeg';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={MinhaImagem} style={styles.imagem} />
      <Text style={styles.titulo}>Débora Freitas</Text>
      <Text style={styles.textoPagina}>20 anos</Text>
      <Text style={styles.textoPagina}>Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas.</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.titulo, {marginBottom: 20}]}>Sobre mim</Text>
      <Text style={[styles.textoPagina, { marginBottom: 20 }]}>Me chamo Débora de Freitas, e me descobri na área da tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas pelo Embarque Digital na Faculdade Senac.</Text>
      <Text style={[styles.textoPagina, { marginBottom: 20 }]}>Muito me interesso por gestão de projetos e engenharia de Software.</Text>
      
      <Text style={styles.titulo2}>Hard Skills</Text>
      <Text style={styles.textoPagina}>Programação: JavaScript e Python </Text>
      <Text style={styles.textoPagina}>Bancos de Dados: MySQL </Text>
      <Text style={styles.textoPagina}>Desing de interação: Figma </Text>
      <Text style={styles.textoPagina}>Gestão de Projetos: Metodologia Scrum </Text>

      <Text style={[styles.titulo2, { marginTop: 20 }]}>Soft Skills:</Text>
      <Text style={styles.textoPagina}>Boa comunicação, Facilidade de trabalhar em equipe, criatividade, organização, proatividade, pontualidade e curiosidade.</Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={[styles.titulo, { marginBottom: 20 }]}>Formação acadêmica</Text>
      <Text style={styles.titulo2}>Ensino Superior</Text>
      <Text style={[styles.textoPagina, { marginBottom: 20 }]}>Cursando 3º período de Tecnologia em Análise e Desenvolvimento de Sistemas – Faculdade SENAC (Programa Embarque Digital – Porto Digital)</Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.titulo}>Contato</Text>
      <Text style={styles.textoPagina}>Email: deboracan20@gmail.com</Text>
      <Text style={styles.textoPagina}>Linkedin: Débora Freitas</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Sobre':
        return <Pagina1 />;
      case 'Formação acadêmica':
        return <Pagina2 />;
      case 'Contato':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Sobre')}>
            <Text style={styles.menuItemText}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Formação acadêmica')}>
            <Text style={styles.menuItemText}>Formação acadêmica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Contato')}>
            <Text style={styles.menuItemText}>Contato</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
  },
  titulo2: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  textoPagina: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: '100%',
    marginBottom: 20
  }
});

export default App;