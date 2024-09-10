import bankingImage from "../assets/images/icon-online.svg"

import onboardingImage from  "../assets/images/icon-onboarding.svg"
import apiImage from  "../assets/images/icon-api.svg"
const About = () => {
  return (
    <div className="about">
      <div className="about-first">
        <h1 className="about-title" >Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="about-second">
        <div className="card">
          <img src={bankingImage} alt="" />
          <h1>Online Banking</h1>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="card">
          <img src={bankingImage} alt="" />
          <h1>Simple Budgeting</h1>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="card">
          <img src={onboardingImage} alt="" />
          <h1>Fast Onboarding</h1>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="card">
          <img src={apiImage} alt="" />
          <h1>Open API</h1>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
