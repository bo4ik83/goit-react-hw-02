import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total }) => {
  return (
    <div className={styles.feedback}>
      <h2>Statisticks</h2>
      <ul>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total Feedback: {total}</p>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default Feedback;
