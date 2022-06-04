import { useFormik } from "formik";
import React from "react";
import useSocket from "../../../utils/hooks/useSocket.jsx";

const ModalForm = () => {
  const { socket } = useSocket();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values, actions) => {
      socket.emit('newChannel', values);
    }
  })

  return (
    <>
      <form className="">
        <div>
          <input
            name="name"
            id="name"
            className="mb-2 form-control"
          // value=""
          />
          <label className="visually-hidden" htmlFor="name">Имя канала</label>
          <div className="invalid-feedback"></div>
          <div className="d-flex justify-content-end">
            <button type="button" className="me-2 btn btn-secondary">Отменить</button>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ModalForm;