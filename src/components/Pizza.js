import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizzaData.topping}</td>
      <td>{props.pizzaData.size}</td>
      <td>{props.pizzaData.vegetarian ? "Yes" : "No"}</td>
      <td><button 
        onClick={() => props.editPizzaForm(props.pizzaData)}
        type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
