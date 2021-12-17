import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import css from './styles'

export default class appCronometro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Iniciar',
      ultimoCronometro: null

    }
    // Variavel do timer do relogio
    this.timer = null

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this)
  }

  iniciar() {

    if (this.timer != null) { // se this.time for diferente de null

      // aqui vai parar o timer
      clearInterval(this.timer)
      this.timer = null
      this.setState({ botao: 'Iniciar' })

    } else {

      //começa girar o time
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 }) // somando 0,1 para o contador
      }, 100);
      this.setState({ botao: 'Parar' }) // enquanto estiver girando o botao vai valer 'Parar'

    }


  }


  limpar() {
    if (this.timer != null) {
      // aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimoCronometro: this.state.numero,
      numero: 0,
      botao: 'Iniciar'
    })
  }
  render() {
    return (
      <View style={css.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={css.conometro}
        />

        <Text style={css.timer}>{this.state.numero.toFixed(2)}</Text>


        <View style={css.btnArea}>
          <TouchableOpacity style={css.btn}
            onPress={this.iniciar}
          >
            <Text style={css.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={css.btn}
            onPress={this.limpar}
          >
            <Text style={css.btnText}> Limpar </Text>
          </TouchableOpacity>
        </View>

        <View style={css.areaUltimo}>

          <Text style={css.textTempo}>
            {this.state.ultimoCronometro > 0 ? 'Ultimo tempo: ' + this.state.ultimoCronometro.toFixed(1) + 's' : ''}
          </Text>


        </View>


      </View>
    );
  }
}