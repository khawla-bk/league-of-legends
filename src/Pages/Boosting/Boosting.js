import React from "react";
import "./Boosting.scss";
import Header from "../../Layout/Header/Header";
import JoinUs from "../../Components/Join/Join";
import Footer from "../../Layout/Footer/Footer";
import Iron from "./iron.png";
import Bronze from "./bronze.png";
import Silver from "./silver.png";
import Gold from "./gold.png";
import Platinum from "./platinum.png";
import Diamond from "./diamond.png";
import Master from "./master.png";
import Features from "../../Components/Features/Features";
import Target from "./icons/target.png";
import Gift from "./icons/gift.png";
import Vpn from "./icons/vpn.png";
import Hourglass from "./icons/hourglass.png";
import Offline from "./icons/offline.png";
import Options from "./icons/options.png";
import VIP from "./icons/vip.png";
import Chat from "./icons/chat.png";
import Duo from "./icons/duo.png";
import Stepscards from "../../Components/Cards/StepsCards";
import CardIcon from "../Homepage/cards.png";
import CardIcon2 from "../Homepage/cards2.png";
import CardIcon3 from "../Homepage/cards3.png";

//ajax method should be used to change divs content ++ create sseperate pages fer each boosting type

function Boosting() {
  const features = [
    {
      title: "Order tracking",
      text: "Track your elo boost’s progress  easily on your personal client area.",
      icon: Target,
    },
    {
      title: "Loyalty Rewards",
      text: "Profit from exclusive discounts and giveaways  by signing up.",
      icon: Gift,
    },
    {
      title: "VPN Encryption",
      text: "Keep your account safe with our free vpn encryption services.",
      icon: Vpn,
    },
    {
      title: "24/7 Live Support",
      text: " Our customer support team is here for you 24/7 365.",
      icon: Hourglass,
    },
    {
      title: "Appear offline",
      text: "No one on your friend list will see the booster playing on your account.",
      icon: Offline,
    },
    {
      title: "Free Extra Options",
      text: "Custom roles and champions, offline mode, VPN and much more for free.",
      icon: Options,
    },
    {
      title: "VIP Boosters",
      text: "Benefit from our VIP boosters to get the most unique experience.",
      icon: VIP,
    },
    {
      title: "Chat with the Booster",
      text: "You can communicate directly with your booster via our chat. ",
      icon: Chat,
    },
    {
      title: "Regular and premium Duo",
      text: "Keep your account safe with our free vpn encryption services.",
      icon: Duo,
    },
  ].map((item, i) => ({ _id: "f-" + i, ...item }));

  const stepsdata = [
    {
      icon: CardIcon,
      title: "Pick your service",
      text: "With our services we will boost you to your desired rank in no time.",
    },
    {
      icon: CardIcon2,
      title: "Choose  payment option",
      text: "Payments are accepted worldwide and they are instantly processed.",
    },
    {
      icon: CardIcon3,
      title: "Track your order",
      text: "You're all set now, take it easy and watch your order be completed!",
    },
  ].map((item, i) => ({ _id: "s-" + i, ...item }));

  return (
    <>
      <div className="heroSection">
        <Header />
        <div className="heroSectionContainer">
          <div className="HeroIntro">
            <h1 className="HeroTitle">League Rank Boosting</h1>
            <p className="HeroDescription">
              We provide the highest quality and efficiency of elo boosting
              currently avaiable, for the cheapest prices!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="sub-hero">
        <div className="sub-hero-section">
          <p id="solo-rank">Solo Rank Boosting </p>
          <p>Duo Rank Boosting</p>
          <p id="win-boost">Win Boosting</p>
          <p>Placement Matches</p>
        </div>
        <p className="subhero-text">
          Our boosters will play on your account until they reach your desired
          rank
        </p>
      </div>
      <div className="main-rank">
        <div className="main-rank-selection">
          <div className="rank-selection-wrap">
            <div className="rank-selection-box">
              <h3 className="rank-selection-title">Select your Current Rank</h3>
              <p className="rank-selection-text">
                Select your desired rank and let our boosters take care of it!
              </p>
              <div>
                <div className="selection">
                  <p>Ranks</p>
                  <div className="ranks">
                    <img src={Iron} alt="" id="iron" />
                    <img src={Bronze} alt="" id="bronze" />
                    <img src={Silver} alt="" id="silver" />
                    <img src={Gold} alt="" id="gold" />
                    <img src={Platinum} alt="" id="platinum" />
                    <img src={Diamond} alt="" id="diamond" />
                    <img src={Master} alt="" id="master" />
                  </div>
                </div>
                <div className="selection divisions">
                  <p>Divisions</p>
                  <div className="ranks">
                    <p> IV </p>
                    <p> III </p>
                    <p> II </p>
                    <p> I </p>
                  </div>
                </div>
                <div className="inline">
                  <div className="LP">
                    <p>Current LP</p>
                    <div className="select-option">
                      <select id="select1">
                        <option>0-20 LP</option>
                        <option>21-40 LP</option>
                        <option>42-60 LP</option>
                        <option>61-80 LP</option>
                        <option>81-100 LP</option>
                      </select>
                    </div>
                  </div>
                  <div className="LP server">
                    <p>Server</p>
                    <div className="select-option">
                      <select id="select2">
                        <option>Brazil</option>
                        <option>Europe Nordic & East</option>
                        <option>Europe West</option>
                        <option>Latin America North</option>
                        <option>Latin America South</option>
                        <option>North America </option>
                        <option>Oceania </option>
                        <option>Russia</option>
                        <option>Turkey</option>
                        <option>Japan</option>
                        <option>Republic of Korea </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rank-selection-wrap">
            <div className="rank-selection-box">
              <h3 className="rank-selection-title">Desired rank</h3>
              <p className="rank-selection-text">
                Select your desired rank and let our boosters take care of it!
              </p>
              <div>
                <div className="selection">
                  <p>Ranks</p>
                  <div className="ranks">
                    <img src={Iron} alt="" id="iron" />
                    <img src={Bronze} alt="" id="bronze" />
                    <img src={Silver} alt="" id="silver" />
                    <img src={Gold} alt="" id="gold" />
                    <img src={Platinum} alt="" id="platinum" />
                    <img src={Diamond} alt="" id="diamond" />
                    <img src={Master} alt="" id="master" />
                  </div>
                </div>
                <div className="selection divisions">
                  <p>Divisions</p>
                  <div className="ranks">
                    <p> IV </p>
                    <p> III </p>
                    <p> II </p>
                    <p> I </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booster-buy">
          <div className="total">
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>
      </div>
      <div className="features">
        <h3>Our features</h3>
        <div className="features-main">
          <Features data={features} />
        </div>
      </div>

      <div className="steps ">
        <h3>Easy steps to follow</h3>
        <Stepscards data={stepsdata} />
      </div>

      <div>
        <JoinUs />
      </div>
      <Footer />
    </>
  );
}

export default Boosting;
