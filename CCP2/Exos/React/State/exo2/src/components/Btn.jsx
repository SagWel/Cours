const Btn = ({label, action}) => {
    return (
        <button type="button" onClick={action}>{label}</button>
    )
}

export default Btn