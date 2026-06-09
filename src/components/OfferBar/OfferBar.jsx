import { useState } from "react";
import "./OfferBar.css";

function OfferBar() {
  const [offer] = useState({
    oldPrice: "Rs69,999",
    newPrice: "Rs47,999",
  });

  return (
    <section className="offer-bar">
      <p>
        Starting at
        <span className="old-price">
          {offer.oldPrice}
        </span>

        {offer.newPrice}.

        Hurry! Offer ends soon.
      </p>
    </section>
  );
}

export default OfferBar;