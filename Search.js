import React, { useState, useEffect } from 'react';
import dropdownData from './dropdownData.json';


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownItems, setDropdownItems] = useState([]);
  
    useEffect(() => {
      setDropdownItems(dropdownData);
    }, []);
  
    const filteredItems = dropdownItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="card">
            <div className="card-body">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Show SQL
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="code-popup">
                                    <div className="code-line"><code>SELECT *</code></div>
                                    <div className="code-line"><code>FROM Employees</code></div>
                                    <div className="code-line"><code>WHERE status='active'</code></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Send Verification
      </button>
      <ul className="dropdown-menu">
        <div className="dropdown-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
              <span>{item.name} <span className="email">({item.email})</span></span>
              <button className="btn btn-outline-primary send-button">Send</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
            
            </div>
        </div>
    );
}

export default Search;
