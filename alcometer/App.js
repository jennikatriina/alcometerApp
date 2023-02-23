import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RadioButton, Switch, TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("Female");
  const [result, setResult] = useState(0);

  const [changeTheme, setChangeTheme] = useState(false);
  const [resultColor, setResultColor] = useState('transparent');

  const theme = changeTheme ? firstTheme : secondTheme
  const color = changeTheme ? "#8081abff" : "#ffffff"

  const litres = bottles * 0.33
  const grams = litres * 8 * 4.5
  const burning = weight / 10
  const gramsleft = grams - burning * time

  function showAlert() {
    Alert.alert(
      "Warning alert",
      "Please insert weight",
      [
        {
          text: "Ok"
        }
      ]
    )
  }

  function calcResult() {

    let result = null;

    if (weight == 0 | weight == null) {
      showAlert();
      return;
    }

    if (gender === "Female") {
      result = gramsleft / (weight * 0.6);
    } else if (gender === "Male") {
      result = gramsleft / (weight * 0.7);
    }

    if (result < 0) {
      result = 0;
    }

    if (result < 0.07) {
      setResultColor('#70c59a')
    } else if (result < 0.15) {
      setResultColor('#fdff8b')
    } else if (result > 0.15) {
      setResultColor('#f28383')
    }

    setResult(result);

  }


  return (
    <SafeAreaView style={theme.container}>
      <ScrollView>
        <Switch
          value={changeTheme}
          onValueChange={() => setChangeTheme(!changeTheme)}
          trackColor={{ false: '#ffffff', true: '#000000' }}
          style={theme.switch}
        />

        <Text style={theme.header}>Alcometer</Text>

        <Text style={theme.text}>Weight</Text>
        <TextInput
          style={theme.input}
          keyboardType={'numeric'}
          onChangeText={v => setWeight(v)}
        />

        <View style={theme.numericInputView}>
          <Text style={theme.text}>Bottles</Text>
          <NumericInput
            onChange={v => setBottles(v)}
            rounded
            minValue={0}
            style={theme.numericInput}
            borderColor={color}
            textColor={color}
            containerStyle={theme.numericInput}
          />

          <Text style={theme.text}>Hours</Text>
          <NumericInput
            onChange={v => setTime(v)}
            rounded
            minValue={0}
            style={theme.numericInput}
            borderColor={color}
            textColor={color}
            containerStyle={theme.numericInput}
          />
        </View>

        <RadioButton.Group onValueChange={v => setGender(v)} value={gender}  >
          <View style={theme.radioStyle}>
            <RadioButton
              color={color}
              value="Female" />
            <Text style={theme.text}>Female</Text>
          </View>

          <View style={theme.radioStyle}>
            <RadioButton
              color={color}
              value="Male" />
            <Text style={theme.text}>Male</Text>
          </View>
        </RadioButton.Group>

        <Pressable
          title="Calculate"
          onPress={calcResult}
          style={theme.button}
        >
          <Text style={theme.buttonText}>
            Calculate
          </Text>
        </Pressable>
        <Text
          style={[theme.resultText, { color: resultColor }]}>
            {result.toFixed(2)}
        </Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}


const firstTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3deff',
    textAlign: 'center',
    padding: 20,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  radioButton: {
    color: "#000000"
  },
  text: {
    padding: 5,
    paddingTop: 10,
    color: '#000000',
    marginBottom: 3,
    marginTop: 3
  },
  resultText: {
    padding: 5,
    color: '#000000',
    marginBottom: 3,
    marginTop: 3,
    fontSize: 30
  },
  button: {
    backgroundColor: '#b9c0e8',
    width: 130,
    marginTop: 15,
    marginBottom: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    padding: 18,
  },
  header: {
    fontSize: 40,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#000000'
  },
  input: {
    height: 40,
    backgroundColor: "#ffffff"
  },
  numericInput: {
    backgroundColor: "#ffffff"
  },
  numericInputView: {
    marginBottom: 15,
  },
  switch: {
    marginTop: 10,
  }
})

const secondTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2338',
    textAlign: 'center',
    padding: 20,
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  radioButton: {
    color: "#ffffff"
  },
  text: {
    padding: 5,
    paddingTop: 10,
    color: '#ffffff',
    marginBottom: 3,
    marginTop: 3
  },
  resultText: {
    padding: 5,
    color: '#ffffff',
    marginBottom: 3,
    marginTop: 3,
    fontSize: 30
  },
  button: {
    backgroundColor: '#696c7e',
    width: 130,
    marginTop: 15,
    marginBottom: 8,
    borderRadius: 10,
    textAlign: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: "#ffffff",
    fontSize: 20,
    padding: 18,
  },
  header: {
    fontSize: 40,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#ffffff'
  },
  input: {
    height: 40,
    backgroundColor: "#ffffff"
  },
  numericInput: {
    marginBottom: 0,
    backgroundColor: "#696c7e"
  },
  numericInputView: {
    marginBottom: 15
  },
  switch: {
    marginTop: 10,
  }
});