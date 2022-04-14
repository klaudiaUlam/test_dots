import BouncingDotsLoader from './BouncingDotsLoader.js';
import { useState } from 'react';

const DotsToRemove = () => {
    const [value, setValue] = useState(0.6);
    const setDotsAnimation = () => {
        const dots = document
            .getElementById('dots')
            ?.getElementsByTagName('div');
        if (dots) {
            dots[0].style.animationDuration = `${value}s`;
            dots[1].style.animationDuration = `${value}s`;
            dots[2].style.animationDuration = `${value}s`;
        }
    };

    const change = (e) => {
        const v = e.target.value;
        setValue(v);
    };

    return (
        <div>
            <BouncingDotsLoader />
            <div>
                <input
                    value={value}
                    onChange={change}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            setDotsAnimation();
                        }
                    }}
                    style={{marginTop: 50}}
                />
            </div>
        </div>
    );
};

export default DotsToRemove;
