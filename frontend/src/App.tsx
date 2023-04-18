import { useState } from 'react';
import { ButtonGrid } from './components/ButtonGrid';
import { Display } from './components/Display';
import { createUseStyles } from 'react-jss';

export function App() {
  const styles = useStyles();
  const [count, setCount] = useState<number[]>([]);

  const removeIndex = (i: number) => {
    const newCount = [...count];
    newCount.splice(i, 1);
    setCount(newCount);
  };
  
  return (
    <div className={styles.app}>
      <div className={styles.appgrid}>
        <Display list={count} clear={() => setCount([])} remove={removeIndex} />
        <ButtonGrid onClick={n => setCount([...count, n])} undo={() => setCount(count.slice(0, -1))} />
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  app: {
    width: '100vw',
    height: '100vh',
  },
  
  appgrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'min-content 1fr',
    gridGap: '0.5rem',
    width: '100%',
    height: '100%',
    maxWidth: '30rem',
    margin: '0 auto',
    padding: '1rem 0',
    boxSizing: 'border-box',
  }
});