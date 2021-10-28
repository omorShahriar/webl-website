import {
  Form,
  Label,
  Input,
  TextArea,
  Button,
  ButtonBox,
  ErrorMessage,
} from "./StyledFormElements";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

const notify = (message, success) =>
  success ? toast.success(message) : toast.error(message);

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setLoading(true);

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
        notify(" Oops! Something went wrong, please try again.", false);
        setLoading(false);
        return;
      }
      setFullname("");
      setEmail("");
      setSubject("");
      setMessage("");
      notify("Thank you! Your Message has been delivered.", true);
      setLoading(false);
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="fullname">
        Full name<span>*</span>
      </Label>
      <Input
        type="text"
        name="fullname"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
      {errors?.fullname && (
        <ErrorMessage>Fullname cannot be empty.</ErrorMessage>
      )}
      <Label htmlFor="email">
        E-mail<span>*</span>
      </Label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {errors?.email && <ErrorMessage>Email cannot be empty.</ErrorMessage>}
      <Label htmlFor="subject">
        Subject<span>*</span>
      </Label>
      <Input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      {errors?.subject && <ErrorMessage>Subject cannot be empty.</ErrorMessage>}
      <Label htmlFor="message">
        Message<span>*</span>
      </Label>
      <TextArea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      {errors?.message && (
        <ErrorMessage>Message body cannot be empty.</ErrorMessage>
      )}
      <ButtonBox>
        <Button disabled={loading}>Send</Button>
        {loading && <MoonLoader color="#3CBB95" size={16} />}
      </ButtonBox>
      <Toaster />
    </Form>
  );
};

export default ContactForm;