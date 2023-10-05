import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Checkbox from "../checkbox/Checkbox";

import './categiries.css'
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, loading } = useFetch("/categories?populate=*");
  useEffect(() => {
    data && setCategories(data);
  }, [data]);
  return (
    <div className="category ">
      {loading
        ? "loading..."
        : categories.map(category => ( 
            <div className="categories  " key={category.id}>
              <Checkbox para={category.attributes.title} id={category.id} im={
                  import.meta.env.VITE_APP_URL +
                  category.attributes.image.data.attributes.url
                }/>
            </div>
          ))}
    </div>
  );
};

export default Categories;
