/* eslint-disable */
import React, { useEffect } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import CharacterBox from "./components/CharacterBox";
import Banner from "./assets/banner_test.png";
import Pic0 from "./assets/0.png";
import Pic1 from "./assets/1.png";
import Pic2 from "./assets/2.png";
import Pic3 from "./assets/3.png";
import Pic4 from "./assets/4.png";
import Pic5 from "./assets/5.png";
import Pic6 from "./assets/6.png";
import Pic7 from "./assets/7.png";
import Pic8 from "./assets/8.png";
import Pic9 from "./assets/9.png";
import Pic10 from "./assets/10.png";
import Pic11 from "./assets/11.png";
import Pic12 from "./assets/12.png";
import Pic13 from "./assets/13.png";
import Pic14 from "./assets/14.png";
import Pic15 from "./assets/15.png";
import Pic16 from "./assets/16.png";
import Pic17 from "./assets/17.png";
import Trans1 from "./assets/trans1.png";
import Trans2 from "./assets/trans2.png";
import Trans3 from "./assets/trans3.png";
import Saim from "./assets/saim.jpg";
import Logo from "./assets/solo_logo.png";

import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

library.add(fab);

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);

  /* Anchoring Funtions */
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        // offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 60,
      },
      ease: Power4.easeInOut,
    });
  };

  /* Custom FAQ sliding */

  const q1 = () => {
    $(".a").slideUp(350);
    $(".a1").slideToggle(350);
  };
  const q2 = () => {
    $(".a").slideUp(350);
    $(".a2").slideToggle(350);
  };
  const q3 = () => {
    $(".a").slideUp(350);
    $(".a3").slideToggle(350);
  };
  const q4 = () => {
    $(".a").slideUp(350);
    $(".a4").slideToggle(350);
  };

  /* Character Display Functions */

  const displayCh1 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch1").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB1").addClass("activeCHB");
  };
  const displayCh2 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch2").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB2").addClass("activeCHB");
  };
  const displayCh3 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch3").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB3").addClass("activeCHB");
  };
  const displayCh4 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch4").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB4").addClass("activeCHB");
  };
  const displayCh5 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch5").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB5").addClass("activeCHB");
  };
  const displayCh6 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch6").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB6").addClass("activeCHB");
  };
  const displayCh7 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch7").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB7").addClass("activeCHB");
  };
  const displayCh8 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch8").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB8").addClass("activeCHB");
  };
  const displayCh9 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch9").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB9").addClass("activeCHB");
  };
  const displayCh10 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch10").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB10").addClass("activeCHB");
  };
  const displayCh11 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch11").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB11").addClass("activeCHB");
  };
  const displayCh12 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch12").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB12").addClass("activeCHB");
  };
  const displayCh13 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch13").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB13").addClass("activeCHB");
  };
  const displayCh14 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch14").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB14").addClass("activeCHB");
  };
  const displayCh15 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch15").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB15").addClass("activeCHB");
  };
  const displayCh16 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch16").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB16").addClass("activeCHB");
  };
  const displayCh17 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch17").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB17").addClass("activeCHB");
  };
  const displayCh18 = () => {
    $(".ch").removeClass("activeCh");
    $(".ch18").addClass("activeCh");
    $(".CHB").removeClass("activeCHB");
    $(".CHB18").addClass("activeCHB");
  };
  return (
    <div className="body">
      {/* Sticky Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            <div className="header-left">
              {/* <a onClick={moveTo1}>
                <img src={Logo} alt="" />
              </a> */}
              <a onClick={moveTo2}>SpecDex</a>
              <a onClick={moveTo3}>Mint</a>
              <a onClick={moveTo4}>FAQ</a>
              <a onClick={moveTo5}>Roadmap</a>
            </div>
            <div className="header-right">
              <a href="https://discord.gg/kWnNs8y7VJ">
                <FontAwesomeIcon icon={["fab", 'discord']} />
              </a>
              <a href="https://twitter.com/SolSpecters">
                <FontAwesomeIcon icon={["fab", "twitter-square"]} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero" id="section1">
        <img src={Banner} alt="" />
      </div>

      {/* SpecDex Section */}
      <div className="specdex section" id="section2">
        <div className="box">
          <div className="sp-content">
            <div className="sp-left">
              <img
                onClick={displayCh1}
                className="ch ch1 activeCh"
                src={Pic0}
                alt=""
              />
              <img onClick={displayCh2} className="ch ch2" src={Pic1} alt="" />
              <img onClick={displayCh3} className="ch ch3" src={Pic2} alt="" />
              <img onClick={displayCh4} className="ch ch4" src={Pic3} alt="" />
              <img onClick={displayCh5} className="ch ch5" src={Pic4} alt="" />
              <img onClick={displayCh6} className="ch ch6" src={Pic5} alt="" />
              <img onClick={displayCh7} className="ch ch7" src={Pic6} alt="" />
              <img onClick={displayCh8} className="ch ch8" src={Pic7} alt="" />
              <img onClick={displayCh9} className="ch ch9" src={Pic8} alt="" />
              <img
                onClick={displayCh10}
                className="ch ch10"
                src={Pic9}
                alt=""
              />
              <img
                onClick={displayCh11}
                className="ch ch11"
                src={Pic10}
                alt=""
              />
              <img
                onClick={displayCh12}
                className="ch ch12"
                src={Pic11}
                alt=""
              />
              <img
                onClick={displayCh13}
                className="ch ch13"
                src={Pic12}
                alt=""
              />
              <img
                onClick={displayCh14}
                className="ch ch14"
                src={Pic13}
                alt=""
              />
              <img
                onClick={displayCh15}
                className="ch ch15"
                src={Pic14}
                alt=""
              />
              <img
                onClick={displayCh16}
                className="ch ch16"
                src={Pic15}
                alt=""
              />
              <img onClick={displayCh17} className="ch ch17" src={Pic16} alt="" />
              <img onClick={displayCh18} className="ch ch18" src={Pic17} alt="" />
            </div>
            
            <div className="sp-right">
              <CharacterBox
                className="CHB CHB1 activeCHB"
                img={Pic0}
                name="Abyssals"
                description="The Abyssals are quite isolated from other Specter species as they live in deep ocean crevices. Bioluminescent light shines from their lanterns, attracting prey."
              />
              <CharacterBox
                className="CHB CHB2"
                img={Pic1}
                name="Apex"
                description="The Apex, who resemble angels, live at the summits of mountains. Their wings allow them to reach incredible speeds."
              />
              <CharacterBox
                className="CHB CHB3"
                img={Pic2}
                name="Arachnids"
                description="Arachnid specters sit silently in their webs for up to weeks at a time waiting for prey to get tangled in it. Their fangs release a special toxin which is only effective against other Specters."
              />
              <CharacterBox
                className="CHB CHB4"
                img={Pic3}
                name="Awakened"
                description="Specter who obtained the phenomenal power at the cost of their own bodies. Corrupted by a demonic being, they are no longer in control of their own bodies."
              />
              <CharacterBox
                className="CHB CHB5"
                img={Pic4}
                name="Battleborn"
                description="The Battleborn thrive in the midst of battle. They willingly took place in the Great Gas War, brutally taking down their opponents, it is said that one battleborn was equal to 300 men."
              />
              <CharacterBox
                className="CHB CHB6"
                img={Pic5}
                name="Bombards"
                description="The Bombards, a species of specter who unwillingly participated in the Great Gas War. They were used in attacks on other civilizations at the cost of their own lives."
              />
              <CharacterBox
                className="CHB CHB7"
                img={Pic6}
                name="Herculians"
                description="The Herculians are known to live in the giant grass forests. They are able to carry 850 times their own body weight!"
              />
              <CharacterBox
                className="CHB CHB8"
                img={Pic7}
                name="Kikurage"
                description="The Kikurage are incredibly protective over the mushrooms that grow on their heads, which are said to be incredibly tasty."
              />
              <CharacterBox
                className="CHB CHB9"
                img={Pic8}
                name="Nox"
                description="The Nox’s specialty gas mask like helmets allow them to survive the uninhabitable wastelands left behind after the Great Gas War."
              />
              <CharacterBox
                className="CHB CHB10"
                img={Pic9}
                name="The Risen"
                description="The risen are undead specters who spend their time protecting the graves of those that have not yet risen. They have been observed guarding both tombstones and large burial sites such as pyramids."
              />
              <CharacterBox
                className="CHB CHB11"
                img={Pic10}
                name="Sakura"
                description="Sakuras, the pacifist specters. Native to Japan, the females pick their mates based on whoever finds the prettiest flower every cherry blossom season."
              />
              <CharacterBox
                className="CHB CHB12"
                img={Pic11}
                name="Savages"
                description="The Savages have existed since prehistoric times, they are always gnawing on something."
              />
              <CharacterBox
                className="CHB CHB13"
                img={Pic12}
                name="Soulful"
                description="It's said that if you make eye contact with the Soulful, your soul will be stolen.
                Their eyes and scarf eventually overflow with the souls they have hoarded
                Plants seem to wither around them.
                "
              />
              <CharacterBox
                className="CHB CHB14"
                img={Pic13}
                name="Specters"
                description="The oldest form of specter. Unable to adapt to their surroundings, they live in the homes of past civilizations."
              />
              <CharacterBox
                className="CHB CHB15"
                img={Pic14}
                name="Spellbinders"
                description="The Spellbinders spend their time isolated, studying and practicing their magic. They are able to control all four major elements, wind, water, fire , and earth. It has been recorded that they are able to control a fifth element though it seems taboo to even talk about it around them."
              />
              <CharacterBox
                className="CHB CHB16"
                img={Pic15}
                name="Tidebreakers"
                description="Tidebreakers are a semi-aquatic specter which make their homes on tropical islands. When hunting, they use their horns to pierce fish. They build their homes out of anything that washes ashore."
              />
              <CharacterBox
                className="CHB CHB17"
                img={Pic16}
                name="Ursas"
                description="Ursas are an incredibly territorial type of specter. They may allow you to pass through their claimed territory with a bribe of honey!"
              />
              <CharacterBox
                className="CHB CHB18"
                img={Pic17}
                name="Vulpes"
                description="Vulpes are sly and agile specters. They can be found in most biomes hunting small prey."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mint Section */}
      <div className="mint section" id="section3">
        <div className="box">
          <div className="mint-content">
            <h1>Specters Sold: 0/8,888</h1>
            <h1>Mint Price: 0.8 SOL</h1>
            <p>
            </p>
            <button>MINT NOW</button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq section" id="section4">
        <div className="box">
          <div className="faq-content">
            <h1>SolSpecters FAQ's</h1>
            <div className="faq-grid">
              <div className="faq-grid-left">
                <div className="faq-box">
                  <div className="faq-q q1 q" onClick={q1}>
                  1) What are SolSpecter?
                  </div>
                  <div className="faq-a a1 a">
                  SolSpecters are 8888 unique programmatically generated NFTs that are all that remains after the Great Gas 
