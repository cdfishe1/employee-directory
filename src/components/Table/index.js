import React, { useState, useEffect } from "react";
import Search from "../Search"

//hooks for original and search states
function Table () {
    const [state, setState] = useState([]);
    const [originalState, setOriginalState] = useState([]);
    const [search, setSearch] = useState('');

    //on load fetch data from api
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=200&nat=us')
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        setState(data.results);
        setOriginalState(data.results)
        });

    }, []);

    //filter original state without mutating the results
    function handleInputChange (event) {
      const {value} = event.target
      setSearch(value);

      const filteredState = originalState.filter((person) => {
        return person.name.last.toLowerCase().includes(value.toLowerCase())
      })
      
      setState(filteredState);

    };

    //sort the name column alphabetically
    function sortTable () {
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
    }

    return (
        <div>
          <Search
         handleInputChange={handleInputChange}
          search = {search}
           />
          <table className="table table-striped">
           
            <thead>
              <tr>
                <th className="col"
                onClick={sortTable}
                >Name</th>
                <th className="col">Email</th>
                <th className="col">Cell Phone</th>
                <th className="col">Picture</th>
              </tr>
            </thead>
    
            <tbody>
                  {state.map((person) => {
                    return(
                        <tr key={person.id.value}>
                          <td className="col">{person.name.last} {person.name.first}</td>
                          <td className="col">{person.email}</td>
                          <td className="col">{person.cell}</td>
                          <td className="col"><img src={person.picture.thumbnail} alt=""></img></td>
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