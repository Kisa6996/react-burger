import styles from "./burger-lists.module.css";
import BurgerList from "../burger-list/burger-list";
import BorderBurger from "../border-burger/border-burger";
import { BurgerContext, BreadContext} from "../../context/contex-app";
import { useContext} from "react";

function BurgerLists() {
  const [burger] = useContext(BurgerContext);
  const [bread] = useContext(BreadContext);

  const style = { "--size": burger.length };
  return (
    <div className={styles.block}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {bread.length !== 0 && (
          <BorderBurger
            image={bread.image}
            price={bread.price}
            text={bread.name}
            type="top"
          >
            (вверх)
          </BorderBurger>
        )}
        <div className={styles.scroll} style={style}>
          {burger.length !== 0 &&
            burger.map((item, index) => (
              <BurgerList
                item = {item}
                key={index}
              />
            ))}
        </div>
        {bread.length !== 0 && (
          <BorderBurger
            image={bread.image}
            price={bread.price}
            text={bread.name}
            type="bottom"
          >
            (низ)
          </BorderBurger>
        )}
      </div>
    </div>
  );
}
export default BurgerLists;
