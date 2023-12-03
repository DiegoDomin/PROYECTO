
const Label=({text_label,htmlFor})=>{

    return(
        <label className="label-form" htmlFor={htmlFor}>{text_label}</label>
    )
}

export default Label