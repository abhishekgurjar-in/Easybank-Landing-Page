import logo from "../assets/images/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img  className='logo' src={logo} alt="" />
        <div className="header">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Careers</a>
        </div>
        <button className='request-btn'>Request Invite</button>
    </div>
  )
}

export default Navbar