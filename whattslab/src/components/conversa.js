import React from 'react'
import { MainContainer, CampoMensagem, InputPrimeiro, InputMensagem, BotaoEnviar, DivInput } from '../styles/styled'
import HeaderConversa from '../components/header/header'
const date = new Date().getDate();
const hora = new Date().getHours();
const min = new Date().getMinutes();
const dataHora = `${hora}:${min}`

export default class Conversa extends React.Component {

  state = {
    messages: [
      {
        user: 'Caio',
        text: 'tudo bom?'
      },
      {
        user: 'Bob',
        text: 'oii'
      },
      {
        user: 'alice',
        text: 'olá'
      }
    ],
    userValue: '',
    messageValue: ''
  }

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChangeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value })
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }
    const novaMensagemArray = [newMessage, ...this.state.messages];
    this.setState({ messages: novaMensagemArray, messageValue: '' })
  }

  render() {

    return (
      <>
        <MainContainer>
          <HeaderConversa></HeaderConversa>
          <CampoMensagem>
            {this.state.messages.map((message, index) => {
              return <div>
                <div class="campo-mensagem-msg-align">
                  <p key={index}>
                    <strong> {message.user} </strong> <br /> {message.text} <span>{dataHora}</span></p>
                </div>
              </div>
            })}

          </CampoMensagem>
          <DivInput>
            <InputPrimeiro
              onChange={this.onChangeUserValue}
              value={this.state.userValue}
              placeholder={'Nome'}
            />

            <InputMensagem
              onChange={this.onChangeMessageValue}
              value={this.state.messageValue}
              placeholder={'Mensagem'}
            />
            <BotaoEnviar onClick={this.sendMessage}>Enviar</BotaoEnviar>
          </DivInput>
        </MainContainer>
      </>
    );
  }
}
