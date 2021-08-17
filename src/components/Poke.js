import { useState } from "react"

const Poke = ({url}) => {
    
    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [type, setType] = useState('')

    const pokeItem = async () => {
        const pokeUrl = url

        const data = await fetch(pokeUrl).then(res => res.json())
        setName(data.name)
        setImgUrl(data.sprites.front_default)

        function toSetTypes(){
            return(data.types[1]?setType(data.types[0].type.name + '/' + data.types[1].type.name ):setType(data.types[0].type.name)
             ) }
        toSetTypes()
    }

    pokeItem()

    return (
        <div className="Poke-box">
            <h3>{name}</h3> <h6>{type}</h6><img src={imgUrl} alt={name} />
            
        </div>
    )
}

export default Poke