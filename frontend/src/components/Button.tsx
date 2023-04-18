import { createUseStyles } from 'react-jss';
import cx from 'classnames';

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export function Button(p: ButtonProps) {
  const styles = useStyles();

  return (
    <button className={cx(styles.button, 'noSelect')} onClick={p.onClick}>{p.text}</button>
  );
}

const useStyles = createUseStyles({
  button: {
    outline: 'none',
    cursor: 'pointer',
    minHeight: '2rem',
    minWidth: '3rem',
    backgroundColor: '#444',
    borderRadius: '0.2rem',
    border: 'none',
    userSelect: 'none',
    
    transition: 'transform 0.05s, filter 0.1s',
    
    '&:focus-visible': {
      backgroundColor: '#555',
    },
    
    '&:active': {
      transform: 'translateY(2px)',
      filter: 'brightness(0.95)',
    }
  }
});