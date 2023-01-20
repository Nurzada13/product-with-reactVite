import { Link } from "react-router-dom";
//1
function ProductCard({ dataProps }) {
  console.log(dataProps); 
  //2
  return (
    <div className="single-product">
<Link to={`/product/${dataProps.id}`}>

 <img
        className="img single-product-img"
        src={dataProps.fields.image[0].url}
      />

</Link>
     
      <footer>
        <p className="name">{dataProps.fields.name}</p>
        <p className="price">{dataProps.fields.price}$</p>
      </footer>
    </div>
  );
}
export default ProductCard;
