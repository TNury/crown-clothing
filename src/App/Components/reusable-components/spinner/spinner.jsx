// STYLES
import { spinnerStyles } from './spinner.styles';

export const Spinner = () => {

  const { spinnerOverlay, spinnerContainer } = spinnerStyles();

  return (
    <div className={spinnerOverlay}>
      <div className={spinnerContainer} />
    </div>
  );
};
