"use client";

import { useEffect } from "react";
import SmoothScrollProvider from "./scollProvider";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </body>
  );
}
