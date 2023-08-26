import propTypes from 'prop-types';
import css from './app.module.css';

export const Notification = ({ message }) => (
  <p className={css.message}>{message}</p>
);
