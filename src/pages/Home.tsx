import { useState } from 'react'
import Footer from '../components/Footer'
import MidSection from '../components/MidSection'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import SectionHero from '../components/SectionHero'
import Sidebar from '../components/Sidebar'
import { content1, content2 } from '../content'

export default function Home() {
  const [burger, setBurger] = useState<boolean>(false);
  const scrollTopElementRef = useRef<HTMLDivElement | null>(null)

  const toggleBurgerValue = () => setBurger(prevBurgerValue => !prevBurgerValue);

  window.addEventListener('scroll', () => showScrollTopButton(scrollTopElementRef.current!))
    
  return (
    <>
      {burger && <Sidebar burger={burger} toggleBurgerValue={toggleBurgerValue}/>}
      <Navbar burger={burger} toggleBurgerValue={toggleBurgerValue}/>
      <ScrollTopButton reference={scrollTopElementRef!}/>
      <SectionHero />
      <Section {...content1}/>
      <MidSection />
      <Section {...content2}/>
      <Footer />
    </>
  )
}
