import './Title.scss'

const Title = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className='title'>
      <h1 className='title--primary'>
        {primaryTitle}
      </h1>
      <h3 className='title--secondary'>
        {secondaryTitle}
      </h3>
    </div>
  )
}

export default Title
