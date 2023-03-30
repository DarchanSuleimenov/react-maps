import './ListItem.scss'

function ListItem ({ address, budgets, onClick, style }) {
  return (
    <div className='item' onClick={onClick} style={style}>
      <span className='address'>{address}</span>
      <div className='bag'>
        {budgets.map(it => (
          <span className='tag' key={it}>
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ListItem
