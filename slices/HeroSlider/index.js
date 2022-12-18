import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliderSlice} HeroSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliderSlice>} HeroSliderProps
 * @param { HeroSliderProps }
 */
const HeroSlider = ({ slice }) => (
  <section>
    <div className='container'>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <PrismicNextImage field={slice.primary.image} />
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
    </div>
  </section>
)

export default HeroSlider