import React, { useEffect } from "react";
import { gsap } from "gsap";

const Services = () => {
  useEffect(() => {
    const path = document.querySelector(".serviceSVG");
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
          className="serviceSVG"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="22.9256"
          d=" M4.288,1.725h66.424c1.409,0,2.563,1.155,2.563,2.564v66.424c0,1.41-1.153,2.563-2.563,2.563H4.288 c-1.409,0-2.563-1.152-2.563-2.563V4.289C1.725,2.88,2.879,1.725,4.288,1.725L4.288,1.725z M37.5,1.725v71.55 M8.965,8.694h21.226 v57.613H8.965V8.694L8.965,8.694z"
        ></path>{" "}
        <polygon
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="22.9256"
          points=" 44.809,8.694 66.036,8.694 66.036,24.004 44.809,24.004 44.809,8.694 "
        ></polygon>{" "}
        <polygon
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="22.9256"
          points=" 44.809,32.398 66.036,32.398 66.036,66.307 44.809,66.307 44.809,32.398 "
        ></polygon>{" "}
      </svg>
    </div>
  );
};

export default Services;
