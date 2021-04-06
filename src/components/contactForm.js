import React, { Component } from 'react';
import validator from '../shared/validation';
import { Form, FormFeedback, FormGroup, Label, Row, Input, Button, Container, Col } from 'reactstrap';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            message: null,
            subject: null,
            refresh: false,
            auth: '1r0m1v0c_105'
        }
        this.email = React.createRef();
        this.name = React.createRef();
        this.message = React.createRef();
        this.subject = React.createRef();

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

    handleSub = (event) => {
        event.preventDefault();
        if (!this.validator.isValid(this.state, this.fieldTests)) {
            this.setState({ refresh: !this.state.refresh });
            return;
        }
        /* Send State to email API*/
        this.props.checkSub(false);
    }

    render() {
        const errors = this.validator.errors;
        return (
            <Form className="col-12 col-md-8 pb-4 offset-md-2" onSubmit={this.handleSub} onBlur={this.handleOnBlur} method="POST">
                <Row className="p-0">
                    <FormGroup className="col-sm-12 col-md">
                        <Label>Name</Label>
                        <Input type="text" htmlRef={this.name} name="name" invalid={errors.name} />
                        <FormFeedback>{errors.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup className="col-sm-12 col-md">
                        <Label>Email</Label>
                        <Input type="text" htmlRef={this.email} name="email" invalid={errors.email} />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col" >
                        <Label>Topic</Label>
                        <Input type="select" name="subject" className="custom-select" htmlRef={this.subject} invalid={errors.subject}>
                            <option value="">Regarding</option>
                            <option value="1">Print Project</option>
                            <option value="1">Branding Project</option>
                            <option value="1">CopyWriting Project</option>
                            <option value="1">Web Design Project</option>
                            <option value="1">Front End Development Project</option>
                            <option value="1">Back End Development Project</option>
                            <option value="1">Full Stack Project</option>
                            <option value="Other">Other</option>
                        </Input>
                        <FormFeedback>{errors.subject}</FormFeedback>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup className="col">
                        <Label >Message</Label>
                        <Input type="textarea" htmlRef={this.message} name="message" invalid={errors.message} />
                        <FormFeedback>{errors.message}</FormFeedback>
                    </FormGroup>
                </Row>
                <Row><Button className="col-6 offset-3">Send</Button></Row>
            </Form >
        );
    }
}

function ResetForm(props) {

    return (
        <Col className="pb-4 offset-md-2 text-center" xs="12" md="8">
            <p>Thank you. Your Mesage has been sent and I will respond soon.</p>
            <Button onClick={() => props.resetForm(true)}>Reset Form</Button>
        </Col>

    )
}

class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fresh: true
        }
    }

    used = (fresh) => { this.setState({ fresh: fresh }) }

    render() {

        return (
            <div className="proj-page" >
                <div className="page-title">
                    <Container tag="h2" fluid='xl' className="text-center"> Get In Touch </Container>
                </div>
                <Container fluid='xl' >
                    <Row>
                        {this.state.fresh ? <ContactForm checkSub={this.used} /> : <ResetForm resetForm={this.used} />}
                    </Row>
                </Container>
            </div>
        )
    }
}


export default ContactPage;
