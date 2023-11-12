/* eslint-disable react/prop-types */
import { Container, Form, Button ,Modal} from "react-bootstrap";
import { useEffect, useState } from "react";
import { taskApi } from "../api/api";
const TaskForm = ({onHide,show}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
  });

  const validateTitle = (title) => {
    if (title.length < 3) {
      return "Title must be at least 3 characters long.";
    }

    if (title.length > 100) {
      return "Title cannot be more than 100 characters long.";
    }

    return "";
  };

  const validateDescription = (description) => {
    if (description.length < 10) {
      return "Description must be at least 10 characters long.";
    }

    if (description.length > 1000) {
      return "Description cannot be more than 1000 characters long.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const titleError = validateTitle(formData.title);
    const descriptionError = validateDescription(formData.description);

    setErrors({
      titleError,
      descriptionError,
    });

    // Submit the form if no errors
    if (!titleError && !descriptionError) {
      // Submit the form
      // ...

      // Reset the errors state object
      setErrors({
        titleError: "",
        descriptionError: "",

      });
    }

   const res =  taskApi.createTask(formData);
   console.log(res);
  };

  useEffect(() => {
  }, [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Automatically remove errors when conditions are satisfied
    if (name === "title") {
      setErrors({
        ...errors,
        titleError: validateTitle(value),
      });
    } else if (name === "description") {
      setErrors({
        ...errors,
        descriptionError: validateDescription(value),
      });
    }
  };

  return (
    <>
    

    
    <Modal
show={show}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
onHide={onHide}
>
<Modal.Header closeButton>
  <Modal.Title id="contained-modal-title-vcenter">
    Modal heading
  </Modal.Title>
</Modal.Header>
<Modal.Body>
<Container className="d-flex justify-content-center">
    
          <Form onSubmit={handleSubmit} className="w-75">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter the Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.titleError && <div className="text-danger">{errors.titleError}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Description</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />

              {errors.descriptionError && <div className="text-danger">{errors.descriptionError}</div>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option selected disabled value={""}>
                  Status
                </option>

                <option value="not completed">not completed</option>

                <option value="completed">completed</option>

              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="my-3">
              Add Task
            </Button>
          </Form>
       
    </Container>
</Modal.Body>

</Modal>
    </>
  );
  
};

export default TaskForm;
