import { useState, useEffect } from "react";
import "./Form.css";

export const Form = ({onSearch, selectContact, onUpdateDetail}) => {
    const [filterBased, setFilterBased] = useState ({
        fname: "",
        lname: "",
        dateofbirth: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    })

    useEffect(() => {
        if (selectContact) {
            setFilterBased({
                fname: selectContact.fname || "",
                lname: selectContact.lname || "",
                dateofbirth: selectContact.dateofbirth || "",
                email: selectContact.email || "",
                phone: selectContact.phone || "",
                address: selectContact.address || "",
                city: selectContact.city || "",
                state: selectContact.state || "",
                zip: selectContact.zip || ""
            });
        }
    }, [selectContact]);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilterBased((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filterBased);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdateDetail(filterBased);
    }

  return (
    <section className="contactSection">
        <h3>Chose a contact</h3>
        <form onSubmit={handleSubmit}>
            <h5>Search for a contact</h5>

            <div className="formGrid">
                <div className="formColumn">
                    <div className="formRow">
                        <div className="formLabel">
                            <label htmlFor="fname">
                                First name
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                value={filterBased.fname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formLabel">
                            <label htmlFor="lname">
                               <span className="formAsterik">*</span> Last name
                            </label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={filterBased.lname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formLabel formDate">
                            <label htmlFor="dateofbirth">
                                Date of birth
                            </label>
                            <input
                                type="date"
                                id="dateofbirth"
                                name="dateofbirth"
                                value={filterBased.dateofbirth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formLabel">
                            <label htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={filterBased.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formLabel">
                            <label htmlFor="number">
                                Phone number
                            </label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={filterBased.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="formColumn">
                    <div className="formRow">
                        <div className="formLabel formAddress">
                            <label htmlFor="address">
                                Street address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={filterBased.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formLabel">
                            <label htmlFor="city">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={filterBased.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formLabel">
                            <label htmlFor="state">
                                State  
                            </label>
                            <select
                                id="state"
                                name="state"
                                value={filterBased.state}
                                onChange={handleChange}
                            >
                                <option value="">Choose</option>
                                {["AK", "Bagmati", "Province No. 1", "Kaski" ].map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="formLabel">
                            <label htmlFor="zip">
                                Zip code
                            </label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                value={filterBased.zip}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <button type="search" className="searchBtn" onClick={handleSubmit}>Search</button>
            
            {selectContact && (
                 <button type="submit" className="searchBtn" onClick={handleUpdate}>Update</button>
            )}
        </form>
    </section>
  )
}
