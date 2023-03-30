import state from './state.json'

function fetchData () {
  return new Promise((res, rej) => {
    res(state)
  })
}

export default fetchData
