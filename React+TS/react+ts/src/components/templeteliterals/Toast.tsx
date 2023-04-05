/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'right' | 'center'
type VerticalPosition = 'top' | 'bottom' | 'center'
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast notification position - {position}</div>
}
