import React, {useState} from 'react';
import { Button,Modal,Form } from 'react-bootstrap';

export default function Table(props) {
    const {candidate,key, updateCandidate} = props;

    const [show, setShow] = useState(false);
    const [newCandidateName, setNewCandidateName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = (e,_id) => {
        e.preventDefault();
        // console.log(newCandidateName, _id)

        const newname = {
            id : _id,
            set :{
                firstName: newCandidateName	
            }
        }

        const newJson = JSON.stringify(newname);
        updateCandidate(newJson)

        setNewCandidateName('');
    }



    return (
        <>
            <tr key={key}>
            <td>{candidate._id}</td>
            <td>{candidate.firstName}</td>
            <td>{candidate.email}</td>
            <td>{candidate.mobileno}</td>
            <td>{candidate.experience}</td>
            <td><Button variant="primary" 
            className="btn-warning mt-5" 
            onClick={handleShow}
            >Update</Button></td>
            </tr>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update {candidate.firstName} {candidate.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => submit(e,candidate._id)}>
                        <label>Input first Name {candidate.firstName}</label>
                        <input type="text" placeholder="Enter first name.." value={newCandidateName} onChange={e => setNewCandidateName(e.target.value)}/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" className="primary" onClick={handleClose} type='submit'>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
