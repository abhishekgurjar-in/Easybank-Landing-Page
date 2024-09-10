import Logo from "../assets/images/logo.svg";
import fb from "../assets/images/icon-facebook.svg";
import yt from "../assets/images/icon-youtube.svg";
import tw from "../assets/images/icon-twitter.svg";
import pt from "../assets/images/icon-pinterest.svg";
import ig from "../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logos">
        <img src={Logo} alt="" />
        <div className="social-logo">
          <a href="">
            <img src={fb} alt="" />
          </a>
          <a href="">
            <img src={yt} alt="" />
          </a>
          <a href="">
            <img src={tw} alt="" />
          </a>
          <a href="">
            <img src={pt} alt="" />
          </a>
          <a href="">
            <img src={ig} alt="" />
          </a>
        </div>
      </div>
      <div className="aboutus">
        <a href="">About Us</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>
      <div className="carrers">
        <a href="">Careers</a>
        <a href="">Support</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="invite">
        <div className="request-btn">Request Invite</div>
        <p>© Easybank. All rights reserved.</p>
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  );
};

export default Footer;
