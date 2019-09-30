import React, {useState} from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

export default function SkillCard(props: any) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });
    
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.checked });
    };

    return(
        <div>
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                }
                label="Secondary"
            />
        </FormGroup>
        </div>
    )
}