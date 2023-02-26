import React from "react";
import Image from "next/image";

function Lodge() {
  return (
    <section
      id="lodge"
      className="h-screen snap-start snap-always border-2 border-red-600 lg:p-16  pl-8 pr-8 pt-16 lg:bg-[url('../../public/bg_Lodge.png')] bg-no-repeat"
    >
      <div className="h-full border-2 border-blue-400 grid lg:grid-cols-2 gap-4 grid-rows-1">
        <div className="border-2 text-white lg:grid justify-start content-end hidden"></div>

        <div className="grid text-white border-2 justify-center content-center">
          <p>Lodge area</p>
        </div>
      </div>
    </section>
  );
}

export default Lodge;
