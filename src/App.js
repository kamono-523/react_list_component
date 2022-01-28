import './App.css';
import Header from './components/Header';
import { ListForm } from './components/ListForm';

/*
Requirments:
1. create a list input control for use in a form.
2. component should accept following props: 
  label, 
  placeholder,
  required: if true, validate list is not empty,
  disabled: if true, prevent add/remove,
  max: number of list items not to exceed

3. should be able to re-order items
4. create in a public github and send link 
5. bonus: upload to heroku
*/

function App() {
  return (
    <div className="App">
      <Header />
      <ListForm 
        label="Top 3 Priorities" 
        placeholder="gonna see who's been" 
        max={3}
        // disabled={true}
        required={true}
      />
    </div>
  );
}

export default App;
