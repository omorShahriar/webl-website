import { Container } from "styled-bootstrap-grid";
import {
  Title,
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  InnerWrapper,
  TextArea,
  OuterBackground,
  SVGWave,
} from "components/GetQuotePage/StyledComponents";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "components/Spinner";

//form validation needed to be added later
const GetQuote = () => {
  const [loading, setloading] = useState(false);
  const baseState = {
    name: "",
    email: "",
    company_name: "",
    project_brief: "",
  };
  const [errorMessage, setErrorMessage] = useState({ ...baseState });
  const [formData, setFormData] = useState({
    ...baseState,
  });
  const handleValidation = () => {
    const ValidateEmail = (mail) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }

      return false;
    };
    const tempErrors = { ...baseState };
    let valid = true;
    if (formData.name.length <= 0) {
      tempErrors.name = "Name can't be empty";
      valid = false;
    }
    if (formData.email.length <= 0) {
      tempErrors.email = "Email can't be empty";
      valid = false;
    }
    if (formData.company_name.length <= 0) {
      tempErrors.company_name = "Company name can't be empty";
      valid = false;
    }
    if (!ValidateEmail(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      valid = false;
    }
    if (formData.project_brief.length <= 0) {
      tempErrors.project_brief = "Project brief name can't be empty";
      valid = false;
    }
    setErrorMessage({ ...tempErrors });
    return valid;
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage({ ...errorMessage, [e.target.name]: false });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const valid = handleValidation();
    if (valid) {
      setloading(true);

      const res = await fetch("/api/quote-form-entry", {
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();
      if (error) {
        toast.error("Something went wrong!");
        setloading(false);
      }
      toast.success(
        "We recieved your input. someone will reach you in due time"
      );
      setFormData({ ...formData, ...baseState });
      setloading(false);
    }
  };
  return (
    <>
      <OuterBackground>
        <SVGWave />
      </OuterBackground>
      <Container>
        <InnerWrapper>
          <Title>Get a quote</Title>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="name">
                Name
                {errorMessage.name && <span>{errorMessage.name}</span>}
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={onChange}
                value={formData.name}
                error={errorMessage.name}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">
                Email
                {errorMessage.email && <span>{errorMessage.email}</span>}
              </Label>
              <Input
                type="text"
                name="email"
                id="email"
                onChange={onChange}
                value={formData.email}
                error={errorMessage.email}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="company_name">
                Company Name
                {errorMessage.company_name && (
                  <span>{errorMessage.company_name}</span>
                )}
              </Label>
              <Input
                type="text"
                name="company_name"
                id="company_name"
                onChange={onChange}
                value={formData.company_name}
                error={errorMessage.company_name}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="project_brief">
                Project Brief
                {errorMessage.project_brief && (
                  <span>{errorMessage.project_brief}</span>
                )}
              </Label>
              <TextArea
                name="project_brief"
                id="project_brief"
                onChange={onChange}
                value={formData.project_brief}
                error={errorMessage.project_brief}
              />
            </FormGroup>

            <Button disabled={loading} type="submit">
              {loading ? (
                <span>
                  Sending <Spinner color="#fff" size={16} />{" "}
                </span>
              ) : (
                "Send"
              )}
            </Button>
          </Form>
          <Toaster
            toastOptions={{
              success: {
                duration: 3500,
              },
            }}
          />
        </InnerWrapper>
      </Container>
    </>
  );
};

export default GetQuote;
