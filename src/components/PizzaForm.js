import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" defaultValue={
                props.pizzaToEdit ? props.pizzaToEdit.topping : ""}
                onChange={(event) => props.changeEditedPizza(event, "topping")}/>
        </div>
        <div className="col">
          <select defaultValue={props.pizzaToEdit ? props.pizzaToEdit.size: ""} className="form-control"
            onChange={(event) => props.changeEditedPizza(event, "size")}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaToEdit.vegetarian ? true : false}
              onChange={(event) => props.changeEditedPizza(event, "vegetarian")}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={(props.pizzaToEdit && !props.pizzaToEdit.vegetarian) ? true : false}
              onChange={(event) => props.changeEditedPizza(event, "vegetarian")}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updateEditedPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
