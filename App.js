// Author: Konsta Jäske, TIK21KM
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Switch } from 'react-native';
import { useState } from 'react';
import styles, { basicStyle, DarkStyle } from './styles/styles.js';
import RadioForm from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input';

export default function App() {

  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(0);
  const [hours, setHours] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [result, setResult] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const genders= [
    {label: 'Male', value:'male'},
    {label: 'Female', value:'female'},
  ]

  const styles = isEnabled ? DarkStyle : basicStyle

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)


  function Calculate() {

    if (weight < 1) {
      alert('Invalid weight!')
      setResult(0)
      return
    }

    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let left = grams - burning * hours;

    if (gender === 'male') {
      result = left / (weight * 0.7)
    } else {
      result = left / (weight * 0.6)
    }
    setResult(result.toFixed(2))

  }

  function ResultColor() {
    if (result < 0.5) {
      return {backgroundColor: 'green'}
    } else if (result > 0.5 && result < 1.0) {
      return  {backgroundColor: 'orange'}
    } else {
      return {backgroundColor: 'red'}
    }
  }

  return (
    <ScrollView style={styles.container}>
    <View>
    <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          />
      <Text style={styles.title}>Alcometer</Text>
      <Text style={styles.text}>Weight</Text>
      <TextInput style={styles.textInput} default="Type your weight" keyboardType='decimal-pad' onChangeText={text => setWeight(text)}/>
      <Text style={styles.text}>Bottles</Text>
      <NumericInput
      buttonSize={10}
      onChange={v => setBottles(v)}
      rounded
      textColor={'#111111'}
      rightButtonBackgroundColor={'#add8e6'}
      leftButtonBackgroundColor={'#add8e6'}
      borderColor='#111111'
      minValue={0}>
      </NumericInput>
      <Text style={styles.text}>Hours</Text>
      <NumericInput
      buttonSize={10}
      onChange={v => setHours(v)}
      rounded
      textColor='#111111'
      rightButtonBackgroundColor={'#add8e6'}
      leftButtonBackgroundColor={'#add8e6'}
      borderColor='#111111'
      minValue={0}>
      </NumericInput>
      <Text style={styles.text}>Gender</Text>
      <RadioForm
        buttonSize={10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
        />
        <Text style={[styles.result, ResultColor()]}>{result}</Text>
        <Button style={styles.button} title='Calculate' onPress={Calculate}/>
    </View>
    </ScrollView>
  );
}

