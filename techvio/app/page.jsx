import Hero from "../components/index/Hero"
import ItSolutions from "@/components/index/ItSolutions"
import Skills from "@/components/index/Skills"
import ChooseUs from "@/components/index/ChooseUs"
import 'aos/dist/aos.css';

// import { useEffect } from 'react'
// import { use } from 'react'

// import Solutions from "../components/index/Solutions"
// import AboutUs from "../components/index/AboutUs"
// import Statics from "../components/index/Statics"
// import ChooseUs from "../components/index/ChooseUs"
// import Testimonial from "../components/index/Testimonial"
// import TrustUs from "../components/index/TrustUs"
// import Members from "../components/index/Members"
// import Blogs from "../components/index/Blogs"
// import Collaboration from "../components/index/Collaboration"
// import Customers from "../components/index/Customers"
// import Colleuges from "../components/index/Colleuges"


const getData = async (type) => {
    const projectId = 'q8l0xi0c'
    const dataset = 'production'

    const query = encodeURIComponent(`*[_type == "${type}"]`)
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
    const response = await fetch(url)
    const data = (await response.json()).result
    return data
}

const Home = async () => {
    
    const members = await getData('member')
    const blogs = await getData('blog')
    const customers = await getData('customer')
    const solutions = await getData('solution')

    return (

        <div>
            <Hero />
            <ItSolutions solutions={solutions} />
            <Skills />
           <ChooseUs />
            {/* <TrustUs />
            <Statics />
            <Collaboration />
            <Testimonial testimonials={testimonials} />
            <Members members={members} />
            <Blogs blogs={blogs} />
            <Colleuges />
            <Customers customers={customers} />
            <AboutUs />  */}
        </div>

    )
}
export default Home