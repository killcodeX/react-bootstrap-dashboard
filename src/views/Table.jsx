import React from 'react'

export default function Table(props) {

    console.log('coming from table',props.candidate)

    const {candidate,key} = props;
    // console.log(candidatesS)
    return (
        <tr key={key}>
            <td>{candidate._id}</td>
            <td>{candidate.firstName}</td>
            <td>{candidate.email}</td>
            <td>{candidate.mobileno}</td>
            <td>{candidate.experience}</td>
        </tr>
    )
}
