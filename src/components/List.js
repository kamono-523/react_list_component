import {
  List,
  arrayMove,
  arrayRemove
} from 'baseui/dnd-list';
import { EmptyString } from '../constants/helperText'
import { listStyle } from '../styles/main';

export default ({taskList, setList, setErrorMessage, disabled}) => {
    const updateList = (items, oldIndex, newIndex) => {
        if (newIndex === -1) { // Remove item from list when index is -1.
            // Clear any max validation error messages if an item is removed after max has been reached.
            setErrorMessage(EmptyString); 
            return arrayRemove(items, oldIndex);         
        } else {
            return arrayMove(items, oldIndex, newIndex);
        }
    }

    return (
        <List
            removable
            items={taskList}
            onChange={({oldIndex, newIndex}) => {   
                // When disabled, prevent drag/drop and item removal functionality.
                if (!disabled) {
                    setList(updateList(taskList, oldIndex, newIndex));
                }                
            }}
            style={listStyle}
        />
    );
};