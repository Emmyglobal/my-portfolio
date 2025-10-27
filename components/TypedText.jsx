"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ✅ Load react-typed only on client, no SSR
const Typed = dynamic(() => import("react-typed"), { ssr: false });

export default function TypedText() {
  const [isClient, setIsClient] = useState(false);

  // Ensures component runs only on the client after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // fallback to static text during SSR
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
      showCursor={true}
      cursorChar="|"
    />
  );
}