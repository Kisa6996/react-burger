
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

function App() {
  return (
    <>
    <AppHeader/>
    <main>
    <BurgerIngredients/>
    <BurgerConstructor/>
    </main>
    </>
  );
}

export default App;
