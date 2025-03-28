function CategoryBtn({text, color, active, onClick}){
    return (
        <button onClick={onClick} className={`btn btn-sm btn-outline-${color} me-1 ${active}`}>{text}</button>
    )
}

export default CategoryBtn