// Author: Konsta Jäske, TIK21KM
import { StyleSheet, StatusBar } from 'react-native';

export const basicStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 100,
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    padding: 10,
  },
  textInput: {
    backgroundColor: '#d9d9d7',
  },
  header: {
    marginTop: 30,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },

  item: {
    margin: 15,
    padding: 5
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: '#86fcb8',
    width: 150
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  result: {
    fontSize: 20,
    marginLeft: 170,
    marginRight: 170,
    textAlign: 'center'
  }
});

export const DarkStyle = StyleSheet.create({
  container: {...basicStyle.container,
              backgroundColor: '#4c4c4c'},
  title: {...basicStyle.title,
          color: '#defff0'},
  textInput: {...basicStyle.textInput,
              borderBottomColor: 'white'},
  labels: {...basicStyle.labels,
            color: '#defff0'},
  button: {...basicStyle.button},
  switch: {...basicStyle.switch},
  author: {...basicStyle.author,
            color: 'white'},
  flex: {...basicStyle.flex},
  item: {...basicStyle.item},
  text: {...basicStyle.text},
  result: {...basicStyle.result}
});