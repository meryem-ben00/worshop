



const Card = (props) => {
    return (
        <div className={props.colSpanStyle ? "p-[24px] bg-white rounded-lg " 
            + props.colSpanStyle + " " + props.extraStyle: "p-8 bg-white rounded-lg " + props.extraStyle}>
          {props.children}
        </div>
    )
}

export default Card;