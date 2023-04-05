import { useRef, useEffect } from 'react'

//focus input when component mounted
export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={inputRef}></input>
    </div>
  )
}

//with type assertion
// export const DomRef = () => {
//   const inputRef = useRef<HTMLInputElement>(null!)

//   useEffect(() => {
//     inputRef.current.focus()
//   }, [])

//   return (
//     <div>
//       <input type='text' ref={inputRef}></input>
//     </div>
//   )
// }
