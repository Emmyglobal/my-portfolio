"use client";
import React, { useEffect, useState } from "react";

export default function TypedText() {
  const [Typed, setTyped] = useState(null);

  useEffect(() => {
    // Load react-typed only in browser
    import("react-typed")
      .then((mod) => setTyped(() => mod.default))
      .catch((err) => console.error("Failed to load react-typed:", err));
  }, []);

  if (!Typed) {
    // ✅ Fallback text while loading (prevents blank H1)
    return <span>Nwafor Ugochukwu Emmanuel</span>;
  }

  return (
    <Typed
      strings={[
        "Nwafor Ugochukwu Emmanuel",
        "a Software Engineer",
        "an Educator",
        "a Consultant",
      ]}
      typeSpeed={70}
      backSpeed={40}
      backDelay={1500}
      loop
      showCursor
      cursorChar="|"
    />
  );
}
