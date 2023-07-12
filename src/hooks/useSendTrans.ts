import { constants } from 'ethers'
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from 'wagmi'


export const useSendTrans =  (valueTo: string, amount: any) => {

    const { config } = usePrepareSendTransaction({
        to: valueTo,
        value: amount,
    })
}