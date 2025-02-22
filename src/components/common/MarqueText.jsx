import React from "react";
import { notifications } from "../../utils/common-utils";

const MarqueeText = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {notifications.map((notification, index) => (
          <a key={index} className={`marquee-text ${index%2==0?("text-[#007300]"):"text-[#087BFF]"}`} href="#">
            {notification}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
