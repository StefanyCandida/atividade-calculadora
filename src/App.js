import React, { Component }  from 'react'
import './App.css';
import styled from "styled-components";

const GlobalStyle = styled.div`
 {
    height: 150vh;
    background-color: teal;
    display: flex;
    justify-content: space-evenly;
  }

`
const Calculos = styled.div`
{ 
  height: 100vh;
  width: 12vw;
  display: flex;
  justify-content: space-around;

}
`

const Calculo = styled.div`{
  height: 5vh;
  width: 30vw;
  background-color: moccasin ;
}`
const Calcular = styled.div`
.cacular{
  border:solid 1px red;
  height: 15vh;
  width: 15vw;
  background-color: moccasin ;
}`

const Hone = styled.h1`
height: 20vh; 
font-size: 3rem; 
text-align: center;`


const Input = styled.input`{
  height: 10vh;
  width: 30vw;
  font-size: 2rem;
  text-align: center; 
  }
  ` 
  const Button = styled.button`{
  height: 5vh;
  width: 6vw;
  font-size: 1.5rem; 
  background-color: moccasin;

}
`


const Htwo = styled.h2`{
  height: 5vh;
  width: 30vw;
  text-align: center;
  font-size: 3rem; 
  border-bottom: 5px solid;

}

`
const Hthree = styled.h3`
{
  height: 5vh;
  width: 30vw;
  text-align: center;
  font-size: 2rem;  
  

}`

export default class App extends Component {
  state = {   
        n1:null,
        n2:null,    
        result:null,
        sinal: null
      }
     


  remover = () => { 
    if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      result: this.state.n1 - this.state.n2,
      sinal: "-"
    })
  }else {
    this.setState({
      result: "Digite um valor"
    })
  } 
  
 }
 

  add = () => { 
     if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      result: this.state.n1 + this.state.n2,
      sinal: "+"
    })
  }else {
    this.setState({
      result: "Digite um valor"
    })
  } 
  
 }
 
  multi = () => { 
    if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      result: this.state.n1 * this.state.n2,
      sinal: "*"
    })
  }else {
    this.setState({
      result: "Digite um valor"
    })
  } 
  
 }
 

  dividir = () => { 
    if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      result: this.state.n1 / this.state.n2,
      sinal: "/"
    })
  }else {
    this.setState({
      result: "Digite um valor"
    })
  } 
  
 }
 
  zerar = () => {this.setState({
    n1:"",
    n2:"", 
    sinal: "",   
    result:null
  })}
    
  
 
   handleChangeN1 = (e) => { 
     this.setState({
       n1: Number(e.target.value)
      })
    }

    handleChangeN2 = (e) => { 
       this.setState({
         n2: Number(e.target.value)
         })
        }
        

   render() {
   
    
    return(
      <GlobalStyle>
      <Calculos>
        
        <Calcular>
          <Hone>React Calc App</Hone>
         
          <Input  onChange={this.handleChangeN1} value={this.state.n1} placeholder= "0"/> 
          <Hthree>{this.state.sinal}</Hthree>
          <Input onChange={this.handleChangeN2} value={this.state.n2} placeholder= "0"/> 
          <Calculo>        
              
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.remover}>-</Button>
        <Button onClick={this.multi}>*</Button>
        <Button onClick={this.dividir}>/</Button>
        <Button onClick={this.zerar}>C</Button>
      </Calculo> 
          <Hthree>=</Hthree>
          <Htwo>{this.state.result}</Htwo>
        </Calcular>                 

      
      </Calculos>
      </GlobalStyle>
     )}
}