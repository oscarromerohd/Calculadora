const Boton = ({clickHandle, name }: any) => {

    const handleClick = () => clickHandle(name)

    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    )

}

export default Boton;