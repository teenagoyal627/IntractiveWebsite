
import reactLogo from '../assests/logo.jpeg'
import './Header.css'
const reactDescription = ['Fundamental', 'Crucial', 'Core']
function genRandomInt(num) {
  return Math.floor(Math.random() * (num + 1))

}
function Header() {
    const description = reactDescription[genRandomInt(2)]
    return (
      <header>
        <img src={reactLogo} alt='logo_image' />
        <h1>React Essentials</h1>
        <p>{description} React Concepts you will meed for almost any app you are going to build !.</p>
      </header>
    )
  }
  export default Header