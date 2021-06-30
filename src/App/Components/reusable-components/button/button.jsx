

export const Button = ({ handler, modifier, type, text }) => {

  return (
    <button onClick={handler} type={type} className={`custom-button ${modifier}`} >
      {text}
    </button>
  )
}