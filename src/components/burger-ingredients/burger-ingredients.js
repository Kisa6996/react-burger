import styles from "./burger-ingredients.module.css";
import MyTab from "../my-tab/my-tab";
import data from "../../utils/data";
import Cards from "../cards/cards";


const bread = data.filter((item) => item.type === "bun");
const sauce = data.filter((item) => item.type === "sauce");
const stuffing = data.filter((item) => item.type === "main");

function BurgerIngredients() {
  return (
    <section>
      <h1 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h1>
      <MyTab />
      <div className={styles.scroll}>
        <Cards arr={bread}>Булки</Cards>
        <Cards arr={sauce}>Соусы</Cards>
        <Cards arr={stuffing}>Начинки</Cards>
      </div>
    </section>
  );
}

export default BurgerIngredients;
