import React, { Component } from 'react';

const UserFilter = ({sortName, sortAge}) => {

    return (
        <div className="toolbar">
            <button onClick={sortName} className="btn btn-default"><i className="icon fa fa-sort-alpha-asc"></i><span>  Sort by name</span></button>
            &nbsp;
            <button onClick={sortAge}  className="btn btn-default"><i className="icon fa fa-sort-numeric-desc"></i><span>  Sort by age</span></button>
        </div>
    );

}

export default UserFilter;
