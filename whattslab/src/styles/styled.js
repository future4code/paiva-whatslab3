import styled from 'styled-components'
import PlanoDeFundo from '../img/wppbackground.png'


// Container Principal
export const MainContainer = styled.div`
display: flex;
border: 1px black solid;
width: 500px;
height: 100vh;
background-image: url(${PlanoDeFundo});
flex-direction: column;

input {
    padding: 5px;
    flex-direction: row;
}

header {
    display: flex;
    flex-direction: row;
    border-radius: 25px 25px 25px 25px;
    background-color: #25D366;
    width: 95%;
    margin: 5px auto;

img {
    width: 45px;
    border-radius: 20px;
    margin: 10px;
    display: flex;
}

div {
line-height: 1.5rem;
margin: 10px 0;
color: white;
}

}

`
export const CampoMensagem = styled.div`
margin: 20px 20px;
height: 90%;
display: flex;
flex-direction: column-reverse;

p{
    padding: 8px;
    background-color: white;
    display: inline-block;
    border-radius: 10px;
}
div {
    margin: 5px 0;
}
`

export const InputPrimeiro = styled.input`
width: 100px;
`

export const InputMensagem = styled.input`
flex: 1;`

export const BotaoEnviar = styled.button`
padding: 5px`

export const DivInput = styled.div` 
    display: flex;
 `

export const Main = styled.div`
margin: 0 auto;
display: flex;
width: 100%;
justify-content: center;
`
// Container Conversas

export const ConversaContainer = styled.div`
width: 450px;
background-color: white;
height: 100vh;

header{ 
display: grid;
width: 95%;
height: 15vh;
background-color: #25D366;
border-radius: 10px 10px 25px 25px;
margin: 4px auto;
margin-bottom: 10px;

h2{
    /* font-size: 1.1rem; */
    /* font-weight: 800; */
    color: #F7E20E;
    /* letter-spacing: 1px; */
    margin-left: 5px;
}
img {
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}

}
.container-icons {
   img{
       width: 1.8rem;
       height: 1.8rem;
   }
}
.header-user {
    display: flex;
    align-items: center;

    p{
        margin-left: 10px;
    }
}

.header-chats-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 95%;
    margin: 0 auto;
    align-items: center;

span {
    padding: 5px;
    color: white;
    font-weight: 570;
    cursor: pointer;
}
span:hover {
    background-color: white;
    border-radius: 10px; 
    color: black;
}

}
.header-align {
display: flex;
flex: 1;
justify-content: space-evenly;
align-items: center;
}

.chats-input {
    
display: flex;
align-items: center;
justify-content: center;
align-items: center;
margin: 5px auto;
width: 100%;
padding: 1px;

.search-style {
    border-radius: 5px;
    display: flex;
    background-color: #F5F4EA;
    width: 98%;
    padding: 2px;

    input {
        border: none;
        background-color: #F5F4EA;
        border-radius: 0 5px 5px 0;
        width: 100%;
    }
}
`
// Chats

export const ChatContainer = styled.div`
width: 95%;
height: 9%;
background: #ccc;
margin: 2px auto;
border-radius: 10px;
text-align: center;

`


