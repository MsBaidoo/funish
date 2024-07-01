// react components must always start with a capital letter and if its words tigether, use pascal casing (rafce)


import About from "./components/about"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Productionflows from "./components/productionflows"
import Services from "./components/services"
import Technicalstats from "./components/technicalstats"
import Testimonials from "./components/testimonials"


const LandingPage = () => {
    return (
        <div>
          
            <Hero/>
            <Services/>
            <About />
            <Collection/>
            <Technicalstats/>
            <Testimonials/>
            <Productionflows/>
            

        </div>
    )
}

export default LandingPage