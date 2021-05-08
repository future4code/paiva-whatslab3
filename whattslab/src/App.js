import { MainContainer, CampoMensagem, Header } from './styles/styled'
import GlobalStyle from './styles/global';
import IconUser from './img/icon.png'
import UenoUser from './img/ueno.png'
import Conversa from './components/conversa'




function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header>
          <img src={UenoUser} />
          <div>
            <h2>Daniel Ueno</h2>
            <p>Visto por último hoje às 11:11</p>
          </div>

        </Header>

        <CampoMensagem>
          <div>
            <span>Vai codando, ta fogo aqui no cs, time muito fera xD</span>
          </div>

        </CampoMensagem>

        <div className="divInput">
          <input placeholder="Usuário" />
          <input placeholder="Digite uma Mensagem" />
          <button>Enviar</button>
        </div>

      </MainContainer>
      <GlobalStyle />
    </div>
  );
}

export default App;
