import './App.css';
import {useState,useEffect} from 'react'
import Estate from './components/Estate';
import estateService from './services/estate'
const App = () => {
  const [estates, setEstates] = useState([])
  
  useEffect(() => {
		estateService.getAll().then((initialEstates) => {
			setEstates(initialEstates);
		});
	}, []);
  // const estateToShow = showAll ? notes : notes.filter((note) => note.important);
  const estateToShow = estates;  
  return (
    <div className="App">
      <header className="App-header">
        <Estate/>
        <ol>
				{estateToShow.map((estate) => (		
          <li key={estate.id}>
          <div>{estate.id}</div>
          <div>{estate.title}</div>
          <div><img src={estate.thumbnail} alt={estate.thumbnail_id}/></div>
          
          
          </li>			 
				))}
			</ol>
      </header>
    </div>
  );
}

export default App;
