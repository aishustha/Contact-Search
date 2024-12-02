import "./Table.css";

export const Table = ({results}) => {
  return (
    <section className="tableSection">
        <table className="formTable">
            <thead>
                <tr>
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
                    <tr key={index}>
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
                    <td colSpan="8">No contacts found.</td>
                    </tr>
                )}
                </tbody>
        </table>
    </section>
  )
}
