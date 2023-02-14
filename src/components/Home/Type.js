import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FRONTEND DEVELOPMENT",
          "BACKEND DEVELOPMENT",
          "FULL STACK DEVELOPMENT",
          "WEB DEVELOPMENT",
          "DEVELOPMENT",
          "I mean...",
          "Like...",
          "Okay, let's go back to the beginning"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
