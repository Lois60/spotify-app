import "./HeroSection.css";
import { Buttons } from "../components/Buttons.jsx";

export const HeroSection = ({
  title = "Get Premium free for 1 month",
  subtitle = "Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.",
}) => {
  return (
    <section className="hero">
      <div className="hero-items">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Buttons variant="bgBlack">GET STARTED</Buttons>
        <Buttons variant="bgTrans">SEE OTHER PLANS</Buttons>

        <p>
          <a href="#/Terms">Terms and conditions apply</a>. 1 month free not
          available for users who have already tried Premium.
        </p>
      </div>
    </section>
  );
};
