import './App.css';
import { setQuery, selectResults, selectPending, selectError } from './features/search';
// import { searchQueryUpdated } from './actions';

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  const pending = useSelector(selectPending);
  const error = useSelector(selectError);

  const onInput = ({ target }) => {
    const value = target.value.trim();
    if (!value) {
      return;
    }

    dispatch(setQuery(value));
  }
  return (
    <div className="App">
      <header className="App-header">
        <input onInput={onInput} placeholder="Введите запрос"/>
        <div>
          {pending && 'Загрузка...'}
          {!pending && error && 'Загрузка...'}
          {!pending && (
            <div>
              {results.map(({spell}) => (
                <div>{spell}</div>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
