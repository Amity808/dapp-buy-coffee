import { useContractRead } from 'wagmi'
import BuyCoffee from '../abis/buycoffee.json'

export const useContractToCall = (functionName: string, args?: Array<any>, watch?: boolean, from?:`0x${string}` | undefined) => {
    const resp = useContractRead({
        address: BuyCoffee.address as `0x${string}`,
        abi: BuyCoffee.abi,
        functionName: functionName,
        args,
        watch,
        onError: (err) => {
            console.log({ err })
        }

    })

    return resp
}