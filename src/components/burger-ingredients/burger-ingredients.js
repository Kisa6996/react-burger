import styles from "./burger-ingredients.module.css";
import MyTab from "../my-tab/my-tab";
import Cards from "../cards/cards";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";

function BurgerIngredients({ data }) {
  const bread = data.filter((item) => item.type === "bun");
  const sauce = data.filter((item) => item.type === "sauce");
  const stuffing = data.filter((item) => item.type === "main");
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
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredients)),
};

export default BurgerIngredients;
