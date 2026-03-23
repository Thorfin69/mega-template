import React from "react";
import Component1440WLight from "./components/Desktop1440";
import Component380WLight from "./components/Mobile380";

export function NomadDarkPremiumPage() {
  return (
    <>
      {/* Desktop layout — visible at ≥1024px */}
      <div className="hidden lg:block w-full">
        <div className="relative w-[1440px] mx-auto" style={{ height: "7400px" }}>
          <Component1440WLight />
        </div>
      </div>

      {/* Mobile layout — visible at <1024px */}
      <div className="block lg:hidden w-full">
        <div className="relative w-[380px] mx-auto" style={{ height: "11500px" }}>
          <Component380WLight />
        </div>
      </div>
    </>
  );
}
