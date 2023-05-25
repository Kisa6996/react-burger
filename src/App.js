import "./App.css";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </>
  );
}

export default App;
