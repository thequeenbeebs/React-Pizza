import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizzaToEdit: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzaData => this.setState({pizzas: pizzaData}))
  }

  editPizzaForm = (pizza) => {
    this.setState({pizzaToEdit: pizza})
  }

  changeEditedPizza = (event, keyName) => {
    let updatedPizza = {...this.state.pizzaToEdit}
    if (keyName === "vegetarian") {
      (event.target.value === "Vegetarian") ? updatedPizza.vegetarian = true : updatedPizza.vegetarian = false
    } else {
      updatedPizza[keyName] = event.target.value
    }
    this.setState({pizzaToEdit: updatedPizza})
  }

  updateEditedPizza = () => {
    let reqPack = {}
        reqPack.headers = {"Content-Type": "application/json"}
        reqPack.method = "PATCH"
        reqPack.body = JSON.stringify(this.state.pizzaToEdit)
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaToEdit.id}`, reqPack)
      .then(resp => resp.json())
      .then(editedPizza => {
        console.log(editedPizza)
        this.setState({
        pizzas: this.state.pizzas.map(pizza => (pizza.id === editedPizza.id ? editedPizza : pizza))
      })})

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm updateEditedPizza={this.updateEditedPizza} changeEditedPizza={this.changeEditedPizza} pizzaToEdit={this.state.pizzaToEdit}/>
        <PizzaList editPizzaForm={this.editPizzaForm} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
