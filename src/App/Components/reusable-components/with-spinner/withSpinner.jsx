// COMPONENTS
import { Spinner } from './spinner/spinner.jsx';

export const WithSpinner = (WrappedComponent) => ({ isLoading,  ...otherProps}) => {

  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent {...otherProps} />
  )
};