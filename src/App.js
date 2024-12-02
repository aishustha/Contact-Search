import './App.css';
import {Form} from "./components/Form/Form";
import {Table} from "./components/Table/Table";
import {Pagination} from './components/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Form />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
