import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
  return (
    <>
      <div>{props.character.firstName}</div>
      <div>{props.character.lastName}</div>
      <div>{props.character.planet}</div>
    </>
  )
}
