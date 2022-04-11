import classes from "./setting-panel.module.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const SettingPanel = ({setKkal, setGoalState, setGenderState}) => {
    const [gender, setGender] = useState('male');
    const [goal, setGoal] = useState('loss');
    const [activity, setActivity] = useState(25);
    const [old, setOld] = useState(26);
    const [height, setHeight] = useState(185);
    const [weight, setWeight] = useState(80);

    const calculate = () => {
        let result;
        if (gender === 'female') {
            result = (10 * weight) + (6.25 * height) - (5 * old) - 161;
        }

        if (gender === 'male') {
            result = (10 * weight) + (6.25 * height) - (5 * old) + 5;
        }

        if (gender === 'developer') {
            result = (10 * weight) + (6.25 * height) - (5 * old) - 161;
        }

        if (activity == 25) {
            result = result * 1.2;
        }

        if (activity == 50) {
            result = result * 1.375;
        }

        if (activity == 75) {
            result = result * 1.55;   
        }

        if (activity == 100) {
            result = result * 1.725; 
        }

        if (Math.floor(result) != NaN) {
            setKkal(Math.floor(result))
        }
    }

    useEffect(() => {
        calculate();
    }, [gender, activity, old, height, weight, goal])

    const handleGender = (event, newGender) => {
        setGender(newGender);
        setGenderState(newGender)
    };

    const handleGoals = (event, newGoal) => {
        setGoal(newGoal);
        setGoalState(newGoal);
    };

    const handleOld = (event, newOld) => {
        setOld(newOld);
    }

    const handleHeight = (event, newHeight) => {
        setHeight(newHeight);
    }

    const handleWeight = (event, newWeight) => {
        setWeight(newWeight);
    }

    const marks = [
        {
          value: 25,
          label: 'lower',
        },
        {
          value: 50,
          label: 'Low',
        },
        {
          value: 75,
          label: 'Medium',
        },
        {
          value: 100,
          label: 'High',
        },
    ];

    function valuetext(value) {
        setActivity(value);
        return `${value}`;
    }


    const theme = createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
        },
    });

    return (
        <div className={classes.settingPanel}>
            <div className={classes.content}>
            <p className="bold" style={{marginBottom: '1rem'}}>Setting your preferences</p>
                <ThemeProvider theme={theme}>
                    <p>Weight</p>
                    <Box width={100 + "%"}>
                        <Slider 
                            defaultValue={80} 
                            aria-label="Default" 
                            valueLabelDisplay="auto" 
                            color="secondary"
                            onChange={handleWeight}
                            sx={{
                                '& .MuiSlider-thumb': {
                                    borderRadius: '5px',
                                    width: '10px'
                                },
                            }}
                            max={200}
                        />
                    </Box>

                    <p>Height</p>
                    <Box width={100 + "%"}>
                        <Slider 
                            defaultValue={185} 
                            aria-label="Default" 
                            valueLabelDisplay="auto" 
                            color="secondary"
                            onChange={handleHeight}
                            sx={{
                                '& .MuiSlider-thumb': {
                                    borderRadius: '5px',
                                    width: '10px'
                                },
                            }}
                            min={100}
                            max={250}
                        />
                    </Box>

                    <p>Age</p>
                    <Box width={100 + "%"}>
                        <Slider 
                            defaultValue={26} 
                            aria-label="Default" 
                            valueLabelDisplay="auto" 
                            color="secondary"
                            onChange={handleOld}
                            sx={{
                                '& .MuiSlider-thumb': {
                                    borderRadius: '5px',
                                    width: '10px'
                                },
                            }}
                            min={10}
                            max={150}
                        />
                    </Box>

                    <p>Activity</p>
                    <Box width={100 + "%"}>
                        <Slider 
                            defaultValue={25}
                            aria-label="Custom marks"
                            getAriaValueText={valuetext}
                            step={25}
                            valueLabelDisplay="auto"
                            marks={marks}
                            color="secondary"
                            sx={{
                                '& .MuiSlider-thumb': {
                                    borderRadius: '5px',
                                    width: '10px'
                                },
                            }}
                            min={25}
                            max={100}
                        />
                    </Box>

                    <p style={{margin: '1rem 0'}}>Gender</p>
                    <ToggleButtonGroup
                        value={gender}
                        exclusive
                        onChange={handleGender}
                        color="secondary"
                        >
                        <ToggleButton value="male">Male</ToggleButton>
                        <ToggleButton value="female">Female</ToggleButton>
                        <ToggleButton value="developer">Developer</ToggleButton>
                    </ToggleButtonGroup>

                    <p style={{margin: '1rem 0'}}>Goal</p>
                    <ToggleButtonGroup
                        value={goal}
                        exclusive
                        onChange={handleGoals}
                        color="secondary"
                        >
                        <ToggleButton value="loss">Weight maintenance</ToggleButton>
                        <ToggleButton value="mass">Muscle mass</ToggleButton>
                    </ToggleButtonGroup>
                </ThemeProvider>
            </div>
        </div>
    )
}
