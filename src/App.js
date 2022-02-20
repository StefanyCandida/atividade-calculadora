import React, { Component }  from 'react'
import './App.css';

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
      <div ClassName="calculos">
        
        <div ClassName="calcular">
          <h1>React Calc App</h1>
         
          <input  onChange={this.handleChangeN1} value={this.state.n1} placeholder= "0"/> 
          <h3>{this.state.sinal}</h3>
          <input onChange={this.handleChangeN2} value={this.state.n2} placeholder= "0"/> 
          <h3>=</h3>
          <h2>{this.state.result}</h2>
        </div>                 

      <div ClassName="calculo">        
              
        <button onClick={this.add}>+</button>
        <button onClick={this.remover}>-</button>
        <button onClick={this.multi}>*</button>
        <button onClick={this.dividir}>/</button>
        <button onClick={this.zerar}>C</button>
      </div> 
      </div>
      
     )}
}