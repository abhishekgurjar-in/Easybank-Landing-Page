import phoneImage from "../assets/images/image-mockups.png" 

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Next generation <br /> digital  banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="request-btn" id="btn-home" >Request Invite</button>
      </div>
      <div className="home-image">
      <div className="home-bg-image">
        <img className="phone-image" src={phoneImage} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Home;
