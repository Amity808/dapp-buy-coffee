

const SendTx = () => {
  return (
    <div>
            <form >
            <div className='mb-8'>
                <input type="number" className=' py-4 px-4 w-64 rounded-full text-black' name='valueAmount' id="valueAmount" placeholder='Enter Value in cUSD numbers only' />
            </div>
            <button className='border-y-amber-950 border-4 px-4 py-2 rounded-full text-lg hover:bg-black/50 ' >
                Buy Me a Coffee
            </button>
            </form>
        </div>
  )
}

export default SendTx