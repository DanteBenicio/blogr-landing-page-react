import './styles.scss'

type ButtonProps = {
  text: string
  primary?: boolean
}

export default function Button({text, primary}: ButtonProps) {
  return primary ? (
    <button className="primary_btn btn">{text}</button>
  ) : (
    <button className="secondary_btn btn">{text}</button>
  )
}
