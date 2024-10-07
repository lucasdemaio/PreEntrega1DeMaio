import "./navbar.css"
import CartWidget from "./CartWidget"
import brandlogo from "../../assets/brandlogo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h1>ElectroHogar</h1>
        <img src={brandlogo} alt="" />
      </div>

      <ul className="listadocateg">
        <li>Moviles</li>
        <li>TV & Audio</li>
        <li>Electrodomesticos</li>
        <li>Computacion</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar