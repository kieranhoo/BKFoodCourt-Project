import { memo, useState } from 'react';

import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import { deleteFood } from '../../../utils/uploadFood.utils';

function FoodItem({food}) {
    const [show, setShow] = useState({
        show: false,
        food: null,
    });

    const handleClose = () => setShow(false);
    const handleShow = (food) => setShow(
        {
            show: true,
            food: food,
        }
    );
    const handleDelete = async (foodId) => {
        const res = await deleteFood(foodId);
        if (res) {
            alert('Delete success');
            window.location.reload();
        }
        else {
            alert('Delete failed');
        }
    }
    return (
        <>
            <div className= "foodItem_box">
                <img src={food.imageUrl} alt=""></img>
                <div className = "content">
                    <h3>{food.title}</h3>
                    <span>{food.price} VND</span>
                </div>
                <FontAwesomeIcon className= "icon icon_trash ms-3" onClick={() => handleShow(food)} icon={faTrash} />
            </div>
            <Modal show={show.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {show?.food?.title} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(show?.food?.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default memo(FoodItem)