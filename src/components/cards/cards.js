import Card from "../card/card";
import styles from "./cards.module.css";
import PropTypes from "prop-types";

function Cards({ children, arr }) {
  return (
    <>
      <p className="text text_type_main-medium mb-6 mt-10">{children}</p>
      <div className={`${styles.cards} ml-4`}>
        {arr.map((item) => (
          <Card
            image={item.image}
            price={item.price}
            name={item.name}
            count={item.__v}
            key={item._id}
          />
        ))}
      </div>
    </>
  );
}
Cards.propTypes = {
  children: PropTypes.string,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ),
};
export default Cards;
