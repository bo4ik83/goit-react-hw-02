import { useState } from "react";
import Options from "../components/Options/Options.jsx";
import Feedback from "../components/Feedback/Feedback.jsx";
import Notification from "../components/Notification/Notification.jsx";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Slip Happens Cafe</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        totalFeedback={totalFeedback}
        onUpdateFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}

export default App;
