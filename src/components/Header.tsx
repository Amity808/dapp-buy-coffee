
import AddCoffee from './AddCoffee'

const Header = () => {
  return (
    <div className='headercolor flex flex-row justify-around p-5 items-center'>
        <div>
            <h1 className=' text-3xl font-bold cursor-pointer'>BuyCoffee</h1>
        </div>
        
        <div>
          <AddCoffee />
        </div>
    </div>
  )
}

export default Header;