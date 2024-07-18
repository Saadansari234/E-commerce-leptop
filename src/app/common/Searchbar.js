import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
    return (
        <div>
            <InputGroup className='searchbar'>
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder='Search' className='input-serach' />
                <InputGroup.Text className='serach-sec'> <IoSearch className='search-icon' /> </InputGroup.Text>
            </InputGroup>
        </div>
    )
}

export default Searchbar