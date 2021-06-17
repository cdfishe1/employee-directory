import React, { useState, useEffect } from "react";
// import API from "../../utils/API";

function Table () {
    const [state, setState] = useState([]);

    useEffect(() => {
      // API.getEmployees
        fetch('https://randomuser.me/api/?results=50')
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        setState(data.results);
        });

    }, []);

    // return null;
    console.log('state', state)
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

                  {state.map((person) => {
                    return(
                        <tr>
                          <td className="col-2">{person.name.first} {person.name.last}</td>
                          <td className="col-2">{person.email}</td>
                        </tr>
                      ) 
                    })

                  }
                       
            </tbody>
    
          </table>
        </div>
    );
}


export default Table;