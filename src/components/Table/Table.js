import "./Table.css";

export const Table = () => {
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
                <tr>
                    <td>Rajiv Sharma</td>
                    <td>1986-02-12</td>
                    <td>1001 Noble St Ste 1</td>
                    <td>Fair Banks</td>
                    <td>AK</td>
                    <td>99701</td>
                    <td>rajivsharma@gmail.com</td>
                    <td>2667899999</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}
