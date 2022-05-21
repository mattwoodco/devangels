import { motion, MotionValue, useMotionValue } from 'framer-motion'
import Image from 'next/image'

export interface CloudProps {
  speed: MotionValue<number>
  url: string
  left?: number
  right?: number
  top?: number
  opacity?: number
}

export default function Cloud({
  speed,
  url,
  left,
  right,
  top = 0,
  opacity = 20,
}: CloudProps) {
  return (
    <motion.div
      className="absolute flex aspect-[1.28] w-full justify-end"
      style={{
        y: speed,
        x: `${right ? `${right}vw` : left ? `${left}vw` : ''}`,
        opacity: `${opacity / 100}`,
      }}
    >
      <div
        className="h-full w-full scale-50"
        style={{ marginTop: top ? `${top}vh` : 0 }}
      >
        <Image src={url} alt="a cloud" layout="fill" />
      </div>
    </motion.div>
  )
}
