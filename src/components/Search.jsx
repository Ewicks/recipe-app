import styled from "styled-components"
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

export default function Search() {

    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        console.log('lololo')
       e.preventDefault();
       navigate('/searched/'+input)
    };

  return (
    <FormStyle >
        <form onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
        </form>
    </FormStyle>
  )
}

const FormStyle = styled.div`
    margin: 0rem 20rem;
    div {
        position: relative;
        width: 100%;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5 rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
