import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import ERC20 from '../abis/erc20InstacnceAbi.json'

import BuyCoffee from '../abis/buycoffee.json'
import { BigNumber } from 'ethers'

export const useContractToApprove = (buyMeCoffee: number | string) => {
    const gasLimit = BigNumber.from(1000000);

    // contract prepare
    const { config } = usePrepareContractWrite({
        address: ERC20.address as `0x${string}`,
        abi: ERC20.abi,
        functionName: 'approve',
        args: [BuyCoffee.address, buyMeCoffee],
        
        overrides: {
            gasLimit
        },
        onError: (err) => {
            console.log({err})
        }
    })

    const { data, isSuccess, write, writeAsync, error, isLoading} = useContractWrite(config)
    return {data, isSuccess, write,  writeAsync, isLoading}
 }