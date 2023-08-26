import propTypes from 'prop-types';
import css from './app.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul className={css.statisticsList}>
    <li className={css.statisticsItem}>Good: {good}</li>
    <li className={css.statisticsItem}>Neutral: {neutral}</li>
    <li className={css.statisticsItem}>Bad: {bad}</li>
    <li className={css.statisticsItem}>Total: {total}</li>
    <li className={css.statisticsItem}>Positive feedback: {percentage} %</li>
  </ul>
);
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  percentage: propTypes.number.isRequired,
};
