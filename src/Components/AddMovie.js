import {Button,Modal,Form} from "react-bootstrap"
import {useState} from 'react'


function AddMovie(props) {
  
    const [show, setShow] = useState(false);
    const [newContact,setNewContact]= useState({
        name:"",
        tel:"",
        adress:""
    })
    const handleClose = () => setShow(false);
    const handleSave = ()=>{
        props.handleAddContact(newContact)
        handleClose()

    }
    const handleShow = () => setShow(true);
    const handleChange=(e)=>setNewContact({...newContact,[e.target.name]:e.target.value})
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          ADD New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="name"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tel:</Form.Label>
                <Form.Control
                  type="text"
                  name="tel"
                  placeholder="Tel"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Adress:</Form.Label>
                <Form.Control
                  type="text"
                  name="adress"
                  placeholder="adress"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default AddMovie;