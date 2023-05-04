
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { useEffect, useState } from 'react';

function App() {
  const ApiUrl = "https://norma.nomoreparties.space/api/ingredients"
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    fetch(ApiUrl)
    .then((res) => res.json())
    .then((data) => setData(data.data))
    .catch((error) => setError(error.message))
    .finally(() => setIsLoading(false))
  }, [])
  if (error) {
    return(<h1 className="text text_type_main-large">Error: {error}</h1>)
  }

  return (
    <>
    <AppHeader/>
    { isLoading?  (
      <h1 className="text text_type_main-large"> Loading...</h1>
    ):
    (<main>
    <BurgerIngredients data={data}/>
    <BurgerConstructor data={data}/>
    </main>)
    }
    </>
  );
}

export default App;
