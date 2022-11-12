import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = ({navigation}) => {
  const [names, setNames] = useState('');
  const [fullName, setFullName] = useState([]);

  const hamdleAddName = () => {
    setFullName(prevState => [...prevState, names]);
    setNames('');
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Add Names</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setNames(text)}
          value={names}
        />
        <Button title="Add" onPress={hamdleAddName} />
      </View>
      <View style={styles.list}>
        {fullName.map(name => (
          <Text key={name}>{name}</Text>
        ))}
      </View>
      <View style={styles.btn}>
        <Button title="Cancel" onPress={() => setFullName([])} />
        <Button title="Submit" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  container: {
    flex: 1,
    width: '80%',
    borderBottomWidth: 1,
    marginBottom: 30,
    paddingBottom: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  list: {
    flex: 4,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default Login;
