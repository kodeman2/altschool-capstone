import Hero from '../components/Hero'
import Header from  '../components/Header'
import Main from '../components/Maintext'
function Shrty() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Main />
      <Hero />

      <p className="mb-[-60px] flex justify-center">Kodeman 2023 </p>

    </div>
  )
}

export default Shrty