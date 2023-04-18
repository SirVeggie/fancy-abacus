import { createUseStyles } from 'react-jss';
import { Button } from './Button';

export type DisplayProps = {
  list: number[];
  clear: () => void;
};

export function Display(p: DisplayProps) {
  const styles = useStyles();
  
  return (
    <div className={styles.display}>
      <div className='valuelist'>[{p.list.join(', ')}]</div>
      <div className='valuesum'>{p.list.reduce((prev, sum) => sum + prev, 0)}</div>
      <Button text='X' onClick={p.clear} />
    </div>
  );
}

const useStyles = createUseStyles({
  display: {
    padding: '0rem 1rem',
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
    gridTemplateRows: 'min-content 2rem',
    rowGap: '1rem',
    
    '& .valuelist': {
      gridColumn: 'span 2',
      fontSize: '1.2rem',
    },
    
    '& .valuesum': {
      fontSize: '1.5rem',
    },
    
    '& button': {
      opacity: 0.3,
    },
  }
});