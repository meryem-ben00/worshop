

const Title = (props) => {
    return <h2 className={props.givingExtraSpace ? " text-xl font-medium capitalize " + props.givingExtraSpace
    : "font-medium capitalize text-xl"}>{props.children}</h2>
}

export default Title;