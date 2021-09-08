// STYLES
import { buttonStyles } from './button.styles.js';

export const Button = ({ handler, styles, type, text }) => {

  // HOOKS
  const { customButton } = buttonStyles();

  return (
    <button
      onClick={handler}
      type={type}
      className={`${customButton} ${styles}`}
    >
      {text}
    </button>
  );
};
