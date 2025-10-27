"use client";
import React from "react";
import Typed from "react-typed"; // ✅ Default import — not { Typed }

export default function TypedText() {
  if (!Typed) return null; // ✅ Prevent "undefined" crashes

  return (
    <Typed
      strings={[
        "Nwafor Ugochukwu Emmanuel",
        "a Software Engineer",
        "an Educator",
        "a Consultant",
      ]}
      typeSpeed={80}
      backSpeed={40}
      backDelay={1500}
      loop
    />
  );
}
