import Card from "../card/card";
import styles from "./cards.module.css";
import ingredients from "../../prop-types/ingredients";

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
Cards.propTypes = ingredients
export default Cards;
