import "./App.css";
import UpiLogo from "../app/assets/images/UpiLogo.png";
import paytmLogo from "../app/assets/images/paytmLogo.png";
import visaLogo from "../app/assets/images/visaLogo.png";
import masterLogo from "../app/assets/images/masterLogo.png";
import amexLogo from "../app/assets/images/amexLogo.png";
import dinersLogo from "../app/assets/images/dinersLogo.png";
import AdFree from "../app/assets/images/AdFree.png";
import OffPlaay from "../app/assets/images/OffPlay.png";
import PlayEvery from "../app/assets/images/PlayEvery.png";
import PayWay from "../app/assets/images/PayWay.png";
import { LandingPageHeader } from "../components/LandingPageHeader.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { Features } from "../components/Features.jsx";
import { PricingCard } from "../components/PricingCard.jsx";

// import { Buttons } from "../components/Buttons.jsx";

export function App() {
  const features = [
    {
      image: AdFree,
      heading: "Ad-free music listening",
      paragraph: "Enjoy uninterrupted music",
    },

    {
      image: OffPlaay,
      heading: "Offline playback",
      paragraph: "Save your data by listening offline.",
    },

    {
      image: PlayEvery,
      heading: "Play everywhere",
      paragraph: "Listen on your speakers, TV, and other favorite devices.",
    },

    {
      image: PayWay,
      heading: "Pay your way",
      paragraph: "Prepay with Paytm, UPI, and more.",
    },
  ];

  const pricing = [
    {
      plan: "Main",
    },
  ];

  return (
    <>
      <LandingPageHeader />
      <HeroSection />
      <h2 className="powerHeading"> The Power of Premium</h2>
      <div className="list">
        {features.map((feature) => (
          <div className="items">
            <Features
              imageSrc={feature.image}
              heading={feature.heading}
              paragraph={feature.paragraph}
            />
          </div>
        ))}
      </div>
      <section className="pricing-header">
        <div className="pricing-container">
          <h2>Choose your Premium</h2>
          <p className="listen">Listen without limits on your phone, speaker, and other devices.</p>
          <div className="pricing-logos">
            <img src={UpiLogo }/>
            <img src={paytmLogo }/>
            <img src={visaLogo}/>
            <img src={masterLogo }/>
            <img src={amexLogo}/>
            <img src={ dinersLogo}/>
            
          </div>

          <div className="pricing-cards">
            <PricingCard
              title="Mini"
              price="From ₹7/day"
              text="1 account on mobile only"
              storage1=" ✔︎ Ad-free music listening on mobile
           "
              storage2="  ✔︎ Group Session"
              storage3="  ✔︎ Download 30 songs on 1 mobile device"
              term="Terms and conditions apply."
            />

            <PricingCard
              title="Individual"
              price="₹119/month after offer period"
              text="1 account"
              button=" 1 month free"
              storage1="  ✔︎ Ad-free music listening"
              storage2="  ✔︎ Group Session"
              storage3="  ✔︎ Download 10k songs/device on 5 devices"
              term="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
            />

            <PricingCard
              title="Duo"
              price="₹149/month after offer period"
              text="2 account"
              button=" 1 month free"
              storage1="  ✔︎ For couples who live together"
              storage2="  ✔︎    Ad-free music listening"
              storage3="  ✔︎   Group Session"
              storage4="  ✔︎ Download 10k songs/device, on 5 devices per account"
              term="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
            />

            <PricingCard
              title="Family"
              price="₹179/month after offer period"
              text="Up to 6 accounts"
              button=" 1 month free"
              storage1="  ✔︎  For family who live together"
              storage2="  ✔︎  Block explicit music"
              storage3="  ✔︎   Ad-free music listening"
              storage4="  ✔︎ Group Session"
              storage5=" ✔︎ Download 10k songs/device on 5 devices"
              term="Terms and conditions apply. 1 month free not available for users who have already tried Premium."
            />
          </div>
         
          <div class="footer-before">
  <span class="card-after">
    <div class="content-wrapper">
      <p>Special discount for eligible students in university</p>
      <button class="footer-btn" variant="bgBlack">LEARN MORE</button>
    </div>
  </span>
</div>
          </div>
      
      </section>
      <Footer/>
    </>
  );
}
