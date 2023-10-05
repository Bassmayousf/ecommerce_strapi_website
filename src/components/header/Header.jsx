import "./header.css"
// eslint-disable-next-line react/prop-types
export default function Header ({title, subtitle})  {
  return (
    <div className="head container">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}

 
