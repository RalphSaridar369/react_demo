import React from 'react';
import {Button} from '@mui/material'
import '../Components.scss';

const DocPicker = ({startIcon, endIcon, text, types, ...props}) => {

    return (
        <Button
            variant="outlined"
            component="label"
            startIcon={startIcon}
            endIcon={endIcon}
            className='doc'
        >
            <p style={{color:'#FF6863'}}>{text}</p>
            <input
                type="file"
                hidden
                {...props}
            />
        </Button>
    )
}

export default DocPicker