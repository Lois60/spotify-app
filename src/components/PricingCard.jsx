import { Buttons } from "../components/Buttons.jsx";
import "./PricingCard.css"
export const PricingCard = ({buttons, title, price, text, storage1, storage2, storage3, storage4, storage5, term,button})=>{
    return(
< section className="PricingCard">
    <div className="pricing-wrapper">
    <button className="card-btn">{button}</button>
    <br/>
    <br/>
<button className = "trans-btn "variant="bgTrans">One-time plans available</button>

<p className="card-title">{title}</p>
<p className="card-price">{price}</p>
<p className="card-text">{text}</p>
<p className="card-border"></p>
<div className="card-container">
<div className="card-features">
    <div className="card-storage">{storage1}</div>
    <div className="card-storage">{storage2}</div>
    <div className="card-storage">{storage3}</div>
    <div className="card-storage">{storage4}</div>
    <div className="card-storage">{storage5}</div>
    <button className="black-blackbtn" variant="bgBlack">View Plans</button>
    </div>
</div>
  <a href="#" className="card-terms">{term}</a>
</div>
</section>

    );
};