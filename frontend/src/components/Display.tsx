import { createUseStyles } from 'react-jss';
import { Button } from './Button';

export type DisplayProps = {
  list: number[];
  clear: () => void;
  remove: (index: number) => void;
};

export function Display(p: DisplayProps) {
  const styles = useStyles();

  return (
    <div className={styles.display}>
      <div className='valuelist'>[{p.list.map((x, i) => (
        <ListValue key={i} list={p.list} remove={p.remove} index={i} value={x} />
      ))}]</div>
      <div className='valuesum'>{formatNumber(p.list.reduce((prev, sum) => sum + prev, 0))}</div>
      <Button text='X' onClick={p.clear} />
    </div>
  );
}

function ListValue(p: { list: number[], remove: (index: number) => void, index: number, value: number; }) {
  const styles = useStyles();

  return (
    <>
      <span className={styles.value} onClick={() => p.remove(p.index)}>{formatNumber(p.value)}</span>
      {p.index !== p.list.length - 1 ? ', ' : ''}
    </>
  );
}

function formatNumber(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const useStyles = createUseStyles({
  value: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

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