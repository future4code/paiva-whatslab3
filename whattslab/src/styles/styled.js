import styled from 'styled-components'
import PlanoDeFundo from '../img/wppbackground.png'


// Container Principal
export const MainContainer = styled.div`
display: flex;
border: 1px black solid;
width: 500px;
margin: 0 auto;
height: 100vh;
background-image: url(${PlanoDeFundo});
flex-direction: column;

.divInput { 
    display: flex;
 }

input {
    padding: 5px;
    flex-direction: row;
}

input:nth-child(1) {
    width: 100px;
}

input:nth-child(2) {
    flex-grow: 1;
}

button {
    padding: 5px;
}

`
export const Header = styled.header`
display: flex;
flex-direction: row;
background-color: green;

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

`
export const CampoMensagem = styled.div`
margin: 20px 20px;
height: 90%;
display: flex;
flex-direction: column-reverse;

span {
    padding: 10px;
    background-color: white;
    display: inline-block;
    border-radius: 10px;

}

`
