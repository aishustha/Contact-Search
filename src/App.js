import './App.css';
import {Form} from "./components/Form/Form";
import {Table} from "./components/Table/Table";
import {Pagination} from './components/Pagination/Pagination';
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [filterContact, setFilterContact] = useState(data);
  
  // each contactDetail in data.json is check - to verify whether the filters provided in the filters match or not.
  const handleSearch = (filters) => {
    const filterData = data.filter((contactDetail) => {
      return (
        (filters.fname ? contactDetail.fname.includes(filters.fname) : true) &&
        (filters.lname ? contactDetail.lname.includes(filters.lname) : true) &&
        (filters.dateofbirth ? contactDetail.dateofbirth === filters.dateofbirth : true) &&
        (filters.email ? contactDetail.email.includes(filters.email) : true) &&
        (filters.phone ? contactDetail.phone.includes(filters.phone) : true)
      );
    });
    setFilterContact(filterData);
  }

  return (
    <div className="App">
      <Form onSearch = {handleSearch} />
      <Table results = {filterContact}/>
      <Pagination />
    </div>
  );
}

export default App;
