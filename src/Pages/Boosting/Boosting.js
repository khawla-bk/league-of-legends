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
  // const ranks = [
  //   { id: "iron", name: "Iron", price: "8", image: Iron },
  //   { id: "bronze", name: "Bronze", price: "9", image: Bronze },
  //   { id: "silver", name: "Silver", price: "12", image: Silver },
  //   { id: "gold", name: "Gold", price: "20", image: Gold },
  //   { id: "plat", name: "Platinum", price: "32", image: Platinum },
  //   { id: "diamond", name: "Diamond", price: "100", image: Diamond },
  //   { id: "master", name: "Master", price: "250", image: Master },

  //   // {_id : 11, name: 'LP 0-19', price: '2$'},
  //   // {_id : 12, name: 'LP 19-40', price: '3.5$'},
  //   // {_id : 13, name: 'LP 41-60', price: '4.5$'},
  //   // {_id : 14, name: 'LP 61-80', price: '6.5$'},
  //   // {_id : 15, name: 'LP 81-100', price: '8$'},
  // ];

  // const divisions = [
  //   { id: 7, name: "Division 1", price: "0.5" },
  //   { id: 8, name: "Division 2", price: "1.5" },
  //   { id: 9, name: "Division 3", price: "3" },
  //   { id: 10, name: "Division 4", price: "5" },
  //   { id: 11, name: "Division 5", price: "30" },
  // ];
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

  const handleClick = (e) => {
    const content = document.getElementsByClassName("rankinimg");
    Array.from(content).forEach((element) => {
      let value = element.getAttribute("value");
      console.log(value);
    });
  };

  //price calc
  var prices = [
    8, 8.5, 9, 9, 9.5, 10, 12, 13.5, 15, 20, 23, 26, 32, 37, 42, 100, 130, 190,
    250,
  ];

  function getCurrentIndex() {
    return (
      +document.getElementById("CRANK1").value +
      +document.getElementById("CRANK2").value
    );
  }

  function getDesiredIndex() {
    return (
      +document.getElementById("DRANK1").value +
      +document.getElementById("DRANK2").value
    );
  }

  function total() {
    var currentIndex = getCurrentIndex();
    var desiredIndex = getDesiredIndex();

    if (desiredIndex < currentIndex) {
      document.getElementById("prices").value = "You can't rank backwards";
      return;
    }

    var accumulatedPrice = 0;
    for (var i = currentIndex; i <= desiredIndex; i++) {
      accumulatedPrice += prices[i];
    }

    document.getElementById("prices").value = accumulatedPrice;
    document.getElementById("prices").readOnly = true;
  }

  var el = document.getElementById("divboost");

  if (el) {
    el.addEventListener("change", function () {
      total();
      console.lo4(total());
    });
  }

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
      <form className="main-rank" id="divboost" name="priceCalc" action="">
        <div className="main-rank-selection">
          <div className="rank-selection-wrap">
            <div className="rank-selection-box">
              <p className="rank-selection-title">Select your Current Rank</p>
              <p className="rank-selection-text">
                Select your desired rank and let our boosters take care of it!
              </p>
              <div>
                <div className="selection">
                  <p>Ranks</p>
                  <div className="ranks" id="CRANK1">
                    <img
                      value="8"
                      src={Iron}
                      alt="iron"
                      id="iron"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                    <img
                      value="9"
                      src={Bronze}
                      alt="bronze"
                      id="bronze"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                    <img
                      value="12"
                      src={Silver}
                      alt="silver"
                      id="silver"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                    <img
                      value="20"
                      src={Gold}
                      alt="gold"
                      id="gold"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                    <img
                      value="32"
                      src={Platinum}
                      alt="platinum"
                      id="plat"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                    <img
                      value="100"
                      src={Diamond}
                      alt="diamond"
                      id="diamond"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                    <img
                      value="250"
                      src={Master}
                      alt="master"
                      id="master"
                      className="rankinimg"
                      onClick={handleClick}
                    />
                  </div>
                </div>
                <div className="selection divisions">
                  <p>Divisions</p>
                  <div className="ranks division" id="CRANK2">
                    <p value="2"> IV </p>
                    <p value="3"> III </p>
                    <p value="5"> II </p>
                    <p value="6"> I </p>
                  </div>
                </div>
                <div className="inline">
                  <div className="LP">
                    <p>Current LP</p>
                    <div className="select-option">
                      <select id="select1">
                        <option>0-20 LP</option>
                        <option>21-40 LP</option>
                        <option>41-60 LP</option>
                        <option>61-80 LP</option>
                        <option>81-100 LP</option>
                      </select>
                    </div>
                  </div>
                  <div className="LP server">
                    <p>Server</p>
                    <div className="select-option">
                      <select id="select2">
                        <option>Europe West</option>
                        <option>North America </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rank-selection-wrap">
            <div className="rank-selection-box">
              <p className="rank-selection-title">Desired rank</p>
              <p className="rank-selection-text">
                Select your desired rank and let our boosters take care of it!
              </p>
              <div>
                <div className="selection">
                  <p>Ranks</p>
                  <div className="ranks" id="DRANK1">
                    <img src={Iron} alt="" id="iron" />
                    <img src={Bronze} alt="" id="bronze" />
                    <img src={Silver} alt="" id="silver" />
                    <img src={Gold} alt="" id="gold" />
                    <img src={Platinum} alt="" id="plat" />
                    <img src={Diamond} alt="" id="diamond" />
                    <img src={Master} alt="" id="master" />
                  </div>
                </div>
                <div className="selection divisions">
                  <p>Divisions</p>
                  <div className="ranks" id="DRANK2">
                    <p value="2"> IV </p>
                    <p value="3"> III </p>
                    <p value="5"> II </p>
                    <p value="6"> I </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booster-buy">
          <div className="total">
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p id="prices"></p>
          </div>
        </div>
      </form>
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
