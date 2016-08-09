import React, { Component } from 'react';

const UserSearch = ({search, update}) => {

    return (
        <div className="searchbar form-group">
            <input id="searchInput" value={search} type="text" className="form-control" placeholder="Search people by name..."  onChange={update} />
        </div>
    );

}

export default UserSearch;
