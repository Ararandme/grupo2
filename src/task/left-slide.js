
function LeftSide(props){

    const style = {
        fontSize: '1.5em',
        margin: '5px',
    };
    return(
        <>
            <button style={style}>{props.name}</button>
            <br/>
        </>
    );
}
export default LeftSide;