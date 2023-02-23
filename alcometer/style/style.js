import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const firstTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: 20,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    padding: 5,
    color: '#000000'
  },
  button: {
    backgroundColor: '#bbeccd',
    color: '#000000',
    width: 100
  },
  header: {
    fontSize: 40,
    padding: 20
  },
  input: {
    marginBottom: 15
  },
  numericInput:{
    marginBottom: 50
  }

})

const secondTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    textAlign: 'center',
    padding: 20,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    padding: 5,
    color: '#ffffff'
  },
  button: {
    backgroundColor: '#bbeccd',
    color: '#000000',
    width: 100
  },
  header: {
    fontSize: 40,
    padding: 20
  },
  input: {
    marginBottom: 15
  },
  numericInput:{
    marginBottom: 50
  }

});

export {firstTheme, secondTheme};