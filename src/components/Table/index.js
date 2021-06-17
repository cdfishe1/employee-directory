import React, { useState, useEffect } from "react";
import Search from "../Search"
// import API from "../../utils/API";

function Table () {
    const [state, setState] = useState([]);
    

    useEffect(() => {
      // API.getEmployees
        fetch('https://randomuser.me/api/?results=200&nat=us')
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        setState(data.results);
        });

    }, []);


    return (
        <div>
          <Search />
          <table className="table">
           
            <thead>
              <tr>
                <th className="col-2"
                onClick={() => {
                  const stateCopy = [...state];
                  const updateSort = stateCopy.sort((a, b) => {
                    const nameA = a.name.last;
                    const nameB = b.name.last;
  
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
  
                    return 0;
                  });
  
                  setState(updateSort);
                }}
                
                >Name</th>
                <th className="col-2">Email</th>
              </tr>
            </thead>
    
            <tbody>
                  {state.map((person) => {
                    return(
                        <tr>
                          <td className="col-2">{person.name.last} {person.name.first}</td>
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