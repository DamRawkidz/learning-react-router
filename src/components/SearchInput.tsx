
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput(){
    const [term, setTerm] = useState('');
    const navigate = useNavigate()
    const handleSumit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        navigate(`/search?term=${term}`)

    }

    return (
        <form onSubmit={handleSumit}>
            <input value={term} onChange={e => setTerm(e.target.value)} type="text" />
        </form>
    )

    // return (
    //     <Form action="/search">
    //             <input name="term" />
    //     </Form>
    // )
}