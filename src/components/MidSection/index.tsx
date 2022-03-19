import './styles.scss';

export default function MidSection() {
  return (
    <section className="mid_section_container">
      <main className="mid_section_wrapper">
        <div className="images_wrapper">
          <img 
            src="assets/illustration-phones.svg" 
            alt="phones image"
            className="phones_image"
            aria-hidden="true"
          />
          <img 
            src="assets/bg-pattern-circles.svg" 
            alt="phones image"
            className="purple_circle"
            width="300" 
            height="300"
            aria-hidden="true"
          />
        </div>
        <div className="content_wrapper">
          <h2 className="mid_section_title">State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </main>
    </section>
  )
}
