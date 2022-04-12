import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

interface Props {
  emoji: string
  hueA: number
  hueB: number
  urls: string
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`
// const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

const food: any = [
  {
    photoWork: '/jpg/portfolio/port1.png',
    url: 'https://podiatry-victoria.vercel.app/',
  },
  // ['/jpg/portfolio/task2.png', 20, 40],
  // ['/jpg/portfolio/task3.png', 60, 90],
]

const CardWorks = () => {
  return (
    <motion.div
      className='card-container'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className='splash' style={{ background: 'gray' }} />
      <motion.div className='card' variants={cardVariants}>
        {food.map((el) => {
          return <a href={el.url}>
            <img src={el.photoWork} alt='img' />
          </a>
        })}
      </motion.div>
    </motion.div>
  )
}

export default CardWorks
