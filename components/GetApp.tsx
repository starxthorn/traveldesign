import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button styles="flex items-center justify-center gap-2 py-4 rounded-full w-[18rem] font-semibold text-green-500 bg-white border-white border-2">
              <Image
                src={"/assets/apple.svg"}
                width={20}
                height={20}
                alt="apple"
              />
              App Store
            </Button>
            <Button styles="rounded-full w-[18rem] font-semibold flex items-center justify-center gap-2 border-gray-200 bg-green-900 px-8 py-5 text-white">
              <Image
                src={"/assets/android.svg"}
                width={20}
                height={20}
                alt="apple"
              />
              Play Store
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/assets/phones.png"
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
