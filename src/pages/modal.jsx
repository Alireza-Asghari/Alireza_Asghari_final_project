import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap'

function ViewModal(props) {

      return (
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className='p-3'>
          <div className='text-center'>
          <Button className='text-center' onClick={props.onHide}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
      );
    }
    export default ViewModal;