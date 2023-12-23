
function PizzaPrep(props) {
    return (
        <div className="bg-light border p-4 m-2">
            <p>Type of Pizza</p>
            <h4>{props.pizza.name}</h4>
            <p>Topppings Included</p>
            <h4>{props.pizza.toppings}</h4>
            <p>Type of Crust</p>
            <h4>{props.pizza.crust}</h4>
        </div>
    )
}

export default PizzaPrep