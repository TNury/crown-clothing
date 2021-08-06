// STYLES
import { formInputStyles } from './form-input.styles.js';

export const FormInput = ({ handler, labelText, ...restOfProps }) => {

  const {
    group,
    formInput,
    input,
    formInputLabel,
    _shrink
  } = formInputStyles();

  return (
    <div className={group}>
      <input className={`${formInput} ${input}`} onChange={handler} {...restOfProps}  />
      {
        labelText
        ?
        <label className={`${formInputLabel} ${ restOfProps.value.length ? _shrink : '_default'}`}>
          { labelText }
        </label>
        :
        null
      }
    </div>
  )
}