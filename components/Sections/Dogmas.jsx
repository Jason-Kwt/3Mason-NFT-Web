import React from "react";

function Dogmas() {
  return (
    <section
      id="dogmas"
      className="h-screen snap-start snap-always border-2 border-red-600 lg:p-16 p-8"
    >
      <div className="h-full border-2 border-blue-400 grid lg:grid-cols-2 gap-4 grid-rows-1">
        <div className="border-2 text-white lg:grid justify-start content-end hidden">
          <h2>This is image</h2>
        </div>

        <div className="grid text-white border-2 justify-center content-center">
          <p>Dogmas area</p>
        </div>
      </div>
    </section>
  );
}

export default Dogmas;
