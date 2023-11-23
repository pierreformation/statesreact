import { Link } from "react-router-dom";

const Menu = () => {
  return( 
  <div className="menu">
   <div className="title">
   EXERCICES STATES
    </div> 
    <div>
      <Link className="menuEl" to="counters">COMPTEURS</Link>
      {/* <Link className="menuEl" to="converters">CONVERTISSEURS</Link> */}
      <Link className="menuEl" to="selecteurs">SELECTEURS</Link>
      {/* <Link className="menuEl" to="configurateur">CONFIGURATEUR</Link> */}
      {/* <Link className="menuEl" to="modale">MODALE</Link> */}
      {/* <Link className="menuEl" to="movers">MOVERS</Link> */}
    </div>
      
  </div>)
}
export default Menu;
