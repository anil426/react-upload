import React from 'react';


const FileUpload = (props) => {
    return(

        <div>
        <label >select {props.typeName}:</label>
        <input type="file" name={props.typeName} id="uploadFile"  onChange={props.onChange}/>
    </div>
    )
}

export default FileUpload;