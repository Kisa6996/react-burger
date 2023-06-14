import styles from "./burger-ingredients.module.css";
import MyTab from "../my-tab/my-tab";
import Cards from "../cards/cards";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../services/actions/data";

function BurgerIngredients() {
  let bread, sauce, stuffing;

  const { data, dataRequest, dataFailed } = useSelector(
    (state) => state.dataReducer
  );
  const Api_URL = "https://norma.nomoreparties.space/api/ingredients";
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("data") === null || dataRequest) {
      dispatch(getData(Api_URL));
    }
  }, [dispatch, dataRequest]);

  if (!dataRequest) {
    localStorage.setItem("data", JSON.stringify(data));
    bread = data.filter((item) => item.ingredient.type === "bun");
    sauce = data.filter((item) => item.ingredient.type === "sauce");
    stuffing = data.filter((item) => item.ingredient.type === "main");
  }

  if (dataFailed) {
    return <h1 className="text text_type_main-large">Error:</h1>;
  }
  return (
    <section>
      <h1 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h1>
      <MyTab />
      {dataRequest ? (
        <h1 className="text text_type_main-large"> Loading...</h1>
      ) : (
        <div id="scroll" className={styles.scroll}>
          <Cards id="bun" arr={bread}>
            Булки
          </Cards>
          <Cards id="souse" arr={sauce}>
            Соусы
          </Cards>
          <Cards id="topping" arr={stuffing}>
            Начинки
          </Cards>
        </div>
      )}
    </section>
  );
}

export default BurgerIngredients;
