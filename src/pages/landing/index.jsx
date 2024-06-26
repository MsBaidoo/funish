// react components must always start with a capital letter and if its words tigether, use pascal casing (rafce)

import Navbar from "../../components/navbar"
import About from "./components/about"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Services from "./components/services"


const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <About />
            <Collection/>

        </div>
    )
}

export default LandingPage