import { useParams } from "react-router-dom";
import StructureItem from "../../components/structure-item/structure-item";
import styles from "./page-ingredient.module.css";
import { BASE_URL } from "../../utils/base-url";
import { useEffect, useState } from "react";
import { request } from "../../utils/request";

export function PageIngredient() {
  const [info, setInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      const Api_URL = `${BASE_URL}/ingredients`;
      request(Api_URL, "GET")
        .then((res) => {
          res.data.forEach((value) => {
            if (value._id === id) {
              setInfo(value);
            }
          });
        })
        .catch(() => {
          console.log("error");
        });
    } else {
      const data = JSON.parse(localStorage.getItem("data"));
      data.forEach((value) => {
        if (value.ingredient._id === id) {
          setInfo(value.ingredient);
        }
      });
    }
  }, [id]);
  return (
    <>
      {info !== null ? (
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
