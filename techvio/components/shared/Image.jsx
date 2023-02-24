
'use client'
import imageUrlBuilder from '@sanity/image-url'
import sanityConfig from 'sanity.config'

const builder = imageUrlBuilder(sanityConfig)

function urlFor(source) {
  return builder.image(source)
}
export default urlFor

// import myConfiguredSanityClient from '@sanityClient'
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(myConfiguredSanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }

