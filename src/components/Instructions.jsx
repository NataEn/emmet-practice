import React from "react";

export default function Instructions(instructions) {
  return (
    <div>
      <p>
        here are the instructions for the exercise
        {!!instructions}
      </p>
    </div>
  );
}
