import '../App.css'
import cube from '../assets/cube.png'
// type Props = {}

const MinHeader = () => {
  return (
    <div className=' flex flex-row justify-around items-center max-sm:flex-col'>
        <div className=''>
            <div className='MinHeader flex justify-center p-6 '>
              <div className='innerDiv'>
                  <p className=' text-5xl text-white pt-10 font-bold text-center'>Buy Me A Coffee With Celo</p>
              </div>
            </div>
            <div className='MinHeader mt-5 flex justify-center p-6'>
              <div className='innerDiv'>
                <p className=' text-base font-semibold text-white p-2'>Odio hendrerit aliquet nam dolor eget lacus varius dictum nam. Massa vel habitasse dictum nibh quis. Varius nec ipsum accumsan phasellus sit elementum quam phasellus tristique. Sit in turpis mi lorem. Venenatis ornare mauris scelerisque malesuada sed ac sed senectus. Mauris at tellus sit risus morbi porttitor lobortis accumsan velit. Congue sollicitudin ut nunc volutpat nulla elit lobortis.</p>
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