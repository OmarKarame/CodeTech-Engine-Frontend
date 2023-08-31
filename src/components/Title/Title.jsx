import './Title.scss'

const Title = ({ primaryTitle }) => {
  return (
    <div className='title'>
      <h1 className='title--primary'>
        {primaryTitle}
      </h1>
    </div>
  )
}

export default Title
