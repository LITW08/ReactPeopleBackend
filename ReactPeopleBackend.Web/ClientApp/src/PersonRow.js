import React from 'react';

function PersonRow(props) {
    const { onEditClick, onDeleteClick, isSetToDelete, onSetToDeleteChange } = props;
    const { firstName, lastName, age } = props.person;

    return (
        <tr>
            <td>
                <input
                    checked={isSetToDelete}
                    onChange={onSetToDeleteChange}
                    type="checkbox"
                    className="form-control" />
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>
                <button className="btn btn-warning" onClick={onEditClick}>Edit</button>
                <button style={{ marginLeft: 10 }} onClick={onDeleteClick} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default PersonRow;