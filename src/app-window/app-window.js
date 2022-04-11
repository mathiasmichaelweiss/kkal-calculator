import classes from "./app-window.module.css"
import { Chart } from "./components/chart/chart"
import { SettingPanel } from "./components/setting-panel/setting-panel"
import { useState } from 'react';
import { useEffect } from 'react';

export const AppWindow = () => {
    const [kkal, setKkal] = useState();
    const [pfc, setPfc] = useState(
        [340, 75, 340],
    );
    const [goal, setGoal] = useState('loss');
    const [gender, setGender] = useState('');

    useEffect(() => {
        if (kkal) {
            if (goal === 'loss') {
                setPfc([
                    Math.floor((kkal - (kkal / 100 * 82)) / 4),
                    Math.floor((kkal - (kkal / 100 * 68)) / 9),
                    Math.floor((kkal - (kkal / 100 * 50)) / 4),
                ])
            }

            if (goal === 'mass') {
                setPfc([
                    Math.floor((kkal - (kkal / 100 * 70)) / 4),
                    Math.floor((kkal - (kkal / 100 * 80)) / 9),
                    Math.floor((kkal - (kkal / 100 * 60)) / 4),
                ])
            }
        }     
        console.log(gender);
    },[kkal, goal, gender])

    return (
        <div className={classes.window}>
            <div className={classes.container}>
                <Chart pfc={pfc} gender={gender} kkal={kkal}/>
                <SettingPanel setKkal={setKkal} setGoalState={setGoal} setGenderState={setGender}/>
            </div>
        </div>
    )
}