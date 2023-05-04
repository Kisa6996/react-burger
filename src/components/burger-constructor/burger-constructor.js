import BurgerLists from "../burger-lists/burger-lists";
import data from "../../utils/data";
import Order from "../order/order";
const burger = [data[0], data[4], data[6], data[7], data[8], data[9], data[3]];
function BurgerConstructor() {
  return (
    <div className="mt-25 pl-4 pr-4">
      <BurgerLists data={burger} />
      <Order />
    </div>
  );
}

export default BurgerConstructor;
