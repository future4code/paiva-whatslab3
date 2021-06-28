import { Main } from './styles/styled';
import GlobalStyle from './styles/global';
import Conversa from './components/conversa';
import Contatos from './components/contatos/contatos';

function App() {
  return (
    <div className="App">
      <Main>
        <Contatos></Contatos>
        <Conversa></Conversa>
        <GlobalStyle />
      </Main>
    </div>
  );
}

export default App;
