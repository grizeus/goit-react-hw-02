import css from "./Options.module.css";

export default function Options({ options, onUpdateFeedback, onReset, total }) {
  return (
    <section title="Options" className={css.options}>
      {options.map(option => (
        <button
          className={css.button}
          type="button"
          onClick={() => onUpdateFeedback(option)}
          key={option}>
          {option}
        </button>
      ))}
      {total > 0 && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </section>
  );
}
