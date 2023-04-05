//passing component as prop to another component
//passing component as prop to another component

export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component. Name id {name}</div>
}
