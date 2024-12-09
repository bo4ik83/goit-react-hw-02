import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ feedbackTypes, onLeaveFeedback }) => {
  return (
    <div className={styles.options}>
      {feedbackTypes.map((type) => (
        <button
          key={type}
          className={styles.button}
          onClick={() => onLeaveFeedback(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

Options.propTypes = {
  feedbackTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
