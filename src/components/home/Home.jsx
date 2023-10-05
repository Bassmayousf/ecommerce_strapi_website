import Products from "../Products";
import Categories from "../categories/Categories";
import "./home.css"
const Home = () => {
  return (
    <div className=" home">
      <Categories/>
      <Products/>
    </div>
  );
}

export default Home;
