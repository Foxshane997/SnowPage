// Settings.js
import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
    const [setting1, setSetting1] = useState(false);
    const [setting2, setSetting2] = useState('default');

    const handleSetting1Change = (event) => {
        setSetting1(event.target.checked);
    };

    const handleSetting2Change = (event) => {
        setSetting2(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Settings saved:', { setting1, setting2 });
    };

    return (
        <div className="settings-page">
            <div className="settings-container">
                <h2>Settings</h2>
                <form onSubmit={handleSubmit}>
                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={setting1}
                                onChange={handleSetting1Change}
                            />
                            Setting 1 (Enable feature)
                        </label>
                    </div>
                    <div className="setting-item">
                        <label>
                            Setting 2 (Choose an option):
                            <select value={setting2} onChange={handleSetting2Change}>
                                <option value="default">Default</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">Save Settings</button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
