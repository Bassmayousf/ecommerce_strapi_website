import { useContext } from "react";
import StoreContext from "../../hooks/StoreContext";
import { animateScroll } from "react-scroll";
// eslint-disable-next-line react/prop-types
export default function Checkbox({ para, id, im }) {
  const { setFilter } = useContext(StoreContext);
  const scrollDown = () => {
    animateScroll.scrollMore(window.innerHeight); // Scrolls down by the height of the window
  };
  const handleButtonClick = (e) => {
    setFilter(
      "http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=" 
      +
        e.target.id
    );

  };
  return (
    <form>
      <div  onClick={scrollDown}>
        <input
          type="checkbox"
          value={para}
          onChange={handleButtonClick}
          id={id}
        />
        <label htmlFor={id}>
          <div className="image">
            <img src={im} alt="" className="img-fluid" />
          </div>
          {/* <Link to="/products" >{para}</Link> */}
          <h5>{para}</h5>
        </label>
      </div>
    </form>
  );
}
