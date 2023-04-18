import { createUseStyles } from 'react-jss';

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export function Button(p: ButtonProps) {
  const styles = useStyles();

  return (
    <button className={styles.button} onClick={p.onClick}>{p.text}</button>
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
    
    transition: 'transform 0.1s',
    
    '&:active': {
      transform: 'translateY(2px)'
    }
  }
});