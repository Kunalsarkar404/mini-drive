import React from 'react'
import { useState } from 'react'
import { Modal, Button, Form } from  'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

function AddFolderButton() {
    const [open, setOpen] = useState(false)
    function closeModal(){
        setOpen(false)
    }
    function openModal(){
        setOpen(true)
    }
    return (
        <>
            <button onClick={openModal}>
                <FontAwesomeIcon icon={faFolderPlus} />
            </button>

            <Modal show = {open} onHide = {closeModal}>
                <Form>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control
                            type = "text"
                            required
                            />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick ={closeModal} variant="secondary">Close</Button>
                        <Button variant="primary">Add Folder</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddFolderButton