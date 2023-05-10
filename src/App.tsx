import "./App.css";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { useEffect, useState, useReducer } from "react";
import getIngredients from "./utils/burger-api";
import {
  BurgerContext,
  DataContext,
  BreadContext,
  PriceContext,
  NumberContext,
} from "./context/contex-app";

const initialState: never[] = [];
function reducer(
  state: any,
  action: {
    [x: string]: number | undefined;
    info: any;
    type: any;
    price: any
  }
) {
  let arr: any[] = [];
  switch (action.type) {
    case "add":
      arr.push(action.info);
      return [...state, ...arr];
    case "remove":
      arr = state
      arr = arr.filter((value) => (value !== action.info ));
      return arr;
    default:
      return state;
  }
}
function App() {
  const [data, setData] = useState([]);
  const bread = useState([]);
  const price = useState(0);
  const number = useState(0);
  const burger = useReducer(reducer, initialState);

  const ApiUrl = "https://norma.nomoreparties.space/api/ingredients";
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIngredients(ApiUrl, setError)
      .then((data) => {
        setData(data.data);
        bread[1](data.data[0]);
        price[1](data.data[0].price * 2);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1 className="text text_type_main-large">Error: {error}</h1>;
  }
  return (
    <>
      <AppHeader />
      {isLoading ? (
        <h1 className="text text_type_main-large"> Loading...</h1>
      ) : (
        <DataContext.Provider value={data}>
          <BreadContext.Provider value={bread}>
            <BurgerContext.Provider value={burger}>
              <PriceContext.Provider value={price}>
                <NumberContext.Provider value={number}>
                  <main>
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </main>
                </NumberContext.Provider>
              </PriceContext.Provider>
            </BurgerContext.Provider>
          </BreadContext.Provider>
        </DataContext.Provider>
      )}
    </>
  );
}

export default App;
