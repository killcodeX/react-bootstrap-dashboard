import React from 'react';
import { Button } from 'react-bootstrap';

export default function Table(props) {
    const {candidate,key, updateCandidate} = props;
    const mystyle={
        marginTop:'5px',
        padding: '5px'
    }
    return (
        <tr key={key}>
            <td>{candidate._id}</td>
            <td>{candidate.firstName}</td>
            <td>{candidate.email}</td>
            <td>{candidate.mobileno}</td>
            <td>{candidate.experience}</td>
            <Button variant="primary" 
            className="btn-warning mt-5" 
            style={mystyle}
            onClick={console.log('hey')}
            >Update</Button>
        </tr>
    )
}
