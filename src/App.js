import React, { Component }  from 'react'
import './App.css';

export default class App extends Component {
  state = {   
        n1:null,
        n2:null,    
        result:null 
      }

  remover = () => { 
    this.setState(
      {result: this.state.n1 - this.state.n2
      })
    }

  add = () => { 
    this.setState({result: this.state.n1 + this.state.n2 })}

  multi = () => { 
    this.setState({result: this.state.n1 * this.state.n2})
  }

  dividir = () => { 
    this.setState({result: this.state.n1 / this.state.n2})
  }

   zerar = () => {this.setState({
    n1:null,
    n2:null,    
    result:null})}

  
 
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
    let {result} = this.state
    return(
      <div ClassName="calculos">
        
        <div ClassName="calcular">
          <h1>React Calc App</h1>
         <h2>{result}</h2>
          <input type="number" onChange={this.handleChangeN1}/> 


          <input type="number" onChange={this.handleChangeN2}/> 
        </div>
                  

      <div ClassName="calculo">        
              
        <button onClick={this.add}>+</button>
        <button onClick={this.remover}>-</button>
        <button onClick={this.multi}>*</button>
        <button onClick={this.dividir}>/</button>
        <button onClick={this.zerar}>C</button>
      </div> </div>
      
     )}
}