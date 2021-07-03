import React, {useState} from 'react';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function SkillCard(props: any) {
    const [state, setState] = React.useState({
        excellent_CompanionShip: true,
        provide_basic_care: true,
        escort_appointments: false
    });

    const [isEdit, setEdit] = React.useState(false);
    
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.checked });
    };

    const toggleEdit = (): void => {
        setEdit(!isEdit); 
    }

    if(!isEdit) {
        return (
            <div>
                <Button 
                    color="primary" 
                    onClick={toggleEdit}
                >
                    Edit Skills
                </Button>
            </div>
        )
    }

    return(
        <div>
            <Typography variant="h6" >
                Skills
            </Typography>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox checked={state.excellent_CompanionShip} onChange={handleChange('excellent_CompanionShip')} value="checkedA" />
                    }
                    label="Excellent Companionship"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={state.provide_basic_care} onChange={handleChange('provide_basic_care')} value="checkedA" />
                    }
                    label="Provide Basic Care"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={state.escort_appointments} onChange={handleChange('escort_appointments')} value="checkedA" />
                    }
                    label="Escort Appointments"
                />
                <br />
            </FormGroup>
            <div>
                <Button 
                    color="secondary" 
                    onClick={toggleEdit}
                >
                    Back
                </Button>
                <Button 
                    color="primary" 
                    onClick={props.updateSkills}
                >
                    Update
                </Button>
            </div>
        </div>
    )

}