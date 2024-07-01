import { Handshake } from "lucide-react"
import K from "../../../constants"


const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 pt-3 mt-3  px-2 with-100 pb-11">
      {
        K.SERVICES.map(
          (service, index) => {
            return <div key={index} className={''} style={{backgroundColor: service.bgColor}}>
              <span className="box-border rounded-full w-[60px] h-[60px] justify-center items-center"><Handshake /></span>

              <h3>{service.title}</h3>
              <p>{service.discription}</p>

            </div>
          }
        )
      }
    </div>
  )
}

export default Services