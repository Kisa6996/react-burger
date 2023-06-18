import { useParams } from "react-router-dom";
import StructureItem from "../structure-item/structure-item";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function IngredientDetails() {
  const { data } = useSelector((store) => store.dataReducer);
  const [info, setInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    data.forEach((value) => {
      if (value.ingredient._id === id) {
        setInfo(value.ingredient);
      }
    });
  }, [data]);
  return (
    <>
      {info !== null ? (
        <div className={styles.block}>
          <img src={info.image_large} alt="data" />
          <h1 className="text text_type_main-medium mt-4 mb-8">{info.name}</h1>
          <div className={styles.struct}>
            <StructureItem count={info.calories}>Калории,ккал</StructureItem>
            <StructureItem count={info.proteins}>Белки, г</StructureItem>
            <StructureItem count={info.fat}>Жиры, г</StructureItem>
            <StructureItem count={info.carbohydrates}>
              Углеводы, г
            </StructureItem>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default IngredientDetails;
