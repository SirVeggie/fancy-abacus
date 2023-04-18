import { createUseStyles } from "react-jss";
import { Button } from "./Button";

export type ButtonGridProps = {
  onClick: (value: number) => void;
  undo: () => void;
};

export function ButtonGrid(p: ButtonGridProps) {
  const styles = useStyles();
  
  return (
    <div className={styles.buttongrid}>
      <Button text='Undo' onClick={p.undo} />
      <Button text='-100' onClick={handler(-100, p.onClick)} />
      <Button text='+100' onClick={handler(100, p.onClick)} />
      <Button text='-10' onClick={handler(-10, p.onClick)} />
      <Button text='+10' onClick={handler(10, p.onClick)} />
      <Button text='-5' onClick={handler(-5, p.onClick)} />
      <Button text='+5' onClick={handler(5, p.onClick)} />
      <Button text='-1' onClick={handler(-1, p.onClick)} />
      <Button text='+1' onClick={handler(1, p.onClick)} />
    </div>
  );
}

function handler(value: number, onClick: (value: number) => void) {
  return () => onClick(value);
}

const useStyles = createUseStyles({
  buttongrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '0.5fr repeat(4, 1fr)',
    gridGap: '0.5rem',
    width: '100%',
    height: '100%',
    paddingTop: '1rem',
    boxSizing: 'border-box',
    
    '& button:first-child': {
      gridColumn: 'span 2',
    },
  }
});