const Btn = ({ label, onAction}) => {

    return (
        <button type="button" onClick={onAction}>{label}</button>
    )
}

export default Btn