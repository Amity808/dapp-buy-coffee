import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import Buyoffee from '../abis/buycoffee.json'
import { BigNumber} from 'ethers'
// import BigNumber from 'bignumber.js';


export const useContractSend = (functionName: string, args: Array<any> ) => {
    // gass limit to use when sending a transaction
    const gasLimit = BigNumber.from(1000000)
    // prepare to write to the blockage
    const { config } = usePrepareContractWrite({
        address: Buyoffee.address as `0x${string}`,
        abi: Buyoffee.abi,
        functionName,
        args,
        overrides: {
            gasLimit
        },
        onError: (err) => {
            console.log(err)
        } 
    })

    const { data, isSuccess, write, writeAsync, error, isLoading } = useContractWrite(config)
    return { data, isSuccess, write, writeAsync, isLoading}
}