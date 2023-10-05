import "./footer.css";

const Footer = () => {
  return (
    <>
    
    <div className="footer">
    
    <div className="firstSec ">
        <span className="logo">Shopping</span>
    <div>
      we are here to give you a big collection of your faviorits  brands with big sale
    </div>
      </div>
      <div className="secsect">
        <h3>About Shopping</h3>
        <ul>
          <li>about us</li>
          <li>our products</li>
          <li>cards</li>
          <li>contact us</li>
        </ul>
      </div>
      <div className="thirdsec ">
        <h3>Newsletter</h3>
        <form >
          <label htmlFor="subscripe"> subscripe to our newsletter</label>
          <input type="email"  placeholder="Enter tour email"/>
        </form>
      </div>
      
    </div>
    <div className="copyrights" style={{paddingBottom:"15px"}}>
          Copyright © 2023 Design & Developed by <span>SmileThemes</span>
        </div>
    </>
  );
};

export default Footer;
