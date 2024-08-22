import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="flex px-8 mt-8 lg:mt-0 lg:px-40 lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div className="z-30">
          <div>
            <Image src={"/assets/camp.svg"} width={50} height={20} alt="camp" />
            <h1 className="font-semibold text-6xl lg:text-8xl leading-tight">
              Putuk Truno <br /> Camp Area
            </h1>
          </div>
          <p className="mt-8 font-normal">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
          <div className="flex items-center justify-start mt-8 gap-4">
            <div className="flex items-center justify-center lg:gap-2">
              <Image
                src={"/assets/star.svg"}
                width={25}
                height={20}
                alt="star"
              />
              <Image
                src={"/assets/star.svg"}
                width={25}
                height={20}
                alt="star"
              />
              <Image
                src={"/assets/star.svg"}
                width={25}
                height={20}
                alt="star"
              />
              <Image
                src={"/assets/star.svg"}
                width={25}
                height={20}
                alt="star"
              />
              <Image
                src={"/assets/star.svg"}
                width={25}
                height={20}
                alt="star"
              />
            </div>
            <div>
              <h1 className="text-xl">
                <span className="font-semibold">198k</span> Excellent Reviews
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-start mt-12 gap-6 lg:gap-8">
            <Button styles="bg-green-500 rounded-full lg:w-auto w-full py-4 px-8 text-lg text-white font-semibold">
              Download App
            </Button>
            <Button styles="bg-none flex items-center justify-center gap-2 lg:w-auto w-full text-lg">
              <Image
                src={"/assets/play.svg"}
                width={25}
                height={20}
                alt="play"
              />
              <h1 className="font-semibold">How we work?</h1>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#292C27] z-30 lg:scale-100 scale-90 w-[20rem] h-48 rounded-xl px-6 py-6 shadow-2xl absolute top-20 text-white">
            <div>
              <h4 className="text-gray-300 font-normal">Location</h4>
              <h1 className="text-2xl text-gray-100 font-medium mt-1">
                Pakistan
              </h1>
            </div>
            <div className="flex items-center mt-8 justify-between w-full">
              <div>
                <h4 className="text-gray-300 font-normal">Distance</h4>
                <h1 className="text-2xl text-gray-100 font-medium mt-1">
                  173.28 km
                </h1>
              </div>
              <div>
                <h4 className="text-gray-300 font-normal">Elevation</h4>
                <h1 className="text-2xl text-gray-100 font-medium mt-1">
                  2.040 km
                </h1>
              </div>
            </div>
          </div>
          <Image
            src={"/assets/hero.png"}
            width={1400}
            height={900}
            alt="hero-image"
            className="lg:scale-100 scale-150 -z-20"
          />
        </div>
      </div>
    </>
  );
}
