// A sinle die square with dots inside representing it's values from 1 to 6 inclusive
function Die(props){
    return (
        <button type="" onClick={props.freeze} className={`dice ${props.on ? "on" : ''}`}>
            {[...Array(props.n)].map(n => <span className="dot"></span>)}
        </button>
    ); 
};

export default Die;