import { Alert } from "react-bootstrap"

const WarningSign = ({ msg }) => {
    return (
        <>

            {[



                'danger',



            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {msg} alert—check it out!
                </Alert>
            ))}
        </>

    )
}

export default WarningSign