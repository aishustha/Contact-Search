import { useState } from 'react';
import './App.css';
import {Form} from "./components/Form/Form";
import {Table} from "./components/Table/Table";
import {Pagination} from './components/Pagination/Pagination';
import data from "./data.json";

function App() {
  const [filterContact, setFilterContact] = useState(data);
  const [selectContact, setSelectContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // each contactDetail in data.json is checked - to verify whether the filters provided in the filters match or not.
  const handleSearch = (filters) => {
    const filterData = data.filter((contactDetail) => {
      return (
        (filters.fname ? contactDetail.fname.toLowerCase().includes(filters.fname.toLowerCase()) : true) &&
        (filters.lname ? contactDetail.lname.toLowerCase().includes(filters.lname.toLowerCase()) : true) &&
        (filters.dateofbirth ? contactDetail.dateofbirth === filters.dateofbirth : true) &&
        (filters.email ? contactDetail.email.toLowerCase().includes(filters.email.toLowerCase()) : true) &&
        (filters.phone ? contactDetail.phone.includes(filters.phone) : true)&&
        (filters.address ? contactDetail.address.includes(filters.address) : true)&&
        (filters.city ? contactDetail.city.includes(filters.city) : true)&&
        (filters.state ? contactDetail.state.includes(filters.state) : true)&&
        (filters.zip ? contactDetail.zip.includes(filters.zip) : true)

      );
    });
    setFilterContact(filterData);
    setCurrentPage(0);
  }

  const handleSelectContact = (contactDetail) => {
    setSelectContact(contactDetail);
  }

  const handleUpdateDetail = (updateDetails) => {
    const updateDetail = filterContact.map((contactDetail) => 
      contactDetail.email === selectContact.email ? updateDetails : contactDetail
    );
    setFilterContact(updateDetail);
    setSelectContact(updateDetails);
    alert("Contact Details Updated Successfully!");
  }

  const handleNext = () => {
    if (currentPage + 1 < Math.ceil(filterContact.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const paginatedData = filterContact.slice(startIndex, startIndex + itemsPerPage);

  const totalItems = filterContact.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="App">
      <Form onSearch = {handleSearch} selectContact={selectContact} onUpdateDetail={handleUpdateDetail}/>
      <Table results={paginatedData} contact={handleSelectContact} />
      <Pagination
        currentPage={currentPage + 1}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default App;
