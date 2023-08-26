import propTypes from 'prop-types';
import css from './app.module.css';

export const FeedbackOption = ({ options, onClick }) => (
  <div>
    {options.map((option, ind) => (
      <button key={ind} className={css.btn} onClick={() => onClick(option)}>
        {option}
      </button>
    ))}
  </div>
);
