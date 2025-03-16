import { useState } from "react";
import "./as1.css";

const Structure = () => {
    const [expandedLevels, setExpandedLevels] = useState({});
    const [expandedSublevels, setExpandedSublevels] = useState({});

    function toggleLevel(name) {
        setExpandedLevels(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    }

    function toggleSublevel(name) {
        setExpandedSublevels(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    }

    function Level({ name, children }) {
        return (
            <div className="level" onClick={() => toggleLevel(name)}>
                {expandedLevels[name] ? "▼" : ">"} {name}
                {expandedLevels[name] && children}
            </div>
        );
    }

    function Sublevel({ name, children }) {
        return (
            <div className="sublevel" onClick={(e) => { e.stopPropagation(); toggleSublevel(name); }}>
                {expandedSublevels[name] ? "▼" : ">"} {name}
                {expandedSublevels[name] && children}
            </div>
        );
    }

    return (
        <div>
            <Level name="Level 1">
                <Sublevel name="Sublevel 1">
                    <div className="item">Item1</div>
                    <div className="item">Item2</div>
                </Sublevel>
                <Sublevel name="Sublevel 2">
                    <div className="item">Item1</div>
                    <div className="item">Item2</div>
                </Sublevel>
            </Level>

            <Level name="Level 2">
                <Sublevel name="Sublevel 1">
                    <div className="item">Item1</div>
                    <div className="item">Item2</div>
                </Sublevel>
                <Sublevel name="Sublevel 2">
                    <div className="item">Item1</div>
                    <div className="item">Item2</div>
                </Sublevel>
                <Sublevel name="Sublevel 3">
                    <div className="item">Item1</div>
                    <div className="item">Item2</div>
                </Sublevel>
            </Level>
        </div>
    );
};

export default Structure;
