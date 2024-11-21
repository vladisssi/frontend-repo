fetch('https://localhost:8080/endpoint')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error is ${response.status}`)
    }

    return response.json()
  })
  .then((data) => console.log(`Data/Answer from server is ${data}`))
  .catch((error) => console.error(`Error request: `, error.message))
