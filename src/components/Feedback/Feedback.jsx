import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const total = Object.values(feedback).reduce((sum, value) => sum + value, 0);
  const positivePercentage =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className={styles.feedback}>
      <h2>Statisticks</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
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
};

export default Feedback;