War decimated all life on Earth. Specters have taken shape to their different regions, slowly rebuilding
what once was.
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-q q2 q" onClick={q2}>
                  2) What Wallets does SolSpecters Support?
                  </div>
                  <div className="faq-a a2 a">
                  SolSpecters minting process officially supports the Phantom Wallet! Other wallets are available if you desire but minting was tested with Phantom. 
Click here to download the Phantom Wallet https://phantom.app/
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-q q3 q" onClick={q3}>
                  3) When is the launch? How much will it cost?
                  </div>
                  <div className="faq-a a3 a">
                  Our whitelisted presale will be taking place on the 6th of October and out public sale will be on the 7th.
SolSpecters cost .8 Sol per mint.
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-q q4 q" onClick={q4}>
                  4) Where can I trade my SolSpecters?
                  </div>
                  <div className="faq-a a4 a">
                  We expected to be listed on the digitaleyes marketplace!
                  </div>
                </div>
              </div>
              <div className="faq-grid-right">
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap section" id="section5">
        <div className="box">
          <div className="roadmap-content">
            <h1>Roadmap</h1>
            <div className="roadmap-box">
              <img src={Trans1} alt="" />
              <h2>25% Sold</h2>
              <p>
                We airdrop 1 of the 10 1:1 super specters to a random owner. This specter will contain entirely unique properties and will be one-of-a-kind! 
              </p>
            </div>
            <div className="roadmap-box">
              <img src={Trans2} alt="" />
              <h2>50% Sold</h2>
              <p>
                We unravel more lore behind the specters. Where did they come from? Why are they here? What are they hiding? What are they hiding from? On top of this, we also will airdrop 1 of the coveted and highly sought after degen apes to a random holder.
              </p>
            </div>
            <div className="roadmap-box">
              <img src={Trans3} alt="" />
              <h2>75% Sold</h2>
              <p>
                We put together some dope merchandise. A design contest will be ran allowing holders to vote for the winner!
              </p>
            </div>
            <div className="roadmap-box">
              <img src={Trans3} alt="" />
              <h2>100% Sold</h2>
              <p>
                A surprise airdrop for all specter owners will take place. Who knows what awaits the soulless?
              </p>
            </div>
            <div className="roadmap-box">
              <img src={Trans2} alt="" />
              <h2>Post 100%</h2>
              <p>
                We plan for specters staying relevant for years to come. We understand that community is everything for NFTs. That is why, a portion of royalties will be funded back into the community. This includes marketing, giveaways, and other secrets we aren’t ready to reveal to you just yet. We will also begin working on the SolSpecters platformer game.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className="team section">
        <div className="box">
          <div className="team-content">
            <h1>Team</h1>
            <div className="team-grid">
              <div className="team-card">
                <img src={Pic3} alt="" />
                <h3>ᚢᛁᚱᚴᛘᛅᚦᚱ</h3>
                <h4>Artist</h4>
              </div>
              <div className="team-card">
                <img src={Pic14} alt="" />
                <h3>ᚼᚢᛋᛅᛋᛘᛁᚦᚱ</h3>
                <h4>Technologist</h4>
              </div>
              <div className="team-card">
                <img src={Pic1} alt="" />
                <h3>ᚾᛅᛘᛅᛘᛅᚦᚱ</h3>
                <h4>Community Manager</h4>
              </div>
              <div className="team-card">
                <img src={Pic7} alt="" />
                <h3>ᚢᛁᛁᚦᛁᛘᛅᚦᚱ</h3>
                <h4>Ass. Community Manager</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="box">
        <div className="footer">
          <p>Copyright © 2021 SolSpecters. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
