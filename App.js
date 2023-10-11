import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [coachData, setCoachData] = useState({
    name: '',
    age: '',
    nationality: '',
    experience: '',
  });

  const [players, setPlayers] = useState([]);
  const [viewPlayers, setViewPlayers] = useState(false);

  const handleInputChange = (field, value) => {
    setCoachData({
      ...coachData,
      [field]: value,
    });
  };

  const handleFormSubmit = () => {
    
    setViewPlayers(true);
  };

  return (
    <View style={styles.container}>
      {!viewPlayers ? (
        <ScrollView style={styles.formContainer}>
          <Text>Nome do técnico:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('name', text)}
            value={coachData.name}
          />
          <Text>Idade do técnico:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('age', text)}
            value={coachData.age}
          />
          <Text>Nacionalidade do técnico:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('nationality', text)}
            value={coachData.nationality}
          />
          <Text>Experiência do técnico (em anos):</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('experience', text)}
            value={coachData.experience}
          />
          <Button title="listagem" onPress={handleFormSubmit} />
        </ScrollView>
        
        
      ) : (
        <View style={styles.playerListContainer}>
          <Text style={styles.headerText}>Lista de Jogadores do time:</Text>
          <FlatList
            data={footballPlayers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.playerItem}>
                <Text>Nome: {item.name}</Text>
                <Text>Posição: {item.position}</Text>
                <Text>Idade: {item.age} anos</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'burlywood',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  playerListContainer: {
    backgroundColor: 'white',
  },
  playerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

const footballPlayers = [
  {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
  },
  {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
  },
  {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
  },
  {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
  },
  {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
  },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
  },
  {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
  },
  {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
  },
  {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
  },

];

