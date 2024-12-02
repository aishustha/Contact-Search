import "./Table.css";

export const Table = ({results, onSelectContact}) => {
    const handleCheckBox = (contactDetail, e) => {
        if(e.target.checked) {
            onSelectContact(contactDetail);
        } else {
            onSelectContact(null);
        }
    }

  return (
    <section className="tableSection">
        <table className="formTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {results.length > 0 ? (
                    results.map((result, index) => (
                    <tr>
                        <td>
                            <input
                                type="checkbox"
                                checked={result.email === onSelectContact?.email}
                                onChange={(e) => handleCheckBox(result, e)}
                                className="checkbox"
                            />
                        </td>
                        <td>{`${result.fname} ${result.lname}`}</td>
                        <td>{result.dateofbirth}</td>
                        <td>{result.address}</td>
                        <td>{result.city}</td>
                        <td>{result.state}</td>
                        <td>{result.zip}</td>
                        <td>{result.email}</td>
                        <td>{result.phone}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="9">No Data Found.</td>
                    </tr>
                )}
                </tbody>
        </table>
    </section>
  )
}
