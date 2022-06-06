import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useRef } from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useSocket from "../../../utils/hooks/useSocket.jsx";

const ModalForm = ({ onHide }) => {
  const { socket } = useSocket();
  const inputEl = useRef();
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.channels);
  const channelsName = channels.map((item) => item.name);
  console.log(channelsName);

  const isUnique = (channels, name) => {
    const same = channels.find((item) => item === name);
    return !same;
  };

  const Schema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .test("repeat", () => isUnique(channelsName, formik.values.name)),
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      socket.emit("newChannel", values);
      onHide();
    },
  });

  return (
    <>
      <form className="" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormControl
            ref={inputEl}
            name="name"
            id="name"
            className="mb-2"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <div className="invalid-feedback" style={{ display: "block" }}>
            {formik.errors.name ? formik.errors.name : null}
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
    </>
  );
};

export default ModalForm;
