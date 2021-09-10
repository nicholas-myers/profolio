import React from "react"

const Wing = (props) => {

    const styles = {
        position: "fixed",
        padding: "1%",
        width: props.width,
        height: props.height,
        transition: "0.5s",
    }

    if (props.top) {
        styles["top"] = "0"
    } else if (props.bottom) {
        styles["bottom"] = "0"
    } else if (props.middle) {
        styles["top"] = props.middle
    }

    if (props.right) {
        styles["right"] = "0"
    } else if (props.left) {
        styles["left"] = "0"
    }



    if (props.visible === false) {
        if (props.right) {
            styles["right"] = `-100%`
        } else if (props.left) {
            styles["left"] = "-100%"
        }
    }

    console.log(styles)

    return (
        <div style={styles}>
            {props.content}
        </div>
    )
}

export default Wing
