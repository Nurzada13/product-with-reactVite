import axios from "axios";
import { useEffect, useState } from "react";
import Louder from "./louder";
import ProductCard from "./productCard";

//3
function Product() { 
 //4 create state
    const [products, setProducts] = useState([]);
const[isLouder, setIsLouder]=useState(false)

//5
  async function getProducts() {
setIsLouder(true)

    try {
      const request = await axios.get(
        "https://course-api.com/javascript-store-products"
      )
      setProducts(request.data)
      setIsLouder(false)
    } catch (err) {
      console.log(err);
    }
  }
//6
  useEffect(() => {
    getProducts();
  }, []);

  //7 iterate state
  return (

<> {isLouder?<Louder/>:    
    <div className="products">
      <h1 className="title">Our Products</h1>
      <div className="title-underline"></div>

      <div className="products-container products-center">
        
        {products.map((eachelement) => (
          <ProductCard dataProps={eachelement} key={eachelement.id} />
        ))}
      </div>
    </div> 

}</>

  );
}
export default Product;
