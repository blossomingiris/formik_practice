import { Name } from './Person.types'

type PersonListProps = {
  characters: Name[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.characters.map((char, index) => {
        return (
          <li key={index}>
            {char.firstName} {char.lastName} {char.planet}
          </li>
        )
      })}
    </ul>
  )
}
