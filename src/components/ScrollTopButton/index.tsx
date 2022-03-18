import { MutableRefObject } from 'react';
import { ArrowDark } from '../../svgs/icon-arrow-dark';
import { ArrowLight } from '../../svgs/icon-arrow-light'
import './styles.scss';

type ScrollTopProps = {
  reference: MutableRefObject<HTMLDivElement | null>
}

export default function ScrollTopButton({ reference}: ScrollTopProps) {
  return (
    <div className="progress" ref={reference} onClick={() => scrollTo({ top: 0 })}>
      <span className="progress_value">
        <ArrowLight />
        <ArrowDark />
      </span>
    </div>
  )
}
