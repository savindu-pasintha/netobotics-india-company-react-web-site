import React from 'react'

export default function AboutItem(props) {
    const styles = { div: { color: "white" }, h: {}, p: {width:"60%"} }
    return (
        <div style={styles.div}>
            <p>{props.key}</p>
            <br />
            <h2>{props.title}</h2>
            <br />
            <p style={styles.p}>{props.discription}</p>
        </div>
    )
}
