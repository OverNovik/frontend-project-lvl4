import React, { useRef, useEffect } from "react";
import { Modal, Button, FormControl, FormGroup } from "react-bootstrap";
import ModalHeader from "./components/ModalHeader.jsx";

const Rename = ({ onHide }) => {
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Modal show centered>
      <ModalHeader onHide={onHide} headerTitle="Переименовать канал" />
      <Modal.Body>
        <form className="">
          <FormGroup>
            <FormControl
              ref={inputEl}
              name="name"
              id="name"
              className="mb-2"
              value="new channel"
            />

            <div className="invalid-feedback" style={{ display: "block" }}>
              {/* {formik.errors.name ? formik.errors.name : null} */}
            </div>
            <div className="d-flex justify-content-end">
              <Button
                onClick={onHide}
                type="button"
                className="me-2 btn btn-secondary"
              >
                Отменить
              </Button>
              <Button type="submit" className="btn btn-primary">
                Отправить
              </Button>
            </div>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
