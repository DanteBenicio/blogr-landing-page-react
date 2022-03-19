import './styles.scss';

type SectionProps = {
  title?: string
  subTitle: string
  secondarySubTitle: string
  firstDescription: string
  secondaryDescription: string
  desktopImgSrc: string
  mobileImgSrc: string
  rowReverse: boolean
}

export default function Section({
  title, subTitle, secondarySubTitle, 
  firstDescription, secondaryDescription, 
  mobileImgSrc, desktopImgSrc, rowReverse
}: SectionProps) {
  return (
    <section className="section_container">
      <main className="section_wrapper">
        {title && (
          <h2 className="section_title">{title}</h2>
        )}
        <div className={`content_container ${rowReverse ? 'row_reverse' : ''}`}>
          <div className="article_container">
            <article className="article_section">
              <h3>{subTitle}</h3>
              <p>{firstDescription}</p>
            </article>
            <article className="article_section">
              <h3>{secondarySubTitle}</h3>
              <p>{secondaryDescription}</p>
            </article>
          </div>
          <div className="section_image_wrapper">
            <img 
              src={desktopImgSrc} 
              alt="editor image for desktop"
              className="section_img desktop"
              aria-hidden="true"
            />
            <img 
              src={mobileImgSrc} 
              alt="editor image for mobile"
              className="section_img mobile"
              aria-hidden="true"
            />
          </div>
        </div>
      </main>
    </section>
  )
}