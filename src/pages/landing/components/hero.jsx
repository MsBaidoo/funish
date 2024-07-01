import {hero} from "../../../assets"

const Hero = () => {
  return (
    <div className="flex h-screen">
<div className="w-1/2 bg-[#a1a19560] place-content-center mx-auto">

<div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-50">
  
<div className="text-4xl flex flex-col">
<span className="font-thin">Best Design of</span>
<span className="font-bold ">Jewelry Collection</span>
</div>


 <p className="w-96">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

 <button className="bg-white px-6 py-3 rounded-full drop-shadow-lg uppercase text-[#754025]">Discover</button>

</div>
</div>

<div className="w-1/2">
  <img src={hero} alt="Hero background" className="w-full h-full"/>
</div>

    </div>
  )
}

export default Hero