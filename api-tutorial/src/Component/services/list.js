export function getList() {
  console.log('yego')
    return fetch('http://localhost:3333/list')
      .then(data => data.json())
  }
  export function setItem(item) {
    console.log('yes')
    return fetch('http://localhost:3333/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(data => data.json())
   }