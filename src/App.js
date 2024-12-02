import './App.css';
import {Form} from "./components/Form/Form";
import {Table} from "./components/Table/Table";
import {Pagination} from './components/Pagination/Pagination';
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [filterContact, setFilterContact] = useState(data);
  const [selectContact, setSelectContact] = useState(null);

  // each contactDetail in data.json is checked - to verify whether the filters provided in the filters match or not.
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

  const handleSelectContact = (contactDetail) => {
    setSelectContact(contactDetail);
  }

  const handleUpdateDetail = (updateDetails) => {
    const updateDetail = filterContact.map((contactDetail) => 
      contactDetail.email === updateDetails.email ? updateDetails : contactDetail
    );
    setFilterContact(updateDetail);
    setSelectContact(updateDetails);
    alert("Contact updated successfully!");
  }


  return (
    <div className="App">
      <Form onSearch = {handleSearch} selectContact={selectContact} onUpdateDetail={handleUpdateDetail}/>
      <Table results = {filterContact} onSelectContact={handleSelectContact}/>
      <Pagination />
    </div>
  );
}

export default App;
