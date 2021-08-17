import {useState} from "react"

const SearcBox =({onSearch, onChange}) =>{
    const [value,setValue] = useState('')

    return (
        <div>
            <input value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
            <button onClick={()=>{
                onSearch(value)
            }}>Search</button>
            <select onChange={(e)=>{
                onChange(e.target.value)
            }}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>
        </div>

    )
}

export default SearcBox