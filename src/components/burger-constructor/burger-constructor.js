import BurgerLists from "../burger-lists/burger-lists";
import Order from "../order/order";
import ingredients from "../../prop-types/ingredients";
import PropTypes from "prop-types";

function BurgerConstructor({ data }) {
  const burger = [
    data[0],
    data[4],
    data[6],
    data[7],
    data[8],
    data[9],
    data[3],
  ];
  return (
    <div className="mt-25 pl-4 pr-4">
      <BurgerLists data={burger} />
      <Order />
    </div>
  );
}
BurgerConstructor.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.shape(ingredients)),
};

export default BurgerConstructor;
