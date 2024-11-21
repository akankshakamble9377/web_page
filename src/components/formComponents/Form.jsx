import React, { useState } from 'react';
import RadioButton from '../formComponents/RadioButton';
import CheckBox from '../formComponents/CheckBox';
import Dropdown from '../formComponents/Dropdown';
import TextInput from '../formComponents/TextInput';
import ButtonComon from '../formComponents/ButtonComon';

const Form = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [errors, setErrors] = useState("")

    const handleDropDownChange = ((e) => {
        setSelectedAnswer(e.target.value)
    })
    const dropdownOptions = [
        { value: "answer1", label: "answer1" },
        { value: "answer2", label: "answer2" },
        { value: "answer3", label: "answer3" }
    ]
    const [formData, setFormData] = useState({
        firstName: "",
        LastName: "",
        Email: "",
        contact: "",
        url: "",
        about: "",
    });
    const resetForm = () => {
        setFormData({ firstName: "", LastName: "", Email: "", contact: "", url: "", about: "" });
    }

    const formSubmit = ((e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({ firstName: "", LastName: "", Email: "", contact: "", url: "", about: "" });

        const validaterrors = validate();
        setErrors(validaterrors);
    })
    const handleChange = ((e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    })


    const validate = () => {
        const errors = [];
        if (!formData.firstName) {
            errors.firstName = "firstName is required";
        } else if (formData.firstName.length < 3) {
            errors.firstName = "firstName must be at least 3 characters";
        }


        if (!formData.contact) {
            errors.contact = "contact number is required";
        } else if (formData.contact.length < 10) {
            errors.contact = "contact must 10";
        }


        return errors;
    };


    return (
        <div className="App align-content-center mx-auto ">
            <h1 className='text-center text-success '>Form in React</h1>
            <form onSubmit={formSubmit}>

                <TextInput label="First Name" type="text" name='firstName' value={formData.firstName} onChange={handleChange} errors={errors}/>
                <TextInput label="Last Name " type="text" name='LastName' value={formData.LastName} onChange={handleChange} />
                <TextInput label="Email" type="email" name='Email' value={formData.Email} onChange={handleChange} />
                <TextInput label="contact" type="tel" name='contact' value={formData.contact} onChange={handleChange} />
                <RadioButton />
                <CheckBox />
                <TextInput label="Upload Resume" type="file" name='file' onChange={handleChange} />
                <TextInput label="Enter URL" type="url" name='url' value={formData.url} onChange={handleChange} />
                <Dropdown label="Select Your Answer" name="answer" value={selectedAnswer} options={dropdownOptions} onChange={handleDropDownChange} />
                <TextInput label="About" name='about' value={formData.about} onChange={handleChange} />
                <div className='mt-4 text-center d-flex gap-3 justify-content-center mt-4 py-3 text-center'>
                    <ButtonComon ButtonLabel="Reset" onClick={resetForm} />
                    <ButtonComon ButtonLabel="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form


