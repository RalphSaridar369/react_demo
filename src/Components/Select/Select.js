import React from 'react';
import '../Components.scss';
import Select from 'react-select';

const SelectComponent = (props) => {
    return (
        <div className='input' style={{ margin: "10px 0" }}>
            <Select
                {...props}
                // isSearchable
                // value={userCred.category}
                // onChange={(e) => setUserCred({ ...userCred, category: e })}
                // options={categories}
            />
        </div>
    )
}

export default SelectComponent