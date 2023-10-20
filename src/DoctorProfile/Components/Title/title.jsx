

const Title = (props) => {
    return <h2 className={props.givingExtraSpace ? (props.titleSizing ? props.titleSizing + " font-medium capitalize " :"font-medium capitalize text-xl ") + props.givingExtraSpace
    : props.titleSizing ? "font-medium capitalize " + props.titleSizing :"font-medium capitalize text-xl"}>{props.children}</h2>
}

export default Title;