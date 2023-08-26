import propTypes from 'prop-types';
import css from './app.module.css';

export const FeedbackOptions = ({ options, onClick }) => (
  <div>
    {options.map((option, ind) => (
      <button key={ind} className={css.btn} onClick={() => onClick(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onClick: propTypes.func.isRequired,
};
