const Btn = ({nom, handleClick}) => {
    return (
        <button type="button" onClick={handleClick}>{nom}</button>
    )
}

export default Btn