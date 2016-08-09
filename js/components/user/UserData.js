import React, { Component } from 'react';

const UserData = ({items, change}) => {
    console.log('len', items.length);
    if(items.length>0){
        return (
            <div className="col-sm-8 col-md-9 col-lg-9">
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(function(l, index){
                        return <tr key={l.id} onClick={change.bind(this, index)}><td><img width="50px" src={`images/${l.image}.svg`} alt={l.name} title={l.name} /></td><td>{l.name}</td><td>{l.age}</td><td>{l.phone}</td></tr>
                    })}
                    </tbody>
                </table>
            </div>
            );
    } else {
        return (<div className="col-xs-12"><h3>Not found :(</h3></div>);
    }

}

export default UserData;
