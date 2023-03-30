import Item from './ListItem'
import './List.scss'

function List ({ items, onSelect, selIndex }) {
  console.log('heh', selIndex)
  return (
    <div className='list'>
      {items.map((it, index) => (
        <Item
          address={it.address}
          budgets={it.budgets}
          coords={it.coords}
          onClick={event => onSelect(index)}
          key={`${it.coords.lat}-${it.coords.lng}`}
          style={{
            boxShadow:
              selIndex === index
                ? '0px 0px 10px 5px rgba(255,255,0,0.1)'
                : 'none'
          }}
        />
      ))}
    </div>
  )
}

export default List
