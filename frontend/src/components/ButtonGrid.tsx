import { createUseStyles } from 'react-jss';
import { Button } from './Button';
import { useState } from 'react';

export type ButtonGridProps = {
  onClick: (value: number) => void;
  undo: () => void;
};

export function ButtonGrid(p: ButtonGridProps) {
  const styles = useStyles();
  const [multiplier, setMultiplier] = useState(1);

  return (
    <div className={styles.buttongrid}>
      <MultiplierSelect value={multiplier} onChange={setMultiplier} />
      <Button text='Undo' onClick={p.undo} />
      <AddButton value={multiplier * -1000} {...p} />
      <AddButton value={multiplier * 1000} {...p} />
      <AddButton value={multiplier * -100} {...p} />
      <AddButton value={multiplier * 100} {...p} />
      <AddButton value={multiplier * -10} {...p} />
      <AddButton value={multiplier * 10} {...p} />
      <AddButton value={multiplier * -5} {...p} />
      <AddButton value={multiplier * 5} {...p} />
      <AddButton value={multiplier * -1} {...p} />
      <AddButton value={multiplier * 1} {...p} />
    </div>
  );
}

function MultiplierSelect(p: { value: number; onChange: (value: number) => void; }) {
  const styles = useStyles();

  return (
    <div className={styles.select}>
      <Button text='<' onClick={() => p.onChange(Math.max(1, p.value / 10))} />
      <span>x{p.value}</span>
      <Button text='>' onClick={() => p.onChange(p.value * 10)} />
    </div>
  );
}

function AddButton(p: { value: number; onClick: (value: number) => void; }) {
  return (
    <Button text={`${p.value >= 0 ? '+' : '-'} ${formatNumber(p.value)}`} onClick={() => p.onClick(p.value)} />
  );
}

function formatNumber(x: number) {
  return Math.abs(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const useStyles = createUseStyles({
  buttongrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '0.5fr repeat(5, 1fr)',
    gridGap: '0.5rem',
    width: '100%',
    height: '100%',
    paddingTop: '1rem',
    boxSizing: 'border-box',

    // '& button:first-child': {
    //   gridColumn: 'span 2',
    // },
  },

  select: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridTemplateRows: '1fr',
    width: '100%',
    height: '100%',
    
    '& span': {
      backgroundColor: '#222',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    
    '& button': {
      borderRadius: '0',
      
      '&:first-child': {
        borderTopLeftRadius: '0.2rem',
        borderBottomLeftRadius: '0.2rem',
      },
      
      '&:last-child': {
        borderTopRightRadius: '0.2rem',
        borderBottomRightRadius: '0.2rem',
      },
    },
  }
});