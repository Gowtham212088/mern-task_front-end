import React,{useState,useEffect} from "react";
import axios from "axios";


function Test (){

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/getData");
      setProducts(data);

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
    return(
        <div>
{products.map((element) => (
          <ProductTemplate
            _id={element._id}
            img={element.userDp}
            name={element.name}
          />
        ))}
        </div>
    )
}


function ProductTemplate({ name, img, _id }) {

    return (
      <div className="col-lg-4 col-md-6">
        <div class="mt-5 product_temp_card border-0 shadow-lg rounded-5 mx-auto gap-1 text-center p-2">
          <img
            src={img}
            class="card-img-top rounded-3"
            height={"170px"}
            alt="..."
            
          />
          <h1> {_id} </h1>
          <h6 className="fw-bold">{name}</h6>
        </div>
      </div>
    );
  }


export default Test;