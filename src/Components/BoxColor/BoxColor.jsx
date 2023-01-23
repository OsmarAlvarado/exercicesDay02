import './BoxColor.css';


const BoxColor2 = ({ r, g, b }) => {

  return (
    <div className='colorBox' style={{ backgroundColor: `rgb(${r},${g},${b})` }}>

    </div>
  )
}

export default BoxColor2