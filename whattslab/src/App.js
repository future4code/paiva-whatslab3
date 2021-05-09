import { MainContainer, CampoMensagem, Header, InputPrimeiro, InputMensagem } from './styles/styled'
import GlobalStyle from './styles/global';
import IconUser from './img/icon.png'
import Conversa from './components/conversa'

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header>
          <img src={IconUser} />
          <div>
            <h2>Daniel Ueno</h2>
            <p>Visto por último hoje às 11:11</p>
          </div>
        </Header>
        {/* 
        <CampoMensagem>
          <div>
            <span>Vai codando, ta fogo aqui no cs, time muito fera xD</span>
          </div>

        </CampoMensagem>

        <div className="divInput">
          <InputPrimeiro placeholder="Usuário" />
          <InputMensagem placeholder="Digite uma Mensagem" />
          <button>Enviar</button>
        </div> */}
        <Conversa></Conversa>
      </MainContainer>
      <GlobalStyle />
    </div>
  );
}

export default App;
