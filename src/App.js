import { useState, useEffect } from 'react'
import './App.scss'
import fetchData from './data'
import List from './components/List'
import OsmMap from './components/OsmMap'

function App () {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetchData().then(data =>
      setData(
        data.pickPoints.map(it => ({
          address: it.address,
          budgets: it.budgets,
          coords: { lat: it.latitude, lng: it.longitude }
        }))
      )
    )
  }, [])

  const handleSelect = index => setIndex(index)

  return (
    <div className='container'>
      <div className='content'>
        {data.length && (
          <List items={data} onSelect={handleSelect} selIndex={index} />
        )}
        {!data.length && <div>{'no data'}</div>}
        <div
          style={{ border: '1px solid grey', position: 'relative' }}
          className='map'
        >
          {data.length && <OsmMap coords={data[index].coords} />}
        </div>
      </div>
    </div>
  )
}

export default App
