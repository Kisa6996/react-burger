import styles from "./burger-ingredients.module.css";
import MyTab from "../my-tab/my-tab";
import Cards from "../cards/cards";
import { useSelector } from "react-redux";

function BurgerIngredients() {
  const { data } = useSelector((stote) => stote.dataReducer);

  const bread = data.filter((item) => item.ingredient.type === "bun");
  const sauce = data.filter((item) => item.ingredient.type === "sauce");
  const stuffing = data.filter((item) => item.ingredient.type === "main");


  return (
    <section>
      <h1 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h1>
      <MyTab />
      {/* {info !== null ? ( */}
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
      {/* ) : null} */}
    </section>
  );
}

export default BurgerIngredients;
