import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

export default function Recipe() {

    let params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('intructions')

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData)
    }

    useEffect(() => {
        fetchDetails()
    }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt=''/>
      </div>
      <Info>
        <DisplayFlex>
          <Button className={activeTab === 'intructions' ? 'active' : ''} onClick={() => setActiveTab('intructions')}>Instructions</Button>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingrediants</Button>
        </DisplayFlex>
       
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        </div>
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  aligh-items: center;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`

const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

const Info = styled.div`
  margin-left: 10rem;
`

const DisplayFlex = styled.div`
  display: flex;
`