import React, { useState } from 'react';
import dummyData from './dummyData.json';

function Card() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState({});

  // Function to handle search
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filteredResults = dummyData.filter(person =>
      person.name.toLowerCase().includes(searchValue)
    );
    setSearchResults(filteredResults);
  };

  // Function to handle sending verification
  const sendVerification = (index) => {
    setVerificationStatus(prevStatus => ({
      ...prevStatus,
      [index]: true
    }));
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="accordion" id="accordionExample">
          {/* Accordion Content */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Show SQL
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <code>
                  SELECT * <br />
                  FROM Employees <br />
                  WHERE status = 'active';
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Trigger Button */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Send verification
        </button>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Send verification</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Search Bar */}
                <input 
                  type="text" 
                  className="form-control mb-3" 
                  placeholder="Search person..." 
                  value={searchTerm} 
                  onChange={handleSearch} 
                />

                {/* Search Results */}
                <ul className="list-group">
                  {searchResults.map((person, index) => (
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                      <div>{person.name} - {person.email}</div>
                      <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => sendVerification(index)}
                        disabled={verificationStatus[index]}
                      >
                        Send
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
