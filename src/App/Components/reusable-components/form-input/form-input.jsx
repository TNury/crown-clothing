

export const FormInput = ({ handler, labelText, ...restOfProps }) => {

  return (
    <div className="group">
      <input onChange={handler} {...restOfProps} className="form-input" />
      {
        labelText
        ?
        <label className={`form-input-label ${ restOfProps.value.length ? '_shrink' : '_default'}`}>
          { labelText }
        </label>
        :
        null
      }
    </div>
  )
}