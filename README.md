# Testing the List Component Props

You will need to edit the props for the `ListForm` component in the following file react_list_component/src/App.js

## max
The example below will configure the list component to allow for Max of 3 items to be added. Adding more than 3 items to the list should cause the UI to display and error message.
`<ListForm 
    label="Top 3 Priorities" 
    placeholder="gonna see who's been" 
    max={3}
    // disabled={true}
    // required={true}
/>`

## required
Uncommenting the "required" property prevents adding of an item to the list component if the text input field is empty. Clicking the "ADD" button should dispaly an error message.
`<ListForm 
    label="Top 3 Priorities" 
    placeholder="gonna see who's been" 
    max={3}
    // disabled={true}
    required={true}
/>`

## disabled
Uncommenting the "disabled" property prevents the addition of items to the list component. The "ADD" button should be greyed out and un-clickable.
`<ListForm 
    label="Top 3 Priorities" 
    placeholder="gonna see who's been" 
    max={3}
    disabled={true}
    //required={true}
/>`
