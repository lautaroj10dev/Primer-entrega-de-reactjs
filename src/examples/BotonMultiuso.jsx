const BotonMultiuso = (props) => {
    console.log(props, 'props')
    return (
        <button
            onClick={props.onClickFunction}
            style={{cursor: 'pointer'}}
            >Boton
            </button>
    )
}

export default BotonMultiuso