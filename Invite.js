import { FiCopy, FiX } from 'react-icons/fi';
import { useState } from 'react';
import dummyData from './dummyData.json';

function Invite({ id, title, body }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [invitedNames, setInvitedNames] = useState([]);

  const copyLink = () => {
    const url = "https://google.com";
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const handleInvite = (name) => {
    const newInvitedName = { name, permission: 'All' };
    setInvitedNames([...invitedNames, newInvitedName]);
  };

  const handlePermissionChange = (index, permission) => {
    const updatedInvitedNames = [...invitedNames];
    updatedInvitedNames[index].permission = permission;
    setInvitedNames(updatedInvitedNames);
  };

  const handleRemoveInvitedName = (index) => {
    const updatedInvitedNames = [...invitedNames];
    updatedInvitedNames.splice(index, 1);
    setInvitedNames(updatedInvitedNames);
  };

  const isInvited = (name) => invitedNames.some(invite => invite.name === name);

  // Filter out uninvited people
  const uninvitedPeople = dummyData.filter(item =>
    !isInvited(item.name) && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal" id={id} tabIndex="-1">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Share this Dashboard</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <p>{title}</p>
            <div className="card w-75 mb-3">
              <div className="card-body">
                <h6 className="card-title">Invite members via a sharable link</h6>
                <p className="card-text">Anyone with the link can view</p>
                <a href="#" className="btn btn-primary" onClick={copyLink}>
                  <FiCopy /> Copy link
                </a>
              </div>
            </div>
            {/* Search Bar */}
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search by name" 
                aria-label="Search" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
            </div>
            {/* Display total number of people selected for invite */}
            <p>Shared with {invitedNames.length} members</p>
            {/* Display invited names */}
            {invitedNames.length > 0 && (
              <div className="mt-3">
                <h6>Invited Names:</h6>
                <ul className="list-group">
                  {invitedNames.map(({ name, permission }, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      {name}
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown-invited-${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                          {permission}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby={`dropdown-invited-${index}`}>
                          <li><button className="dropdown-item" onClick={() => handlePermissionChange(index, 'All')}>All</button></li>
                          <li><button className="dropdown-item" onClick={() => handlePermissionChange(index, 'Can Edit')}>Can Edit</button></li>
                          <li><button className="dropdown-item" onClick={() => handlePermissionChange(index, 'Can View')}>Can View</button></li>
                        </ul>
                        <button className="btn btn-danger" onClick={() => handleRemoveInvitedName(index)}>
                          <FiX />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Display uninvited names */}
            <ul className="list-group">
              {uninvitedPeople.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.email}
                  {!isInvited(item.name) && (
                    <button className="btn btn-success" onClick={() => handleInvite(item.name)}>Invite</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
