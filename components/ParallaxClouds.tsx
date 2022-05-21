import { useViewportScroll, useTransform } from 'framer-motion'
import Cloud from './Cloud'

export const svgURLs = {
  bluegreen: '/clouds/blue-green-gradient.svg',
  bluenavy: '/clouds/blue-navy-gradient.svg',
  bluepink: '/clouds/blue-pink-gradient.svg',
  blue: '/clouds/blue.svg',
  gray: '/clouds/gray.svg',
  gray2: '/clouds/gray2.svg',
  green: '/clouds/green-blue-gradient.svg',
  lime: '/clouds/lime.svg',
  pink: '/clouds/pink-white-graident.svg',
  purple: '/clouds/purple.svg',
}

const ParallaxClouds = ({ containerHeight }: { containerHeight: number }) => {
  const {
    // scrollYProgress,
    scrollY,
  } = useViewportScroll()

  const slow = useTransform(
    scrollY,
    [0, Math.floor(containerHeight)],
    [0, -containerHeight * 0.1]
  )

  const medium = useTransform(
    scrollY,
    [0, Math.floor(containerHeight)],
    [0, -containerHeight * 0.8]
  )

  const fast = useTransform(
    scrollY,
    [0, Math.floor(containerHeight)],
    [0, -containerHeight * 1.5]
  )

  if (!containerHeight) return null

  return (
    <div className="absolute -z-10 w-full overflow-x-auto ">
      <div className="-z-1 relative h-screen w-full">
        <Cloud speed={slow} url={svgURLs.blue} left={-50} top={-30} />
        <Cloud speed={slow} url={svgURLs.gray} right={50} top={-40} />
        <Cloud speed={fast} url={svgURLs.blue} left={-52} top={20} />
        <Cloud speed={medium} url={svgURLs.pink} right={50} top={-5} />
      </div>
      <div className="-z-1 relative h-screen w-full">
        <Cloud speed={fast} url={svgURLs.blue} left={-50} top={-30} />
        <Cloud speed={medium} url={svgURLs.bluepink} right={50} top={-40} />
        <Cloud speed={fast} url={svgURLs.bluegreen} left={-52} top={20} />
        <Cloud speed={medium} url={svgURLs.pink} right={50} top={-5} />
        <Cloud speed={slow} url={svgURLs.blue} left={-50} top={90} />
        <Cloud speed={slow} url={svgURLs.gray} right={50} top={70} />
        <Cloud speed={fast} url={svgURLs.blue} left={-52} top={120} />
        <Cloud speed={medium} url={svgURLs.pink} right={50} top={105} />
      </div>
      <div className="-z-1 relative h-screen w-full">
        <Cloud speed={fast} url={svgURLs.blue} left={-50} top={240} />
        <Cloud speed={medium} url={svgURLs.bluepink} right={50} top={250} />
        <Cloud speed={fast} url={svgURLs.bluegreen} left={-52} top={320} />
        <Cloud speed={medium} url={svgURLs.pink} right={50} top={200} />
      </div>
      <div className="-z-1 relative max-h-screen w-full">
        <Cloud speed={fast} url={svgURLs.blue} left={-50} top={240} />
        <Cloud speed={medium} url={svgURLs.bluegreen} right={50} top={250} />
        <Cloud speed={fast} url={svgURLs.pink} left={-52} top={320} />
        <Cloud speed={medium} url={svgURLs.gray} right={50} top={200} />
      </div>
    </div>
  )
}

export { ParallaxClouds }
