import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen snap-start snap-always border-2 border-red-600 lg:p-16 pl-8 pr-8 pt-16"
    >
      <div className="h-full border-2 border-blue-400 grid grid-cols-1 gap-4 grid-rows-3">
        <div className="border-2 grid  justify-center content-center row-span-2">
          <h1 className="text-white md:text-9xl text-5xl ">III MASON</h1>
        </div>
        <div
          className="border-2 grid justify-center content-start
        "
        >
          <div className="hidden md:grid grid-cols-2 lg:gap-x-60 md: gap-24">
            <div className="text-white md:text-3xl">MASONS IN WEB 3</div>
            <div className="text-white md:text-3xl">IN TRUST WE BUILD</div>
          </div>
        </div>
        <div className="hidden md:grid border-2 text-white justify-center content-center">
          UNLOCK YOUR NRE BUSINESS IDENTITY
        </div>
      </div>
    </section>
  );
}

export default Hero;
