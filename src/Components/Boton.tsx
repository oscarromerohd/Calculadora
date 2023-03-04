import "./Boton.css"

export default function Boton ({clickHandle, name, gray, black, wide, orange}: any) {

    const handleClick = () => clickHandle(name)

    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
        black ? "black" : "",
        gray ? "gray" : "",
    ]

    return (
        <div className={className.join(" ").trim()}>
            <button className="btn" onClick = {handleClick}>{name}</button>
        </div>
    );

}

