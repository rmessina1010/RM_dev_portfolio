import React, { Component } from 'react';
import validator from '../shared/validation';
import { Form, FormFeedback, FormGroup, Label, Row, Input, Button, Container, Col } from 'reactstrap';
import { myEmail } from '../shared/siteData';

const subjectOptions = [
    'Web Development Project',
    'App Development Project',
    'Front End Development Project',
    'Back End Development Project',
    'UX Project',
    'UI Project',
    'Full Stack Project',
    'Print Project',
    'Branding Project',
    'CopyWriting Project',
    'Web Design Project'
];

const formOptions = subjectOptions.map(opt => <option value={opt}>{opt}</option>)

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            message: null,
            subject: null,
            refresh: false,
            confirm: "",
            auth: "1r0m1v0c_105"
        }

        this.fieldTests = {
            name: [{ test: "required", err: "I'd prefer not to adress you as 'Hey, you'." }, { test: "isValidName", err: "Come on, your actual name." }],
            email: [{ test: "required", err: "I kinda need this to get back to you." }, { test: "isValidEmail", err: "Please fill  a valid email." }],
            message: [{ test: "required", err: "Um, I thought you had something to say." }],
            subject: [{ test: "required", err: "So, what's this about?" }],
        }
        this.validator = new validator(this.fieldTests);
    }
    handleOnBlur = (event) => {
        let newStateProp;
        const element = event.target;
        switch (element.name) {
            case "name":
            case "email":
            case "subject":
            case "message":
            case "confirm":
                newStateProp = { [element.name]: element.value };
                break;
            default:
                newStateProp = false;
        }
        if (newStateProp) {
            this.setState(newStateProp);
            this.validator.validate(newStateProp, { [element.name]: this.fieldTests[element.name] });
        }
    }

    sendData = () => {
        const XHR = new XMLHttpRequest();
        const FD = new FormData();
        let foo = this.props.checkSub;
        let name = this.state.name;

        FD.append("name", this.state.name);
        FD.append("_subject", this.state.subject);
        FD.append("message", this.state.message);
        FD.append("email", this.state.email);
        FD.append("_captcha", "false");
        FD.append("_replyto", this.state.email);
        XHR.addEventListener("load", function (e) { foo(false, name); });

        XHR.addEventListener("error", function (e) {
            alert("Oops! We were unable to send your message. Please try again later.");
        });
        XHR.open("POST", "https://formsubmit.co/" + process.env.REACT_APP_MAIN_EMAIL);
        XHR.send(FD);
    }

    handleSub = (event) => {
        event.preventDefault();
        if (!this.validator.isValid(this.state, this.fieldTests)) {
            this.setState({ refresh: !this.state.refresh });
            return;
        }
        /* Send State to email API*/
        if (this.state.confirm) { return; } // prevents spam
        this.sendData();
        /*--*/
    }

    render() {
        const errors = this.validator.errors;
        return (
            <Form className="col-12 col-md-8 pb-4 offset-md-2" onSubmit={this.handleSub} onBlur={this.handleOnBlur} method="POST"  >
                <Row className="p-0">
                    <FormGroup className="col-sm-12 col-md">
                        <Label>Name</Label>
                        <Input type="text" name="name" invalid={errors.name} />
                        <FormFeedback>{errors.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup className="col-sm-12 col-md">
                        <Label>Email</Label>
                        <Input type="text" name="email" invalid={errors.email} />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col" >
                        <Label>Topic</Label>
                        <Input type="select" name="subject" className="custom-select" invalid={errors.subject}>
                            <option value="">Regarding</option>
                            {formOptions}
                            <option value="Other">Other</option>
                        </Input>
                        <FormFeedback>{errors.subject}</FormFeedback>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col">
                        <Label >Message</Label>
                        <Input type="textarea" name="message" invalid={errors.message} />
                        <FormFeedback>{errors.message}</FormFeedback>
                    </FormGroup>
                </Row>
                <Row>
                    <Button className="col-6 offset-3">Send</Button>
                    <input type="text" name="confirm" style={{ display: 'none' }} />
                </Row>
            </Form >
        );
    }
}

function ResetForm(props) {
    let name = props.person.split(' ');
    return (
        <Col className="pb-4 offset-md-2 text-center" xs="12" md="8">
            <p>Thank you for reaching out, {name[0]}. Your mesage has been sent and I will respond soon.</p>
            <Button onClick={() => props.resetForm(true, '')}>Reset Form</Button>
        </Col>

    )
}

class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fresh: true,
            name: ''
        }
    }

    used = (fresh, name) => { this.setState({ fresh, name }) }

    render() {

        return (
            <div className="proj-page" >
                <div className="page-title">
                    <Container tag="h2" fluid='xl' className="text-center"> Get In Touch </Container>
                </div>
                <Container fluid='xl' >
                    <Row>
                        {this.state.fresh ? <ContactForm checkSub={this.used} /> : <ResetForm resetForm={this.used} person={this.state.name} />}
                    </Row>
                </Container>
            </div>
        )
    }
}


export default ContactPage;
