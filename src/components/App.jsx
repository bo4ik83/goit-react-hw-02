import { useState } from "react";
import Feedback from "../components/Feedback/Feedback.jsx";
import Options from "../components/Options/Options.jsx";
import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <div>
      <h1>Slip Happens Cafe</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        feedbackTypes={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
