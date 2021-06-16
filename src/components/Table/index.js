import React from 'react';

function Table(props) {
  return (
    <div>
      <table className="table table-bordered table-sm table-fixed">
       
        <thead>
          <tr>
            <th className="col-2"><button onClick={props.sortUsers}>Name (Sort by Last Name)</button></th>
            <th className="col-2">Email</th>
          </tr>
        </thead>

        <tbody>
            <tr>
            <td className="col-2">First Name Last Name</td>
            <td className="col-2">Email</td>
            </tr>
        </tbody>

      </table>
    </div>
);
;}
export default Table;