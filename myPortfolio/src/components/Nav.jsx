import "../App.css";
import logo from "../assets/logo3.png"

function Nav() {
  return (
    <nav className='nav-main'>
        <section className="logodiv">
          <img className="logo" src={logo} alt="logo" />
          <p>Samuel ma.</p>
        </section>
        <section className="">
          <a className="navlinks" href="">Home</a>
          <a className="navlinks two" href="">Projects</a>
          <a className="navlinks two" href="">Designs</a>
        </section>
      </nav>
  )
}

export default Nav