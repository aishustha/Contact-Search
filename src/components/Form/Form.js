import "./Form.css";

export const Form = () => {
  return (
    <section className="contactSection">
        <h3>Chose a contact</h3>
        <form>
            <h5>Search for a contact</h5>
            <div className="formGrid">
                <div className="formColumn">
                    <div className="formRow">
                        <div className="formLabel">
                            <label htmlFor="">
                                First name
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                            />
                        </div>
                        <div className="formLabel">
                            <label htmlFor="">
                               <span className="formAsterik">*</span> Last name
                            </label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                            />
                        </div>
                        <div className="formLabel formDate">
                            <label htmlFor="">
                                Date of birth
                            </label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formLabel">
                            <label htmlFor="">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="formLabel">
                            <label htmlFor="">
                                Phone number
                            </label>
                            <input
                                type="number"
                                id="number"
                                name="number"
                            />
                        </div>
                    </div>
                </div>
                <div className="formColumn">
                    <div className="formRow">
                        <div className="formLabel formAddress">
                            <label htmlFor="">
                                Street address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="formLabel">
                            <label htmlFor="">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                            />
                        </div>
                        <div className="formLabel">
                            <label htmlFor="">
                                State  
                            </label>
                            <select
                                id="state"
                                name="state"
                            >
                                <option value="">Choose</option>
                                <option value="Toronto">Toronto</option>
                                <option value="Edmonton">Edmonton</option>
                                <option value="Vancouver">Vancouver</option>
                                <option value="Ottawa">Ottawa</option>
                            </select>
                        </div>
                        <div className="formLabel">
                            <label htmlFor="">
                                Zip code
                            </label>
                            <input
                                type="text"
                                id="zip code"
                                name="zip code"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button type="search" className="searchBtn">Search</button>
            
        </form>
    </section>
  )
}
