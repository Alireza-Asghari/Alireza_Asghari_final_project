import {Modal} from 'react-bootstrap';
import AddNewTask from './AddNewTask'

function ViewModal(props) {

      return (
        <Modal
  
        {...props}
          size="xl"
          contentClassName="modal"
          dialogClassName="my-modal " 
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton className="modal-header">
         <Modal.Title id="contained-modal-title-vcenter">
          View Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          
        </Modal.Body>
  
        </Modal>
      );
    }
    export default ViewModal;