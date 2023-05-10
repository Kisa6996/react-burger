import BurgerLists from "../burger-lists/burger-lists";
import Order from "../order/order";

function BurgerConstructor() {
  return (
    <div className="mt-25 pl-4 pr-4">
        <BurgerLists/>
        <Order/>
    </div>
  );
}

export default BurgerConstructor;
