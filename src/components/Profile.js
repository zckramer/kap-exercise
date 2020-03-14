import React from 'react';

const Profile = (props) => (
            <div className="Profile">
                <ul>
                    <li>"Company Name: {props.companyName}</li>
                    <li>"Company Data: {props.data}</li>
                    <li>"Price: {props.price}</li>
                </ul>
            </div>

)

export default Profile;