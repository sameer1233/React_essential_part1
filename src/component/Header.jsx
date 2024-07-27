import reactImg from '../assets/react-core-concepts.png'

const reactDescription = ["Fundamental", "Crucial", "Core"]
function getRandom (max){
     return Math.floor(Math.random() * max) 
}

export default function Header(){
  const description = reactDescription[getRandom(3)]
  return (
    <header>
    <img className='react-img' src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}