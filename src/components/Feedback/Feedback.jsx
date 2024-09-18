import css from './Feedback.module.css'

export default function Feedback() {
  return (
    <div className={css.feedback}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
    </div>
  );
}