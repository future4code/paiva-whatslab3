import React from 'react'



export class Conversa extends React.Component {
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
  
    onChangerUserValue = (event) => {
      this.setState ({ userValue: event.target.value})
    }
  
    onChangerUserValue = (event) => {
      this.setState ({ messageValue: event.target.value})
    }
  
  
    render() {
      
      return (
        <AppContainer>
          <MessagensContainer>
            {this.state.messages.map((message) => {
              return <p>
                <strong> {message.user} </strong>: {message.text}
              </p>
            })}
  
          </MessagensContainer>
          <InputsContainer>
            <NameInput 
              onChange={this.onChangeUserValue} 
              value={this.state.userValue} 
              placeholder={'nome'} 
            />
  
            <MessageInput 
              onChange={this.onChangeMessageValue} 
              value={this.state.messageValue} 
              placeholder={'mensagem'} 
            />
  
             </InputsContainer>
        </AppContainer>
      );
    }
  }
  