
import './App.css';
import IdCard from './Components/IdCard/IdCard';
import Greeting from './Components/Greeting/Greeting';
import Ramdon from './Components/Random/Random';
import BoxColor2 from './Components/BoxColor/BoxColor';


//Componentes
function App() {
  return (
    <div>
      <IdCard
        lastName='Alvarado'
        firstName='Osmar'
        gender='Male'
        height={170}
        picture=''
      />

      <IdCard
        lastName='Osmar'
        firstName='Mile'
        gender='Mile'
        height='Mile'
        picture='Mile'
      />

      <BoxColor2 r={255} g={0} b={0} />
      <BoxColor2 r={155} g={25} b={130} />


    </div>

  )

}

export default App;
