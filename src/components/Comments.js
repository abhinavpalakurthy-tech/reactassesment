import React, {useState} from "react";
import { connect } from "react-redux";
import { deleteComment } from "../redux/actions/actions";
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

const Comment = ({ data, deleteComment, flag }) => {

  const [show, setShow] = useState(false)
  const [reason, setReason] = useState('')

  const handleClose = () => setShow(false);

  const handleSave = () => {
      if(reason){
        deleteComment({id: data.id, reason: reason});
      }
      handleClose();
  }

  const handleDelete = () => {
    setShow(true);
  }
  return(
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
              <label>Please Write Reason</label><br/>
              <input type='text' onChange={e => setReason(e.target.value)}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={!reason}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <tbody>      
        { 
          !flag ? 
          <tr>
            <td>{data.author}</td>
            <td>{moment(data.date).format('MMM Do YY')}</td>
            <td>{data.body}</td>
            <td>{data.moddy_hates? 'Satisfy' : 'Complaint'}</td>
            <td><button className = "btn btn-outline-primary" onClick={e => handleDelete()}>Delete</button></td>
          </tr>
          :
          <tr>
            <td>{data.comment[0].author}</td>
            <td>{moment(data.comment[0].date).format('MMM Do YY')}</td>
            <td>{data.comment[0].body}</td>
            <td>{data.comment[0].moddy_hates? 'Satisfy' : 'Complaint'}</td>
            <td>{data.reason}</td>
          </tr>
      
        }
      </tbody>
    </React.Fragment>
  )  
}

// export default Comment;
export default connect(
  null,
  { deleteComment }
)(Comment);
