//import { urlFor } from '@sanity/image-url'
import { urlFor } from '../shared/Image'

import Image from 'next/image'

const main = 'border-zinc-500 grid md:grid-cols-2 2xl:grid-cols-3  lg:grid-cols-3 gap-3 md:gap-8 md:mr-16 sm:grid-cols-1 mx-4 sm:mx-24 sm:pr-6   mt-10 lg:mx-10  xl:p-10 2xl:ml-10  xs:grid-cols-1 xs:p-6'
const card = 'service shadow-lg shadow-slate-300 p-8 rounded-md group hover:-translate-y-2 transition-all duration-500'
const svg = '[&>*]:text-icon w-[55px] aspect-square group-hover:-scale-x-100 transition-all duration-500'
const title = 'mt-8 font-dosis font-bold mb-6 text-xl text-navy-700 text-left'
const p = 'font-catamaran text-[15px] text-slate-500 font-medium leading-7 text-left'
const a = "text-icon underline mt-6 block text-orange-600 font-dosis font-bold text-left"



const ItSolutions = async ({ solutions }) => {

    return (
        <div className="text-center	mt-24 text-slate-800 ">
            <h1 className="font-bold text-md text-orange-600 ">WHAT WE PROVIDE
            </h1>
            <h1 className="font-bold text-navy-900	text-4xl pt-5">IT Solutions
            </h1>
            <div className={main}>
                {solutions.map(solution => <div className={card}>
                    <div className={svg}>
                        <svg className="h-12 w-12 text-orange-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                        {/* <Image
                            src={urlFor(solution.image).width(200).url()}

                            className="w-full h-full mx-auto object-cover rounded "
                            alt="member"
                            fill
                        />    */}
                    </div>
                    <h3 className={title}>{solution.title} </h3>
                    <p className={p}> {solution.message}</p>
                    <a href="/" className={a}>
                        Read More
                    </a>

                </div>)
                }
            </div>

        </div>

    )

}
// const ItSolutions = ({ solutions }) => {
//     return (
//       <div className="text-center	mt-24 text-slate-800 ">
//         <h1 className="font-bold text-md text-orange-600 ">WHAT WE PROVIDE</h1>
//         <h1 className="font-bold text-navy-900	text-4xl pt-5">IT Solutions</h1>
//         <div className={main}>
//           {solutions.map((solution) => (
//             <div className={card}>
//               <Image
//                 src={urlFor(solution.image).width(200).url()}
//                 className="w-full h-full mx-auto object-cover rounded"
//                 alt="member"
//                 fill
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
  
export default ItSolutions