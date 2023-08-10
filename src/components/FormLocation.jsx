import getRandomNumer from "../utils/getRandomNumber"
import "./styles/FormLocation.css"

const FormLocation = ({ setIdLocation }) => {

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.inputId.value.trim()
    if (inputValue === '') {
      setIdLocation(getRandomNumer(126))
    } else {
      setIdLocation(inputValue)
    }

    e.target.inputId.value = ""
  }

  return (

    <form className="container_form" onSubmit={handleSubmit}>
      <input id="inputId" style={{ boxShadow: '1px 1px 10px' }} type="text" />
      <button style={{ backgroundColor: 'greenyellow', color: 'white' }}>Search</button>
    </form>

  )
}

export default FormLocation