import { product } from "/src/product"
import { Card } from "react-bootstrap"

function Image() {
return (
    <div>
    <Card.Img variant="top" src={product.image} />
    </div> 
    )
}

export default Image