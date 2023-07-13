import '../App.css'
import cube from '../assets/cube.png'
// type Props = {}

const MinHeader = () => {
  return (
    <div className=' flex flex-row justify-around items-center max-sm:flex-col'>
        <div className=''>
            <div className='MinHeader flex justify-center p-6 '>
              <div className='innerDiv'>
                  <p className=' text-5xl text-white pt-10 font-bold text-center max-sm:text-3xl'>Buy Me A Coffee With Celo</p>
              </div>
            </div>
            <div className='MinHeader mt-5 flex justify-center p-6'>
              <div className='innerDiv'>
                <p className=' text-base font-semibold text-white p-2'>
Buy Me Coffee is a decentralized application (dApp) website that aims to provide a simple and intuitive way for users to receive support and appreciation from their audience or community. The platform enables content creators, artists, developers, and other individuals to accept virtual "coffee" donations as a form of financial support.</p>
              </div>
          </div>
        </div>
        
        <div className=''>
            <img src={cube} alt="" />
        </div>
    </div>
  )
}
export default MinHeader;