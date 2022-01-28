import { Button, TextField, FormControl } from '@material-ui/core';
import List from './List';
import { useState } from 'react';
import { listStyle, buttonStyle, textInputStyle } from '../styles/main';
import { EmptyString, ErrorMessages } from '../constants/helperText';

export const ListForm = ({
    label, 
    placeholder, 
    max = 0,
    disabled = false,
    required = false,
}) => {    
    const [textFieldInputValue, setTextFieldInputValue] = useState(EmptyString);
    const [taskList, setTaskList ] = useState(['one', 'two']);
    const [errorMessage, setErrorMessage] = useState(EmptyString);


    const hasValue = (max) => {
        return (max !== 0);
    };

    const isLessThanMax = (max, listLength) => {
        return (listLength < max);
    };

    const isTextFieldEmpty = (value) => {
        return (required && value === EmptyString);
    };

    const addItemToList = (value) => {
        if (isTextFieldEmpty(value)) {
            setErrorMessage(ErrorMessages.inputRequired);
            return;
        }

        if (hasValue(max) && isLessThanMax(max, taskList.length)) {
            setErrorMessage(EmptyString);
            setTaskList((prevState) => {
                return [
                ...prevState,
                value
                ];
            });
        } else {
            // Show Max error
            setErrorMessage(ErrorMessages.maxInput);
        }        
    };
    
    const clearTextFieldInput = () => {
        setTextFieldInputValue(EmptyString);
    };
    
    const handleTextFieldChange = (e) => {
        setErrorMessage(EmptyString);
        setTextFieldInputValue(e.target.value);
    };
    
    const handleButtonClick = () => {
        addItemToList(textFieldInputValue);
        clearTextFieldInput();  
    };

    return (
        <div>
            <TextField 
                id="task" 
                placeholder={placeholder} 
                value={textFieldInputValue} 
                onChange={handleTextFieldChange} 
                label={label} 
                variant="standard" 
                style={textInputStyle}
                error={Boolean(errorMessage)}
                helperText={errorMessage}
            />
            <Button
                id="task-button"
                color="primary" 
                onClick={handleButtonClick} 
                variant="contained"
                style={buttonStyle}
                disabled={Boolean(errorMessage) || disabled}
            > 
                Add 
            </Button>
            <div style={listStyle}>
                <List 
                    taskList={taskList} 
                    setList={setTaskList}
                    setErrorMessage={setErrorMessage}
                    disabled={disabled}            
                />
            </div>            
        </div>
    );
}