import { useEffect, useState } from "react";

import Logo from "../Logo/Logo.jsx";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const initFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem("feedback")) ?? initFeedbackState;
  });

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / total) * 100);
  const options = Object.keys(feedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    document.title = total
      ? `Positive feedback ${positivePercentage}%`
      : "No feedback yet";
  }, [total, positivePercentage]);

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
      <Logo />
      <Description />
      <Options
        options={options}
        onUpdateFeedback={onUpdateFeedback}
        onReset={resetState}
        total={total}
      />
      {total ? (
        <Feedback
          {...feedback}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
