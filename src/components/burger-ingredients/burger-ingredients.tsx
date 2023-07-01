import styles from "./burger-ingredients.module.css";
import MyTab from "../my-tab/my-tab";
import { Cards } from "../cards/cards";
import { useAppSelector } from "../../hooks/use-redux";
import { TCardProps } from "../../type/types";

function BurgerIngredients() {
  const { data } = useAppSelector(
    (state) => state.dataReducer
  );

  const bread = data.filter(
    (item: TCardProps) => item.ingredient.type === "bun"
  );
  const sauce = data.filter(
    (item: TCardProps) => item.ingredient.type === "sauce"
  );
  const stuffing = data.filter(
    (item: TCardProps) => item.ingredient.type === "main"
  );

  return (
    <section>
      <h1 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h1>
      <MyTab />
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
    </section>
  );
}

export default BurgerIngredients;
