import './App.css'
import NavBar from './components/NavBar/NavBar'
import promo from './assets/promo.png'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (  
    
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a mi primer Proyecto de React"}/> 
      <img src={promo} alt="" width={1500} />
    </div>
  )
}

export default App
