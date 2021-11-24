import React, { useEffect } from "react";
import { gsap } from "gsap";

const Vision = () => {
  useEffect(() => {
    const path = document.querySelector(".vision");
    gsap.to(path, {
      duration: 20,
      strokeDasharray: 1000,
      scrollTrigger: { trigger: ".services", start: "bottom bottom" },
    });
  }, []);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="75px"
        height="75px"
        viewBox="0 0 75 75"
        enableBackground="new 0 0 75 75"
      >
        {" "}
        <path
          className="vision"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="22.9256"
          d=" M47.584,55.256H73.9V2H2.364v41.119V55.26 M2.364,67.344v5.934h44.191 M73.9,21.702H35.807 M35.807,35.394V21.702 M35.807,55.256 v-8.363 M23.776,28.855h9.75 M35.302,55.275H2.364 M46.868,73.279v-18.09 M2.364,28.855h9.749 M35.807,11.169V2.807"
        ></path>
      </svg>
    </div>
  );
};

export default Vision;
