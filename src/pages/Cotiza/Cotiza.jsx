import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Swal from 'sweetalert2'

export default function Cotiza() {
  const [Check, setCheck] = useState(false)
  const [value, setValue] = useState()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE,
        import.meta.env.VITE_APP_TEMPLATE,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }
  const check = () => {
    let agree = document.querySelector('#contactFormAgree')

    let status = agree.checked ? true : false
    setCheck(status)
  }

  const showAlert = () => {
    if (Check) {
      Swal.fire({
        title: 'Confirmado',
        text: 'Hemos recibido tu mensaje, revisaremos la información y estaremos en contacto pronto.',
        icon: 'success',
        button: 'OK',
        timer: '3000',
        timerProgressBar: 'true',
      })
    } else {
      Swal.fire({
        title: 'Espera',
        text: 'Tienes que terminar de rellenar la información.',
        icon: 'info',
        button: 'OK',
        timer: '3000',
        timerProgressBar: 'true',
      })
    }
  }
  return (
    <section className="contact container my-3 paddingTop d-flex justify-content-center" id="contact">
      <div className="maxWidth">
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Teléfono
              </label>
              <div className="form-control">
                <PhoneInput
                  international
                  defaultCountry="ES"
                  value={value}
                  onChange={setValue}
                  name="phone"
                />
              </div>
            </div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="1"
              id="contactFormAgree"
              onChange={check}
              required
            />
            <label className="form-check-label" htmlFor="contactFormAgree">
              Doy mi consentimiento para el tratamiento de los datos personales
              que facilito. He leído y acepto la{' '}
              <a
                className="contact-link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Política de privacidad
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-light btn-lg"
            onClick={showAlert}
          >
            ENVIAR
          </button>
        </form>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Política de privacidad
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  A través de este sitio web no se recaban datos de carácter
                  personal de las personas usuarias sin su conocimiento, ni se
                  ceden a terceros.
                </p>

                <p>
                  Con la finalidad de ofrecerle el mejor servicio y con el
                  objeto de facilitar el uso, se analizan el número de páginas
                  visitadas, el número de visitas, así como la actividad de las
                  persona visitantes y su frecuencia de utilización. A estos
                  efectos, la Agencia Española de Protección de Datos (Yusti
                  Designer) utiliza la información estadística elaborada por el
                  Proveedor de Servicios de Internet.
                </p>

                <p>
                  Yusti Designer no utiliza cookies para recoger información
                  de las personas usuarias, ni registra las direcciones IP de
                  acceso. Únicamente se utilizan cookies propias, de sesión, con
                  finalidad técnica (aquellas que permiten la navegación a
                  través del sitio web y la utilización de las diferentes
                  opciones y servicios que en ella existen).
                </p>

                <p>
                  El portal del que es titular Yusti Designer contiene
                  enlaces a sitios web de terceros, cuyas políticas de
                  privacidad son ajenas a la de Yusti Designer. Al acceder a
                  tales sitios web usted puede decidir si acepta sus políticas
                  de privacidad y de cookies. Con carácter general, si navega
                  por internet usted puede aceptar o rechazar las cookies de
                  terceros desde las opciones de configuración de su navegador.
                </p>

                <h5>Información básica sobre protección de datos</h5>

                <p>
                  A continuación le informamos sobre la política de protección
                  de datos de la Agencia Española de Protección de Datos.
                </p>

                <h5>Responsable del tratamiento</h5>

                <p>
                  Los datos de carácter personal que se pudieran recabar
                  directamente de la persona interesada serán tratados de forma
                  confidencial y quedarán incorporados a la correspondiente
                  actividad de tratamiento titularidad de la Agencia Española de
                  Protección de Datos (Yusti Designer).
                </p>

                <p>
                  La relación actualizada de las actividades de tratamiento que
                 Yusti Designer lleva a cabo se encuentra disponible en el
                  siguiente enlace al registro de actividades de Yusti Designer.
                </p>

                <h5>Finalidad</h5>

                <p>
                  La finalidad del tratamiento de los datos corresponde a cada
                  una de las actividades de tratamiento que realiza Yusti Designer y que están accesibles en el registro de actividades de
                  tratamiento.
                </p>

                <h5>Legitimación</h5>

                <p>
                  El tratamiento de sus datos se realiza para el cumplimiento de
                  obligaciones legales por parte de Yusti Designer, para el
                  cumplimiento de misiones realizada en interés público o en el
                  ejercicio de poderes públicos conferidos a Yusti Designer,
                  así como cuando la finalidad del tratamiento requiera su
                  consentimiento, que habrá de ser prestado mediante una clara
                  acción afirmativa.
                </p>

                <p>
                  Puede consultar la base legal para cada una de las actividades
                  de tratamiento que lleva a cabo Yusti Designer en el
                  siguiente enlace al registro de actividades de la Yusti
                  Designer.
                </p>

                <h5>Conservación de datos</h5>

                <p>
                  Los datos personales proporcionados se conservarán durante el
                  tiempo necesario para cumplir con la finalidad para la que se
                  recaban y para determinar las posibles responsabilidades que
                  se pudieran derivar de la finalidad, además de los períodos
                  establecidos en la normativa de archivos y documentación.
                </p>

                <h5>Comunicación de datos</h5>

                <p>
                  Con carácter general no se comunicarán los datos personales a
                  terceros, salvo obligación legal, entre las que pueden estar
                  las comunicaciones al Defensor del Pueblo, Jueces y
                  Tribunales, personas interesadas en los procedimientos
                  relacionados con la reclamaciones presentadas.
                </p>

                <p>
                  Puede consultar los destinatarios para cada una de las
                  actividades de tratamiento que lleva a cabo Yusti Designer
                  en el siguiente enlace al registro de actividades de la Yusti
                  Designer.
                </p>

                <h5>Derechos de las personas interesadas</h5>

                <p>
                  Para solicitar el acceso, la rectificación, supresión o
                  limitación del tratamiento de los datos personales o a
                  oponerse al tratamiento, en el caso de se den los requisitos
                  establecidos en el Reglamento General de Protección de Datos,
                  así como en la Ley Orgánica 3/2018, de 5 de diciembre, de
                  Protección de Datos Personal y garantía de los derechos
                  digitales, puede dirigir un escrito al responsable del
                  tratamiento, en este caso, Yusti Designer, dirigiendo en el
                  registro electrónico de Yusti Designer rellenando el
                  formulario dispuesto en esta pagina.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
