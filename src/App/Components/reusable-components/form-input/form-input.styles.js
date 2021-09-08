// JSS HOOK
import { createUseStyles } from 'react-jss';

const subColor= 'grey';
const mainColor = 'black';

const shrinkLabel = () => ({
  top: '-14px',
  fontSize: '12px',
  color: mainColor
});

export const formInputStyles = createUseStyles({
  group: {
    position: 'relative',
    margin: '45px 0'
  },
  formInput: {
    background: 'none',
    backgroundColor: 'white',
    color: `${subColor}`,
    fontSize: '18px',
    padding: '10px 10px 10px 5px',
    display: 'block',
    width: '100%',
    border: 'none',
    borderRadius: '0',
    borderBottom: `1px solid ${subColor}`,
    margin: '25px 0',

    '&:focus': {
      outline: 'none'
    },
    '&:focus $formInputLabel': shrinkLabel(),
  },
  input: {
    "&[type='password']": {
      letterSpacing: '0.3em'
    },
    fontFamily: 'OpenSansCondensed'
  },
  formInputLabel: {
    color: '$sub-color',
    fontSize: '16px',
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '5px',
    top: '10px',
    transition: '300ms ease all'
  },
  _shrink: shrinkLabel()
});