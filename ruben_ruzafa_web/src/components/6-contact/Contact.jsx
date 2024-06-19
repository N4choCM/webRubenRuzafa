import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vcksz6s',
        'template_kzy0men',
        form.current,
        'Bfwqi2sxD8k6UGO6W'
      )
      .then(
        () => {
          setAlert({
            show: true,
            type: 'success',
            message: '¡Email enviado correctamente!',
          });
          form.current.reset(); // Reset the form

          // Hide the alert after 5 seconds
          setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
          }, 5000);
        },
        (error) => {
          setAlert({
            show: true,
            type: 'error',
            message: 'Email no enviado. Por favor, inténtelo de nuevo.',
          });
          console.log('FAILED...', error.text);

          // Hide the alert after 5 seconds
          setTimeout(() => {
            setAlert({ show: false, type: '', message: '' });
          }, 5000);
        }
      );
  };

  return (
    <div
      id="contact"
      className="carousel slide carousel-fade anchor"
      data-bs-ride="carousel"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col text-uppercase text-center pt-4">
            <h3>Contacto</h3>
            <br />
          </div>
        </div>
        {alert.show && (
          <div className="alert-container">
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity={alert.type}
              onClose={() => setAlert({ show: false, type: '', message: '' })}
            >
              {alert.message}
            </Alert>
          </div>
        )}
        <form
          className="row needs-validation mx-auto"
          noValidate
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="col-12 col-md-8 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
              name="name"
            />
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              required
              name="email"
            />
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Hola, Rubén, te escribo para..."
              required
              name="message"
            />
          </div>
          <div className="col-12 col-md-8 offset-md-2 mt-3 d-grid pb-5">
            <button
              className="btn bg-red-ruben text-white"
              type="submit"
              value="Send"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
