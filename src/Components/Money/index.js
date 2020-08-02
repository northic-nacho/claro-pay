/* eslint-disable no-undef */
/* eslint-disable radix */
import React, { useRef, useEffect, useState } from "react";

const Money = () => {
  const moneyElementRef = useRef(null);

  const [moneyValue, setMoneyValue] = useState("85.00");

  useEffect(() => {
    let previousPercentage = 100;

    const calculateMoneyValueFromScrollProgress = () => {
      const parallaxProgressAttribute =
        moneyElementRef.current.attributes["parallax-progress"];

      if (!parallaxProgressAttribute) return;

      const percentage = parseInt(
        parallaxProgressAttribute.value.substring(0, 2)
      );

      if (percentage > 0 && Math.abs(previousPercentage - percentage) > 4) {
        previousPercentage = percentage;
        const whole = percentage * 3;
        const decimals = Math.floor(Math.random() * 10) * 10;
        const money = `${whole}.${decimals}`;
        setMoneyValue(money);
      }
    };

    window.addEventListener("scroll", calculateMoneyValueFromScrollProgress);

    return () =>
      window.removeEventListener(
        "scroll",
        calculateMoneyValueFromScrollProgress
      );
  }, []);

  return (
    <div className="screen-money">
      <h4 className="text-money">
        <span
          ref={moneyElementRef}
          id="dinero-celular"
          parallax="screen-circle"
        >
          <small>$</small>
          {moneyValue}
        </span>
      </h4>
    </div>
  );
};

export default Money;
