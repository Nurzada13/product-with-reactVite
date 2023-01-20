import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Louder from "./louder";

//10 
function DetailetPage() {
  const [data, setData] = useState({});
const[isLouder, setIsLouder]=useState(false)

//11 we get id params from  the link product id
  const params = useParams();
  console.log(params);

//12
  async function getProduct() {

setIsLouder(true)

    try {
      const responseVariabe = await axios.get(
        `https://course-api.com/javascript-store-single-product?id=${params.id}`
      );
      
      setData(responseVariabe.data.fields);
      setIsLouder(false)

    } catch (err) {
      console.log(err);
    }
  } 

  //13
  useEffect(() => {
    getProduct();
  }, []); 

//14
  const navigate = useNavigate();

//15
  return (

    <>{isLouder?<Louder/>:
    <div className="product">  
    
    {/* 16 */}
      <button onClick={() => navigate("/")} className="btn home-link">
        Back Home
      </button>

      <div className="product-wrapper">
        <img className="img" src={"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/pavelstasevich181101027.jpg?ver=6"} />
       

        <div className="product-info">
          <h3>{data?.name}</h3>
          <h5>{data?.company}</h5>

          <span>{data?.price}</span>
          <br />
          {data.colors?.map((eachColor) => (
            <span
              className="product-color"
              style={{ backgroundColor: `${eachColor}` }}
            ></span>
          ))}

          <p>{data?.description}</p>

          <button className="btn">Add To Cart</button>
        </div>
      </div> 
    </div> 
}

</>
  );
}
export default DetailetPage;
