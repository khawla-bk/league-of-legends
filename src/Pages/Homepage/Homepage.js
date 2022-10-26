import React from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import "./Homepage.scss";
import Check from "./check.png";
import Png from "./cards.png";
import CartdPng from "./cards2.png";
import TargetPng from "./cards3.png";
import Talon from "./Talon.png";
import Aatrox from "./Aatrox.png";
import Yasuo from "./Yasuo.png";
import Team from "./Team.png";
import CustomCards from "../../Components/Cards/Cards";
import TeamCards from "../../Components/Team/Team";
import JoinUs from "../../Components/Join/Join";

function Homepage() {
  const cards = [
    {
      imageFirst: false,
      image: Talon,
      png: Png,
      title: "Pick your service",
      description: (
        <>
          <p className="CustomCardDescription">
            We provide a solution to all of your ranked struggles and desires.{" "}
            <br /> With our services we will boost you to your desired rank in
            no time while making sure you are satisfied with the process
            throught the service.
          </p>
        </>
      ),
    },
    {
      imageFirst: true,
      image: Aatrox,
      png: CartdPng,
      title: "Pick your service",
      description: (
        <>
          <p className="CustomCardDescription">
            Payments are accepted worldwide and they are instantly processed
            while being the most secure and encrypted transactions. We will sort
            out your order as soon as you finish checkout!
          </p>
        </>
      ),
    },
    {
      imageFirst: false,
      image: Yasuo,
      png: TargetPng,
      title: "Pick your service",
      description: (
        <>
          <p className="CustomCardDescription serviceText">
            You're all set now, take it easy and watch your order be completed!
          </p>
          <div className="pngBox">
            <img src={Check} alt="" />
            <p className="pngText">live order tracking</p>
          </div>
          <div className="pngBox">
            <img src={Check} alt="" />
            <p className="pngText">direct chat with booster</p>
          </div>
          <div className="pngBox">
            <img src={Check} alt="" />
            <p className="pngText">24/7 support</p>
          </div>
          <p className="pngText pngButtonText">Get started now</p>
        </>
      ),
    },
  ].map((item, i) => ({ _id: "c-" + i, ...item }));

  const team = [
    {
      name: "David smirnoff",
      role: "Master",
      image: Team,
    },
    {
      name: "David smirnoff",
      role: "Master",
      image: Team,
    },
    {
      name: "David smirnoff",
      role: "Master",
      image: Team,
    },
    {
      name: "David smirnoff",
      role: "Master",
      image: Team,
    },
    {
      name: "David smirnoff",
      role: "Master",
      image: Team,
    },
  ].map((item, i) => ({ _id: "t-" + i, ...item }));
  return (
    <>
      <div className="MainHeroSection">
        <Header />
        <div className="HeroSection">
          <h1>
            The best boosting service
            <br /> for league of legends
          </h1>
          <h6>
            We provide the highest quality and efficiency of
            <br /> elo boosting currently avaiable, for the cheapest prices!{" "}
          </h6>
          <p className="HeroButton">Buy boosting now</p>
        </div>
      </div>
      <div className="WhoAreWeSection">
        <div className="WhoAreWeMain">
          <p className="WhoAreWerText">who are we</p>
          <h2>Achieve your dream rank with us</h2>
          <p className="WhoAreWeDescription">
            Our experienced and professional Boosters consisting of master to
            challenger players guarantee fast order completion with perfect
            customer satisfaction .
          </p>
        </div>
        <div className="WhoAreWeCards">
          <div id="firstCard" className="cards">
            <img className="png" src={Png} alt="png" />
            <p>Fast and reliable</p>
          </div>
          <div id="secondCard" className="cards">
            <img className="png" src={Png} alt="png" />
            <p>Quality Boosters</p>
          </div>
          <div id="thirdCard" className="cards">
            <img className="png" src={Png} alt="png" />
            <p>Incognito mode</p>
          </div>
        </div>
      </div>
      <div className="howItWorksMain">
        <h2 className="howItWorksTitle">How it works </h2>
        <CustomCards data={cards} />
      </div>
      <div className="TeamSection">
        <h2 className="TeamSectionTitle">Meet our team of awesome boosters</h2>
        <div className="TeamCardsSection">
          <TeamCards data={team} />
        </div>
      </div>
      <JoinUs />
      <Footer />
    </>
  );
}

export default Homepage;
