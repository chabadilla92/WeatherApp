import React, {useState} from "react";

const Form = (props) => {
const [formData, setFormData] = React.useState({
    searchweather: "",
});

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
};

const handleSubmit = (event) => {
    event.preventDefault();
    props.weathersearch(formData.searchweather);
};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchweather"
                onChange={handleChange}
                value={formData.searchweather}
                />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Form;