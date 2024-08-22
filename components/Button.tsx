import { ButtonPropsType } from "@/types";

export default function Button({
  styles,
  btnType,
  children,
  clicked,
}: ButtonPropsType) {
  return (
    <>
      <button className={styles} type={btnType} onClick={clicked}>
        {children}
      </button>
    </>
  );
}
