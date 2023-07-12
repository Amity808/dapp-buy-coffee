import { useState } from 'react'
import { useContractToCall } from '../hooks/useContractRead'
import Coffee from './Coffee'
import ErrorAlert from './alerts/ErrorAlert'
import OnSuccessAlert from './alerts/OnSuccessAlert'
import LoadingAlert from './alerts/LoadingAlert'


const BuyCoffeeList = () => {

  const { data } = useContractToCall("getBuyCoffeeLenght", [], true)

  const coffeeLenght = data? Number(data.toString()) : 0;
  // state of errors

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState('');


  // function to clear error

  const clear = () => {
    setError('');
    setSuccess('');
    setLoading('');
  };

  const getCoffee = () => {
    // if the buyMeCoffee is null 
    if(!coffeeLenght) return null;
    const coffees = [];
    // loop through the data of coffee

    for (let index = 0; index < coffeeLenght; index++) {
      coffees.push(
        <Coffee 
        key={index}
        id={index}
        setSuccess={setSuccess}
        seError={setError}
        setLoading={setLoading}
        clear={clear}
        />
      )
      
    }
    return coffees
  }
  return (
    <div className=' mb-3'>
      {error && <ErrorAlert message={error} clear={clear} />}
      {success && <OnSuccessAlert message={success} />}
      {loading && <LoadingAlert message={loading} />}
      {/* display buyMeCoffee */}
      <div className=' flex flex-wrap gap-6 mb-3'>
          <div className='flex-shrink-0 flex-grow-0 w-250 flex max-sm:flex-col'>
            {getCoffee()}
          </div>
      </div>
    </div>
  )
}

export default BuyCoffeeList