import StructureItem from '../structure-item/structure-item';
import styles from './ingredient-details.module.css'
import ingredients from "../../prop-types/ingredients";
import PropTypes from "prop-types"

function IngredientDetails({data}) {
  return (
    <div className={styles.block}>
        <img src={data.image_large} alt="data"/>
        <h1 className="text text_type_main-medium mt-4 mb-8">{data.name}</h1>
        <div className={styles.struct}>
            <StructureItem count = {data.calories}>Калории,ккал</StructureItem>
            <StructureItem count = {data.proteins}>Белки, г</StructureItem>
            <StructureItem count = {data.fat}>Жиры, г</StructureItem>
            <StructureItem count = {data.carbohydrates}>Углеводы, г</StructureItem>
        </div>
    </div>
  );
}
IngredientDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredients)),
};
export default IngredientDetails;
