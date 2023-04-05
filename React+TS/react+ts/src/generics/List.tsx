//generic type

type ListProps<T> = {
  items: T[]
  handleClick: (value: T) => void
}

export const List = <T extends { id: number; name: string }>({
  items,
  handleClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => handleClick(item)}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
