import { useEffect, useState } from "react";

import Description from "./Description/Description.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";

export default function App() {
  const initFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem("feedback")) ?? initFeedbackState;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    document.title = totalFeedback
      ? `Positive feedback ${positiveFeedback}%`
      : "No feedback yet";
  }, [totalFeedback, positiveFeedback]);

  const onUpdateFeedback = type => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };

  const resetState = () => {
    setFeedback(initFeedbackState);
  };

  return (
    <>
      <Description />
      <Options {...feedback} />
      <button onClick={resetState}>Reset</button>
      {totalFeedback ? (
        <Feedback onUpdate={onUpdateFeedback} />
      ) : (
        <p> There is no feedback yet</p>
      )}
    </>
  );
}
