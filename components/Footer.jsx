import React from "react";

function Footer() {
  return (
    <section
      id="footer"
      className="h-screen snap-start snap-always border-2 border-red-600 lg:p-16 p-8"
    >
      <div className="h-full border-2 border-blue-400 grid grid-cols-1 gap-4 grid-rows-1">
        <div className="border-2 grid justify-center content-center ">
          <h2 className="text-white text-4xl">This is image</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;
