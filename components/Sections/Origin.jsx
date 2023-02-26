import React from "react";
import Image from "next/image";
import origin_image_01 from "../../public/origin_image_01.png";

function Origin() {
  return (
    <section
      id="origin"
      className="h-screen snap-start snap-always border-2 border-red-600 lg:p-16  pl-8 pr-8 pt-16 lg:bg-[url('../../public/bg_Origin.png')] bg-no-repeat"
    >
      <div className="h-full border-2 border-blue-400 grid lg:grid-cols-8 gap-8 grid-rows-1 overflow-hidden">
        {/* lg screen div */}
        <div className="border-2 text-white lg:grid justify-start content-end hidden"></div>
        {/* lg only */}
        <div className="lg:grid text-white border-2 justify-start content-end lg:col-span-7 ">
          <div className="h-full border-2 border-red-300 grid grid-cols-1 lg:grid-cols-2">
            <div className=" border-2 border-purple-500 grid justify-start content-center pt-32">
              <h2 className="text-4xl">The legend of IIImasons</h2>
              <p className="md:text-md pt-8 text-xs">
                In the wilds of blockchain, where desire runs rampant, the vast
                desert is prime hunting ground for beasts lurking within...
                Under the Full Moon, wolves move forward amidst the swirling
                dust of greed and fear. 3MASONS inherits the wisdom of the wolf,
                symbolizing the "descendants of wolves" and embodying the spirit
                of the strong who fight against destiny. A group of
                battle-scarred Web3 builders with high integrity gather together
                to face each storm of crypto with tenacity and resilience..
              </p>
            </div>
            <div className="border-4 border-purple-500 grid">
              <Image alt="" unoptimized src={origin_image_01} width={900} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Origin;
