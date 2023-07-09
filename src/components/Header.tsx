

function Header() {
  return (
    <div className="flex flex-row justify-between px-2 lg:px-[100px] py-[70px]">
      <div className="flex justify-center  ">
        <h1 className="text-4xl font-bold text-[#f16456]">SHRTY</h1>
        </div>
        <div className="flex justify-center">
         <button className="text-xl  rounded-full px-7 py-3">Login</button>
        <button className=" text-white bg-[#57989d] text-xl border-2 rounded-full px-7 hover:scale-105 transition-all duration-300">Sign Up</button>
        
         
         </div>


    </div>
  )
}

export default Header