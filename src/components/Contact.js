import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const base_url = process.env.REACT_APP_BASE_URI;
  const signupSchema = Yup.object().shape({
    fname: Yup.string().required("Please fill the first name !"),
    lname: Yup.string().required("Please fill the last name !"),
    email: Yup.string()
      .email("must have a valid email !")
      .required("Please fill the email !"),
    mobile: Yup.number()
      .min(10, "must contan 10 digits !")
      .required("Please fill the mobile number !"),
    query: Yup.string()
      .required("Please fill the query !")
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <Formik
                    initialValues={{
                      fname: "",
                      lname: "",
                      email: "",
                      mobile: "",
                      query: "",
                    }}
                    validationSchema={signupSchema}
                    onSubmit={(values, { resetForm }) => {
                      setButtonText("Sending...");
                      const postURL = `${base_url}/user/queryMessageWithoutId`;
                      fetch(postURL, {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          // We should keep the fields consistent for managing this data later
                          name: `${values.fname} ${values.lname}`,
                          email: values.email,
                          mobile: values.mobile,
                          query: values.query,
                        }),
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          resetForm();
                          setButtonText("Send");
                          setStatus({ succes: true, message: 'Message sent successfully' });
                        })
                        .catch((err) => {
                          setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
                        });
                    }}>


                    {({ errors, touched }) => (
                      <Form className="d-flex flex-column gap-15">
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              type="text"
                              name="fname"
                              placeholder="First Name"
                              className="form-control"
                            />
                            {touched.fname && errors.fname ? (
                              <div className="text-warning pb-2 position-relative">
                                <i class="bi bi-info-circle"></i>
                                {` ${errors.fname}`}
                              </div>
                            ) : null}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              type="text"
                              name="lname"
                              placeholder="Last Name"
                              className="form-control"
                            />
                            {touched.lname && errors.lname ? (
                              <div className="text-warning pb-2 position-relative">
                                <i class="bi bi-info-circle"></i>
                                {` ${errors.lname}`}
                              </div>
                            ) : null}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              type="tel"
                              name="mobile"
                              placeholder="Mobile Number"
                              className="form-control"
                            />
                            {touched.mobile && errors.mobile ? (
                              <div className="text-warning pb-2 position-relative">
                                <i class="bi bi-info-circle"></i>
                                {` ${errors.mobile}`}
                              </div>
                            ) : null}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <Field
                              type="email"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                            />
                            {touched.email && errors.email ? (
                              <div className="text-warning pb-2 position-relative">
                                <i class="bi bi-info-circle"></i>
                                {` ${errors.email}`}
                              </div>
                            ) : null}
                          </Col>
                          <Col size={12} className="px-1">
                            <Field
                              as="textarea"
                              name="query"
                              placeholder="Query..."
                              className="form-control"
                              rows="6"
                            />
                            {touched.query && errors.query ? (
                              <div className="text-warning pb-2 position-relative">
                                <i class="bi bi-info-circle"></i>
                                {` ${errors.query}`}
                              </div>
                            ) : null}

                            <button type="submit"><span>{buttonText}</span></button>
                            {
                              status.message &&
                              <span className={status.success === false ? "mx-4 text-danger" : "mx-4 text-warning"}>{status.message}</span>
                            }
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
