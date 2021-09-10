const AccessibilityOptions = (props) => {

    return (
        <div className="flex">
            {props.hand === "Right" ? (
                <>
                    <button onClick={props.handClick}>{props.hand}</button>
                    <button onClick={props.themeClick}>{props.theme}</button>
                </>
            ) : (
                <>
                    <button onClick={props.themeClick}>{props.theme}</button>
                    <button onClick={props.handClick}>{props.hand}</button>
                </>
            )  }
        </div>
    )
}

export default AccessibilityOptions
