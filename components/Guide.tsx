"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Guide() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", ".3 1"],
  });

  return (
    <>
      <motion.section
        className="lg:mt-10 mt-36 mb-20 px-6 lg:px-40"
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <div className="flex lg:items-center items-start justify-between lg:flex-row flex-col">
          <div>
            <Image src={"/assets/camp.svg"} width={40} alt="camp" height={20} />
            <h1 className="text-green-500 lg:text-xl text-lg">
              WE ARE HERE FOR YOU
            </h1>
            <h1 className="text-5xl leading-tight mt-4 lg:text-6xl font-bold">
              Guide You <br /> to Easy Path
            </h1>
          </div>
          <p className="text-gray-600 lg:max-w-[35rem] mt-6">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
        <div className="relative w-full rounded-lg lg:rounded-2xl mt-20">
          <Image
            src={"/assets/boat.png"}
            width={1500}
            height={1500}
            alt="boat"
            className="w-full lg:rounded-2xl rounded-lg"
          />
          <div className="flex items-start justify-start lg:gap-6 gap-2 bg-white absolute lg:left-20 left-10 lg:border-none border-t-2 -top-10 lg:top-10 lg:p-4 p-4 rounded-xl lg:w-[20rem] lg:shadow-sm shadow-lg lg:h-[15rem]">
            <Image
              src={"/assets/meter.svg"}
              width={32}
              height={50}
              alt="boat"
              className="lg:rounded-2xl rounded-lg"
            />
            <div className="flex flex-col gap-8 mt-4">
              <div className="text-green-500 absolute right-6 lg:text-lg text-sm font-semibold top-6">
                48m
              </div>
              <div>
                <h1 className="text-gray-500 text-lg lg:text-sm">
                  Destination
                </h1>
                <h1 className="lg:text-2xl text-xl font-bold lg:mt-2">
                  Pakistan, PK
                </h1>
              </div>
              <div>
                <h1 className="text-gray-500 text-lg lg:text-sm">
                  Start track
                </h1>
                <h1 className="lg:text-2xl text-xl font-bold lg:mt-2">
                  Wonorejo Pasuruan
                </h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
