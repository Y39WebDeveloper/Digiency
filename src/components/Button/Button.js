import './Button.css'

const PrimaryButton = (props) => {
  return (
    <a href='./' className='btn btn-primary'>{props.children}</a>
  )
}
const SecondaryButton = (props) => {
  return (
      <a href='./' className='btn btn-secondary'>{props.children}</a>
  )
}

export default PrimaryButton
export { SecondaryButton }