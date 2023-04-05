type InputProps = {
  value: string
  //1 approach
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
  //2 approach
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return <input type='text' value={value} onChange={handleChange} />
}
