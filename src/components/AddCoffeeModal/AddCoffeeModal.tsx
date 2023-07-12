import { useState, useEffect } from 'react'
import { useAccount, useBalance } from 'wagmi'
import { useDebounce } from 'use-debounce'
import { toast } from 'react-toastify'
import { useContractSend } from '../../hooks/useContractWrite'
import ERC20 from '../../abis/erc20InstacnceAbi.json'

type Props = {}

const AddCoffeeModal = () => {
    const [toggle, setToggle] = useState(false)

    const [imagUrl, setImageUrl] = useState('')
    const [name, setName] = useState('')
    const [stackRole, setStackRole] = useState('')
    const [message, setMessage] = useState('')

    const [ debouncedImageUrl ] = useDebounce(imagUrl, 500)
    const [ debouncedName ] = useDebounce(name, 500)
    const [ deBouncedStackRole ] = useDebounce(stackRole, 500)
    const [ deBouncedMessage ] = useDebounce(message, 500)

    const [loading, setLoading] = useState('');

    //  to display balance
    const [displayBalance, setDisplayBalance] = useState(false)

    const isComplete = imagUrl && name && stackRole && message

    // clear input fields after coffee is save
    const clearForm = () => {
        setImageUrl('');
        setName('');
        setStackRole('');
        setMessage('');

    } 

    const { writeAsync: createBuyCoffee } = useContractSend("buyCoffee", [
        debouncedImageUrl,
        debouncedName,
        deBouncedStackRole,
        deBouncedMessage
    ])

    // to handle coffee creation 

    const handleCoffeeCreate = async () => {
        if (!createBuyCoffee) {
            throw "Failed to create Buy Me Coffee"
        }
        setLoading("Creating ......")

        if(!isComplete) throw new Error("Please Fill all the fields.")

        // creeta buy me a coffee to the smart contract

        const purchaseTx = await createBuyCoffee();
        setLoading("Waiting for confirm...")
        await purchaseTx.wait();

        setToggle(false)
        clearForm();
    }

    // add coffee func

    const addBuyMeCoffee = async (e: any) => {
        e.preventDefault();
        try {
            await toast.promise(handleCoffeeCreate(), {
                pending: "Creating Buy Me A Coffee",
                success: "Buy me a coffee is successfully",
                error: "Something went wrong. Try again later"
            })
        } catch (e: any) {
            console.log({ e })
            toast.error(e?.message || "Something is wrong. Try once again")
        } finally {
            setLoading('')
        }
    }

    const { address, isConnected } = useAccount();
    const { data: cUSDBalance } = useBalance({
        address,
        token: ERC20.address as `0x${string}`
    })

    useEffect(() => {
      if (isConnected && cUSDBalance) {
        setDisplayBalance(true);
        return;
      }
      setDisplayBalance(false);
    }, [cUSDBalance, isConnected])
    

  return (
    <div className='flex flex-row w-full justify-between mt-6'>
        <div>
            {/* add new buyme coffee */}
        <button onClick={() => setToggle(true)}
        type='button'
        data-bs-toggle='modalcoffee'
        data-bs-target='#exampleModalCenter'
        className=' ml-5 px-6 py-2.5 '
        >
            Buy Me Coffee
        </button>
        {/* the modal structure */}
        {toggle && (
            <div id='modalcoffee' className=' flex justify-center fixed left-0 top-0 items-center w-full h-full'>
                <form onSubmit={addBuyMeCoffee}>
                    <div className='mb-8'>
                        <input type="text" onChange={(e) => setImageUrl(e.target.value)} className=' py-4 px-6 w-full rounded-full text-black' name='imageUrl' id="imageUrl" placeholder='Image URL' />
                    </div>
                    <div className='mb-8'>
                        <input type="text" onChange={(e) => setName(e.target.value)} className=' py-4 px-6 w-96 rounded-full text-black' name="name" id="name" placeholder='Enter Your FullName' />
                    </div>
                    <div className='mb-8'>
                        <input type="text" className=' py-4 px-6 w-96 rounded-full text-black' onChange={(e) => setStackRole(e.target.value)} name="StackRole" id="StackRole" placeholder='What Stack are you' />
                    </div>
                    <div className='mb-8'>
                        <input type="text" className=' py-4 px-6 w-full rounded-full text-black' name='message' onChange={(e) => setMessage(e.target.value)} id="message" placeholder='Why buy me coffee in max-200 word' />
                    </div>
                    


                    {/* close the modal */}
                    <div className=' items-center flex justify-between'>
                        <button className=' border-y-amber-950 border-4 px-4 py-2 rounded-full text-lg hover:bg-black/50 ' type='submit' disabled={!!loading || !isComplete || !createBuyCoffee}>
                            {loading ? loading : 'Buy Me Coffee'}
                        </button>
                        <button type='button' className=' border-y-amber-950 border-4 px-4 py-2 rounded-full text-lg hover:bg-red-800/20' onClick={()=> setToggle(false)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )}
        </div>


    </div>
  )
}

export default AddCoffeeModal