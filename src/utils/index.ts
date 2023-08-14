export const truncateAddress = ({address}: any) => {
    if(!address) return;
    return address.slice(0, 10) + "..." + address.slice(address.length - 10, address.length)
}