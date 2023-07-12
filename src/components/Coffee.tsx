import { useCallback, useEffect, useState} from 'react'
import { useDebounce } from'use-debounce'
import { useContractToCall } from '../hooks/useContractRead'
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'ethers/lib/utils'


interface BuyMeCoffeInTerface {
    owner: string,
    imageUrl: string,
    name: string,
    stackRole: string,
    message: string
}

const Coffee = ({ id }: any) => {

    const { data: rawCoffee }: any = useContractToCall('coffeeDonator', [id], true)

    const [valueAmount, setValueAmount] = useState('');

    const [ debouncedValue ] = useDebounce(valueAmount, 500)
    
    const [coffee, setCoffee] = useState<BuyMeCoffeInTerface | null>(null)


    const getFormatedCoffees = useCallback(() => {
        if(!rawCoffee) return null;
        setCoffee({
            owner: rawCoffee[0],
            imageUrl: rawCoffee[1],
            name: rawCoffee[2],
            stackRole: rawCoffee[3],
            message: rawCoffee[4]
        })
    }, [rawCoffee]);

    // getFormatedCoffees when the state change in coffee
    useEffect(() => {
      getFormatedCoffees();
    }, [getFormatedCoffees])

    if (!coffee) return null;
    

    const buyer = (e: any) => {
        e.preventDefault()
        const request = sendTransaction({
            to: coffee.owner,
            value: parseEther(debouncedValue).toBigInt(),
        })
        return request
    }


  return (
    <div className=' max-w-xs m-auto mr-3 bg-red-950/20  h-full max-sm:mt-2'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white xl:aspect-w-7 xl:aspect-h-8 ">
          <img
            src={coffee.imageUrl}
            alt={"image"}
            className=" aspect-w-1 aspect-h-1 w-full rounded-t-md  object-cover object-center"
          />
          {/* <a href={`https://explorer.celo.org/alfajores/address/${coffee.owner}`}>{coffee.owner}</a> */}
        </div>
        <div className=''>
            <h1 className=' text-2xl p-4 text-white'>{coffee.name}</h1>
            <p className=' text-lg text-white p-2'>{coffee.stackRole}</p>
            <p>Why Buy me Coffee</p>
            <p className=' text-lg text-white p-2'>{coffee.message}</p>
        </div>
        {/* donate */}
        <div>
            {/* <form onClick={donateCoffee}>
            <div className='mb-8'>
                <input type="number" value={debouncedValue} className=' py-4 px-4 w-64 rounded-full text-black' name='valueAmount' onChange={(e) => setValueAmount(e.target.value)} id="valueAmount" placeholder='Enter Value in cUSD numbers only' />
            </div>
            <button className='border-y-amber-950 border-4 px-4 py-2 rounded-full text-lg hover:bg-black/50 ' >
                Buy Me a Coffee
            </button>
            </form> */}
            <form onClick={buyer}>
            <div className='mb-8'>
                <input type="number" value={debouncedValue} className=' py-4 px-4 w-64 rounded-full text-black' name='valueAmount' onChange={(e) => setValueAmount(e.target.value)} id="valueAmount" placeholder='Enter Value in cUSD numbers only' />
            </div>
            <button className='border-y-amber-950 border-4 px-4 py-2 rounded-full text-lg hover:bg-black/50 ' >
                Sent
            </button>
            </form>
        </div>
    </div>
  )
}

export default Coffee