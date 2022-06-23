import { Badge } from "react-bootstrap"

const MyBadge = ({text, textColor}) => {
    return (
        <div>

            <h2>
             <Badge bg="secondary" style={{ color: textColor }}>{text}</Badge>
            </h2>
        </div>
    )
}
export default MyBadge