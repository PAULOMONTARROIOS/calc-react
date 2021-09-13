import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: '',
      result: ''
    }
  }

  handleOp(op) {

    if(op === 'C'){
      this.setState({
        display: '',
        result: ''
      })
    }else if(op === '='){
      this.setState({
        display: this.state.result,
        result: ''
      })
    }else{

      const display = this.state.display + op
      let result = this.state.result

      try{
        let fixedOperation = display.split('X').join('*')
        result = new String(eval(fixedOperation)).toString();

      }catch(e){
      }

      this.setState({
        display,
        result
      })
    }

  }

  render() {
    const {
      container, buttons, display,
      result, col1, col2, line, 
      btn, btnText, btn2, btnText2 } = styles;

    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '='],
    ]

    const col2Buttons = [
      'C', '/', 'X', '-', '+'
    ]

    return (
      <View style={container}>
        <Text style={display}>{this.state.display}</Text>
        <Text style={result}> {this.state.result}</Text>
        <View style={buttons}>

          <View style={col1}>

            {col1Buttons.map((linee, ind) =>

              <View  style={line} key={ind}>
                {linee.map(op =>
                  <TouchableOpacity onPress={()=> this.handleOp(op)} key={op} style={btn}>
                    <Text style={btnText}>
                      {op}
                    </Text>
                  </TouchableOpacity>
                )
                }
              </View>

            )}

          </View>

          <View style={col2}>
            {col2Buttons.map(op =>
              <TouchableOpacity onPress={()=> this.handleOp(op)} style={btn2}>
                <Text style={btnText2}>{op}</Text>
              </TouchableOpacity>
            )}


          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 70,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10,
  },
  result: {
    flex: 0.5,
    backgroundColor: '#EFEFEF',
    fontSize: 35,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10,
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  col1: {
    flex: 7.5,
    backgroundColor: '#000000'
  },
  col2: {
    flex: 2.5,
    flexDirection: 'column',
    backgroundColor: '#0F0F1F',


  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnText: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white'
  },
  btn2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnText2: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white'
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
