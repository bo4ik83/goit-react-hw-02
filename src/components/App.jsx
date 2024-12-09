import { useState } from "react";
import Options from "../components/Options/Options.jsx";
import Feedback from "../components/Feedback/Feedback.jsx";
import Notification from "../components/Notification/Notification.jsx";
import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  // Обчислюємо загальну кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <h1>Slip Happens Cafe</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;
