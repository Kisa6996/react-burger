import Card from "../card/card";
import styles from "./cards.module.css";
import ingredients from "../../prop-types/ingredients";
import PropTypes from "prop-types";

function Cards({ children, arr }) {
  return (

    <>
      <p className="text text_type_main-medium mb-6 mt-10">{children}</p>
      <div className={`${styles.cards} ml-4`}>
        {arr.map((item) => (
          <Card data={item} key={item._id}/>
        ))}
      </div>
     
    </>
  );
}
Cards.propTypes = {
  children: PropTypes.string.isRequired,
  arr:PropTypes.arrayOf(PropTypes.shape(ingredients))
}

export default Cards;
