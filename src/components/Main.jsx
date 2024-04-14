import React from "react";

const Main = () => {
  return (
    <section className="bg-gray-50 h-[400px]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
            All Your Digital Products
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Are One Click Away.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-black">
            Start Exeploring state of the art assets Now
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
