export interface ButtonPropsType {
    children: React.ReactNode
    styles: string,
    btnType?: "button" | "submit"
    clicked?: () => void
}