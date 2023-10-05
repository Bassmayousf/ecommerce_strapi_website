import { useEffect, useState,useContext } from "react";
import useFetch from "../hooks/useFetch";
import "./products.css"
import {FaStar} from 'react-icons/fa' ;
import StoreContext from "../hooks/StoreContext";
import Footer from "./footer/Footer";
import {FaShoppingCart} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/storeReducer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { filter } = useContext(StoreContext);
const disPatch = useDispatch()
  const { data, loading } = useFetch(filter);

  useEffect(() => {
    data && setProducts(data);
    // console.log(products)
  }, [data]);
  return (
    <div className="products">
    <div className="row">
    {loading
        ? "loading..."
        : products.map(pro => ( 
            <div className="product col-lg-3 col-md-4 col-sm-5  " key={pro.id}>
              <div className="image-container" style={{width:'255px',height:"350px",transform:'scale(.9)'}}>
              <img className="product-image img-fluid"
                src={
                  import.meta.env.VITE_APP_URL +
                  pro.attributes.image.data.attributes.url
                }
                alt=""
              />
              <p className="product-desc">{pro.attributes.Desc}</p>
              <div className="des">
              <div className="product-title">
                <div className="caption">
                  
                <span>{pro.attributes.title} </span>
              <span className="icons">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </span>
                </div>
              <div className=" adding-cart" onClick={()=>disPatch(addToCart({
                id:pro.id,
                title:pro.attributes.title,
                price:pro.attributes.price,
                image:  pro.attributes.image.data.attributes.url

              }))}> <span>add to cart</span> <FaShoppingCart/></div>
              </div>

              <p className="product-price">{pro.attributes.price}$</p>
              </div>
              </div>
            
            </div>
          ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Products;
