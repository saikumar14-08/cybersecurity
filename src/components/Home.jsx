import React from "react";
import { Link } from "react-router-dom";
import InstaImage from ".././assets/InstaImage.jpg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <h3>This has been developed to educate users to find and avoid some of social engineering attacks as part of graduate project </h3>
        <div className="relative overflow-hidden absolute inset-0 w-full sm:my-5 sm:pt-1 pt-12 h-full ">
          <img
            src={InstaImage}
            alt="image1"
          />
        </div>
    </div>
  );
}
