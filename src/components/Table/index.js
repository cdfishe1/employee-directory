import React, { useState, useEffect } from "react";
// import API from "../../utils/API";

function Table () {
    const [state, setState] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        setState(data);
        });

    }, []);

    // return null;

    return (
        <div>
          <table className="table">
           
            <thead>
              <tr>
                <th className="col-2">Name</th>
                <th className="col-2">Email</th>
              </tr>
            </thead>
    
            <tbody>
                <tr>
                <td className="col-2">Charles Fisher</td>
                <td className="col-2">charles@mail.com</td>
                </tr>
            </tbody>
    
          </table>
        </div>
    );
}


export default Table;