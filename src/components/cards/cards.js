import Card from "../card/card";
import styles from "./cards.module.css";
import ingredients from "../../prop-types/ingredients";
import PropTypes from "prop-types";

function Cards({ children, arr, id }) {
  return (
    <>
      <p className="text text_type_main-medium mb-6 mt-10">{children}</p>
      <div id={id} data-scroll className={`${styles.cards} ml-4`}>
        {arr.map((item) => (
          <Card
            data={item.ingredient}
            key={item.ingredient._id}
            count={item.count}
          />
        ))}
      </div>
    </>
  );
}
Cards.propTypes = {
  children: PropTypes.string.isRequired,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      ingredients: PropTypes.shape(ingredients),
      count: PropTypes.number,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default Cards;
