import { useCallback, useEffect, useState} from 'react'
import { useDebounce } from'use-debounce'
import { useContractToCall } from '../hooks/useContractRead'
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'ethers/lib/utils'
// import { ethers } from 'ethers'
import { toast } from 'react-toastify'
// import { useContractToApprove } from '../hooks/useApprove'
// import { useContractSend } from '../hooks/useContractWrite'
// import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { truncateAddress } from '../utils'
// import { BigNumber } from 'ethers'


interface BuyMeCoffeInTerface {
    owner: string,
    imageUrl: string,
    name: string,
    stackRole: string,
    message: string
}

const Coffee = ({ id }: { id: any }) => {

    const { address } = useAccount();

    const { data: rawCoffee }: any = useContractToCall('coffeeDonator', [id], true)
    
    const [valueAmount, setValueAmount] = useState('');

    const [ debouncedValue ] = useDebounce(valueAmount, 500)

    // const convertValue = ethers.utils.parseEther(
    //     debouncedValue.toString() || "0"
    // )

    // const { writeAsync: buyMeCoffee } = useContractSend('buyMeCoffee', [Number(id), Number(convertValue)])

    // const { writeAsync: approve } = useContractToApprove(
    //     convertValue.toString()
    // )

    // const { openConnectModal } = useConnectModal();
    
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

    // handle the donate the coffee
    // const handleDonateasync = async () => {
    //     if (!approve || !buyMeCoffee){
    //         throw ("Failed to donate Coffee")
    //     }   
        
    //     // approve amount o spend on your behalf
    //     const approveTx = await approve();
    //     await approveTx;
    //     // await the trans
    //     toast.loading("waiting for approval")

    //     // once approve it will handle payment

    //     const res = await buyMeCoffee();
    //     // wait the transaction
    //     await res;
    // }

    // // send payment when the button is clicked
    // const donate = async (e: any) => {
    //     e.preventDefault();
    //     toast.loading("Approving")

    //     try {
    //         if(!address && openConnectModal) {
    //             openConnectModal()
    //             return;
    //         }
    //         // message to display during the process of the payment
    //         await toast.promise(handleDonateasync(), {
    //                 pending: "Awaiting Payment",
    //                 success: `Successfully donate to ${coffee.owner}`,
    //                 error: "Failed to donate, Try again "
    //             }
    //         )
    //     } catch (e) {
    //         console.log({ e });
    //         // await toast.error(e?.message || e?.message || "Something went wrong")
    //     }
    // }

    // const formatToEther = ethers.utils.formatEther(
    //     convertValue.toString()
    // )

    if (!coffee) return null;
    

    const buyer = async (e: any) => {
        e.preventDefault()
        const request = sendTransaction({
            to: coffee.owner,
            value: parseEther(debouncedValue).toBigInt(),
        })
        // toast.loading(`donating to ${coffee.owner}`)
        // return request;
        await toast.promise(request, {
            pending: `Donating to ${coffee.owner}`,
            success: `Successfully donated ${debouncedValue} celo to ${coffee.owner}`,
            error: "Failed to donate, Try again "
            })
    }


  return (
    <div className=' max-w-xs m-auto mr-3 bg-red-950/20  h-full max-sm:mt-2 text-center'>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white xl:aspect-w-7 xl:aspect-h-8 ">
          <img
            src={coffee.imageUrl}
            alt={"image"}
            className=" aspect-w-1 aspect-h-1 w-full rounded-t-md  object-cover object-center"
          />
          {/* <a href={`https://explorer.celo.org/alfajores/address/${coffee.owner}`}>{coffee.owner}</a> */}
        </div>
        <div className=''>
            <h1 className=' text-2xl font-semibold p-4 text-white'>{coffee.name}</h1>
            <p className=' text-xl text-white'>{truncateAddress(coffee.owner)}</p>
            <p className=' text-xl text-white p-2'>{coffee.message}</p>
            <p className=' text-xl text-white font-bold'>Why Buy me Coffee</p>
            <p className=' text-sm text-white p-2'>{coffee.stackRole}</p>
        </div>
        {/* donate */}
        {address == coffee.owner ? <p className=' text-xl font-bold text-white'>You can not donate for yourself</p> : (
            <div>
            <form onSubmit={buyer}>
            <div className='mb-8'>
                <input type="number" required className=' py-4 px-4 w-64 rounded-full text-black' name='valueAmount' onChange={(e) => setValueAmount(e.target.value)} id="valueAmount" placeholder='Donate celo to developer' />
            </div>
            <button className='border-y-amber-950 border-4 px-4 py-2 rounded-full text-lg hover:bg-black/50 ' type='submit'>
                Send
            </button>
            </form>
        </div>
        )}
    </div>
  )
}

export default Coffee
