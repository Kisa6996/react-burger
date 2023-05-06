import styles from "./structure-item.module.css";
import PropTypes from "prop-types";
function StructureItem({ children, count }) {
  return (
    <div
      className={`${styles.struct} text text_type_main-default text_color_inactive`}
    >
      <p>{children}</p>
      <p>{count}</p>
    </div>
  );
}
StructureItem.propTypes = {
  children: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
export default StructureItem;
