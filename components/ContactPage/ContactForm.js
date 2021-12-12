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
import Spinner from "components/Spinner";

const notify = (message, success) =>
  success ? toast.success(message) : toast.error(message);

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setcompanyName] = useState("");
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
    if (companyName.length <= 0) {
      tempErrors["companyName"] = true;
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

    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setLoading(true);

      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          companyName: companyName,
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
        setcompanyName("");
        setSubject("");
        setMessage("");
        notify(" Oops! Something went wrong, please try again.", false);
        setLoading(false);
        return;
      }
      setFullname("");
      setEmail("");
      setcompanyName("");
      setSubject("");
      setMessage("");
      notify("Thank you! Your Message has been delivered.", true);
      setLoading(false);
    }
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
        pattern=".+@.+\..+"
        maxLength={320}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {errors?.email && <ErrorMessage>Email cannot be empty.</ErrorMessage>}
      <Label htmlFor="company-name">
        Company Name<span>*</span>
      </Label>
      <Input
        type="text"
        name="company-name"
        value={companyName}
        onChange={(e) => {
          setcompanyName(e.target.value);
        }}
      />
      {errors?.companyName && (
        <ErrorMessage>Company name cannot be empty.</ErrorMessage>
      )}
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
        <Button disabled={loading} loading={loading ? "true" : ""}>
          Send
        </Button>
        {loading && <Spinner />}
      </ButtonBox>

      <Toaster />
    </Form>
  );
};

export default ContactForm;
