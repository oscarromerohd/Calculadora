import "./Display.css"

export default function Dispaly ({value}: any) {
    return (
        <div className="component-display">
            <div>{value}</div>
        </div>
    )
}