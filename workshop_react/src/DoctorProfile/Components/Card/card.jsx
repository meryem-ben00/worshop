



const Card = (props) => {
    return (
        <div className={props.colSpanStyle ? "p-8 bg-white rounded-lg " 
            + props.colSpanStyle: "p-8 bg-white rounded-lg"}>
          {props.children}
        </div>
    )
}

export default Card;