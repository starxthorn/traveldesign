import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Button from "./Button";

export default function Sidebar(props: any) {
  return (
    <>
      <div
        className={`${
          props.isMenu ? "flex" : "hidden"
        } w-full fixed z-50 inset-0 bg-white pt-40 justify-center text-center`}
      >
        <div>
          <Image
            onClick={() => props.isMenu(false)}
            src={"/assets/close.png"}
            width={30}
            height={30}
            alt="close"
            className="absolute right-8 top-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-6 font-bold text-2xl">
          {NAV_LINKS?.map((item) => {
            return (
              <>
                <li className="cursor-pointer hover:tracking-wide transition-all">
                  {item.label}
                </li>
              </>
            );
          })}
          <Button styles="flex items-center justify-center gap-3 bg-black text-white rounded-full py-4 font-medium text-lg">
            <Image src={"/assets/user.svg"} width={25} height={20} alt="user" />
            Login
          </Button>
        </ul>
      </div>
    </>
  );
}
