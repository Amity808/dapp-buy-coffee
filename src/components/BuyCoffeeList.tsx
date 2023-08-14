import { useState } from 'react'
import { useContractToCall } from '../hooks/useContractRead'
import Coffee from './Coffee'
// import ErrorAlert from './alerts/ErrorAlert'
// import OnSuccessAlert from './alerts/OnSuccessAlert'
// import LoadingAlert from './alerts/LoadingAlert'


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
<<<<<<< HEAD
        // setSuccess={setSuccess}
        // seError={setError}
        // setLoading={setLoading}
=======
{/*         setSuccess={setSuccess}
        seError={setError}
        setLoading={setLoading} */}
>>>>>>> cf0420f92689753e3f87a30238a887d21d43b881
        clear={clear}
        />
      )
      
    }
    return coffees
  }
  return (
    <div className='mb-3'>
<<<<<<< HEAD
      {/* {error && <ErrorAlert message={error} clear={clear} />}
=======
{/*       {error && <ErrorAlert message={error} clear={clear} />}
>>>>>>> cf0420f92689753e3f87a30238a887d21d43b881
      {success && <OnSuccessAlert message={success} />}
      {loading && <LoadingAlert message={loading} />} */}
      {/* display buyMeCoffee */}
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
            {getCoffee()}
          </div>
      </div>
    </div>
  )
}

export default BuyCoffeeList
