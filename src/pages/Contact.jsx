/*
 * Contact.jsx
 *
 * React component for the main content to display the Contact form page.
 *
 * Displays a web form for a user to submit an email message
 *
 * The sendmail functionality itself has yet to be implemented, but the goal
 * of the exercise is to use react and bootstrap to validate the input and provide
 * immediate validation feedback
 *
 */

import { useState } from "react";
import validator from "validator";

import "../assets/css/Contact.css";

export default function Contact() {
  // Set reasonable (and safe) field input lengths
  const MAX_NAME_LEN = 50;
  const MIN_MESSAGE_LEN = 4; // A 'test' message is fine
  const MAX_MESSAGE_LEN = 500;

  // State for form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // State to track the status of each form input value
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    message: "",
  });

  // State to manage the overall form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);

  /*
   * validateField()
   *
   * Check the given iput field for valid data
   *
   * If an error is detected, add an error message to the error state. Otherwise set
   * an empty string to indicate the input is valid
   *
   */
  const validateField = (name, value) => {
    switch (name) {
      case "username":
        if (!value) {
          return "Please enter your name.";
        }

        if (value.length < 1 || value.length > MAX_NAME_LEN) {
          return `A valid name can be up to ${MAX_NAME_LEN} characters`;
        }

        break;
      case "email":
        if (!value) {
          return "Please enter your email address.";
        } else if (!validator.isEmail(value)) {
          return "Invalid email address.";
        }
        break;
      case "message":
        if (!value) {
          return "Please enter a message.";
        }
        if (
          value.length < 1 ||
          value.length < MIN_MESSAGE_LEN ||
          value.length > MAX_MESSAGE_LEN
        ) {
          return `Your message needs to be at least ${MIN_MESSAGE_LEN} characters long, please!`;
        }
        break;
      default:
        break;
    }

    // An empty string indicates the input passes validation
    return "";
  };

  /*
   * handleOnBlur()
   *
   * Provides immediate feedback for invalid input on the selected
   *    field after changing the focus away from it
   *
   */
  const handleOnBlur = (event) => {
    const { name, value } = event.target;

    /*
     * TODO: after a successful submit, if you go back
          to submit another, the success message should be cleared.
          Implment handleOnFocus for this:

      // clear previous submit status
      setSubmissionStatus("");
   */

    // Update the error state for the specific field
    const updatedErrors = {
      username: errors.username,
      email: errors.email,
      message: errors.message,
    };

    updatedErrors[name] = validateField(name, value);

    setErrors(updatedErrors);
  };

  /*
   * handleOnChange()
   *
   * Provides immediate feedback for invalid input on the selected field
   *
   */
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // clear previous submit status
    setSubmissionStatus("");

    // Update the form data value for the current field
    const updatedFormData = {
      username: formData.username,
      email: formData.email,
      message: formData.message,
    };

    updatedFormData[name] = value;
    setFormData(updatedFormData);

    // Clear the error message for the current field
    const updatedErrors = {
      username: errors.username,
      email: errors.email,
      message: errors.message,
    };

    // immediate feedback for validation errors on the active input
    updatedErrors[name] = validateField(name, value);

    setErrors(updatedErrors);
  };

  /*
   * handleFormSubmit()
   *
   * Check the given iput field for valid data
   *
   * If an error is detected, add an error message to the error state. Otherwise set
   * an empty string to indicate the input is valid
   *
   * A text field shows the status the message submission
   *
   */
  const handleFormSubmit = (e) => {
    e.preventDefault(); // prevent the auto page refresh

    // Validate all fields
    const newErrors = {
      username: validateField("username", formData.username),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    // Check for any values that are not empty strings indicating an error
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      setSubmissionStatus("success");

      /*
       * NOTE: Send the email on success here. This is not the focus nor a
       * requirement for this exercise but it may come up in a later lesson.
       * I plan to follow up either way.
       *
       */

      // clear the input fields
      setFormData({
        username: "",
        email: "",
        message: "",
      });
    } else {
      setSubmissionStatus("error");
    }
  };

  /*
   * JSX
   *
   * returns a bootstrap layout of the contact form that provides active input
   * validation and submit feedback. It handles mouse activity, input change
   * and the submit button click for the validation, and uses a standard validator
   * package to avoid hacky and error prone custom rules
   *
   */
  return (
    <div>
      <h2 className="mt-3">Contact</h2>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Your name"
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Your email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              placeholder="Your message"
              rows="5"
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {submissionStatus === "error" && (
            <div className="text-danger">
              Please fix the errors above and try again.
            </div>
          )}
          {submissionStatus === "success" && (
            <div className="text-success">
              Your message was submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
