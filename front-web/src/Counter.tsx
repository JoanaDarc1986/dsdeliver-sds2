function Counter(){
  const handleIncrease = () => {
    console.log('incrementar') 
    }

  const handleDecrease = () => {
    console.log('Decrementar')
    }

  return (
    <div>
        <button onClick={handleIncrease}>Incrementar</button>
        <button onClick={handleDecrease}>Decrementar</button>
        <h1>Valor do contador: 0</h1>

    </div>
    )
}

export default Counter;