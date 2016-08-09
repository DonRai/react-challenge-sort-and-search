import React, { Component } from 'react';

const UserProfile = ({profile}) => {

    if(profile){
        return (
            <div className="col-sm-4 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src={`images/${(profile.image!=undefined) ? profile.image : 'cat'}.svg`} />
                    <div className="thumbnail-caption">
                        <h3>{profile.name}</h3>
                        <table className="user-info table table-responsive">
                            <tbody>
                                <tr>
                                <td>Age:</td>
                                <td>{profile.age}</td>
                                </tr>
                            <tr>
                                <td>Favorite animal:</td>
                                <td>{profile.image}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>
                                    <span>8 </span>
                                    <span>(629) 653-9041</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p><b>Favorite phrase:</b> <span>{profile.phrase}</span></p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }


}

export default UserProfile;
