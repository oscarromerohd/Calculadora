import Button from "./Boton"
import "./PanelDeBotones.css"

export default function PanelDeBotones ({clickHandle}: any) {

const handleClick = (nombreDeBoton: any) => clickHandle(nombreDeBoton)

return(
    <div className="component-button-panel">
        <div>
            <Button name="AC" clickHandle={handleClick} gray/>
            <Button name="+/-" clickHandle={handleClick} gray/>
            <Button name="%" clickHandle={handleClick} gray/>
            <Button name="÷" clickHandle={handleClick} orange/>
        </div>
        <div>
            <Button name="7" clickHandle={handleClick} black/>
            <Button name="8" clickHandle={handleClick} black/>
            <Button name="9" clickHandle={handleClick} black/>
            <Button name="x" clickHandle={handleClick} orange/>
        </div>
        <div>
            <Button name="4" clickHandle={handleClick} black/>
            <Button name="5" clickHandle={handleClick} black/>
            <Button name="6" clickHandle={handleClick} black/>
            <Button name="-" clickHandle={handleClick} orange/>
        </div>
        <div>
            <Button name="1" clickHandle={handleClick} black/>
            <Button name="2" clickHandle={handleClick} black/>
            <Button name="3" clickHandle={handleClick} black/>
            <Button name="+" clickHandle={handleClick} orange/>
        </div>
        <div>
            <Button name="0" clickHandle={handleClick} wide/>
            <Button name="." clickHandle={handleClick} black/>
            <Button name="=" clickHandle={handleClick} orange/>
        </div>

    </div>
);

}
