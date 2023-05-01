import styles from "./burger-lists.module.css";
import BurgerList from "../burger-list/burger-list";
import PropTypes from "prop-types";
import BorderBurger from "../border-burger/border-burger";

function BurgerLists({ data }) {
  const style = { "--size": data.length - 1 };
  return (
    <div className={styles.block}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <BorderBurger
          image={data[0].image}
          price={data[0].price}
          text={data[0].name}
          type="top"
        >
          (вверх)
        </BorderBurger>
        <div className={styles.scroll} style={style}>
          {data.slice(1).map((item) => (
            <BurgerList
              name={item.name}
              price={item.price}
              image={item.image}
              key={item._id}
            />
          ))}
        </div>
        <BorderBurger
          image={data[0].image}
          price={data[0].price}
          text={data[0].name}
          type="bottom"
        >
          (низ)
        </BorderBurger>
      </div>
    </div>
  );
}
BurgerLists.propTypes = {
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
export default BurgerLists;
