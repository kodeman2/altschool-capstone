
import scis from '../assets/scis.svg'
function main() {
  return (
    <div className="flex flex-col lg:flex-row px-2 lg:px-[100px] justify-between">

    <div className="flex flex-col  lg:w-1/2  text-center">
     <p className='text-7xl  font-bold'>A simple App but a powerfull tool for <span className="text-[#f16456]">you</span>!</p>
      <p className="text-2xl mt-10">shrty is a URL shortening service that allows users to shorten long URLs to a more manageable length. It also allows users to track the number of times a shortened URL has been clicked.</p>
    </div>
    <div className="flex justify-center lg:w-1/2">
    <img src={scis} alt="scis" className="w-[400px] h-[400px]"/>
      </div>
    </div>
  )
}

export default main