import s from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
const Header = () => {
  return (
    <div className={s.componentHeader}>
      <Head>
        <title>AlexeyGaponov</title>
        <link rel='icon' href='#!' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <h1>
        <Link href='/'>Personal</Link>
      </h1>
      <nav>
        <ul>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/workShop'>
            <li>Workshop</li>
          </Link>
          <Link href='/lore'>
            <li>Skills</li>
          </Link>
          <motion.li
            transition={{
              type: 'just',
              repeat: Infinity,
            }}
            animate={{ rotate: 2 }}
          >
            <Link href='https://t.me/g_alexey_ur'>contact me</Link>
          </motion.li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
