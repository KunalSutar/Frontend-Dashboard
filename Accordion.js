import React, { useState } from 'react';
import Invite from './Invite.js';

function Accordion() {
  const dashboardItems = [
    { id: 'audienceModal', title: 'Audience' },
    { id: 'payoutsModal', title: 'Payouts' },
    { id: 'workflowsModal', title: 'Workflows' },
    { id: 'recentCustomersModal', title: 'Recent Customers' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSubsections, setFilteredSubsections] = useState(dashboardItems);

  // Function to handle search
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filteredResults = dashboardItems.filter(item =>
      item.title.toLowerCase().includes(searchValue)
    );
    setFilteredSubsections(filteredResults);
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {/* Search Bar */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: '100%' }}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </nav>
      {/* Sales Overview Section */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Sales Overview
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        ></div>
      </div>
      {/* Marketing Dashboard Section */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Marketing Dashboard
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        ></div>
      </div>
      {/* Finance Dashboards Section */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Finance Dashboards
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        ></div>
      </div>
      {/* HR Dashboards Section */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            HR Dashboards
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className="list-group">
              {filteredSubsections.map(({ id, title }) => (
                <button key={id} type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                  {title}
                </button>
              ))}
            </div>
            {filteredSubsections.map(({ id, title }) => (
              <Invite key={id} id={id} title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
