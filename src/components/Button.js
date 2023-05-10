
function Button(props) {
    return (
        <button className={props.btn} id={props.id}>{props.content}</button>
    )
}

export default Button;
