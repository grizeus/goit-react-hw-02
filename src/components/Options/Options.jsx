import css from "./Options.module.css";

export default function Options({ options, onUpdateFeedback }) {
  console.log(options);
  return (
    <div className={css.options}>
      {options.map(option => (
        <button
          className={css.button}
          type="button"
          onClick={() => onUpdateFeedback(option)}
          key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}
