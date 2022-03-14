import { BgSquareDesktop } from "../../svgs/bg-pattern-intro-desktop";
import Button from "../Button";
import './styles.scss'

export default function SectionHero() {
  return (
    <section className="container_section_hero">
      <BgSquareDesktop />
      <main className="wrapper_section_hero">
        <h1 className="section_title">A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="wrapper_section_buttons">
          <Button text="Start for Free" primary/>
          <Button text="Learn More"/>
        </div>
      </main>
    </section>
  )
}
