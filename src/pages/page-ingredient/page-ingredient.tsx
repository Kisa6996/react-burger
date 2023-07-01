import { useParams } from "react-router-dom";
import {StructureItem} from "../../components/structure-item/structure-item";
import styles from "./page-ingredient.module.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/use-redux";
import { TCardProps, TIngredients } from "../../type/types";

export function PageIngredient() {
  const { data } = useAppSelector((store) => store.dataReducer);
  const [info, setInfo] = useState<TIngredients>();
  const { id } = useParams();
  useEffect(() => {
    data.forEach((value: TCardProps) => {
      if (value.ingredient._id === id) {
        setInfo(value.ingredient);
      }
    });
  }, [data]);
  return (
    <>
      {info !== undefined ? (
        <div className={styles.block}>
          <h1 className={`${styles.title} text text_type_main-large`}>
            Детали ингредиента
          </h1>
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
