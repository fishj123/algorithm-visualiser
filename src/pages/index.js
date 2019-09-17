import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  const [arr, setArr] = useState([])

  const generateArray = () => {
    const count = 100;
    const a = []
    for(var i=0; i < count; i++) {
      a.push(i)
    }

    shuffleArray(a);

  }

  const shuffleArray = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    setArr(array);
  }

  const bubbleSort = () => {
    let array = [...arr];

    for(let i = 0; i < array.length; i++) {
      for(let j = 1; j <= array.length; j++) {
        if(array[i] > array[j]) {
          let temp = array[i];
          array[i] = array[j]
          array[j] = temp;
          setArr(array);
        }
      }

    
    }

  }


 const doTheArrayWork = () => {
    generateArray();
  }

  useEffect(() => {
    doTheArrayWork()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Bubble Sort</h1>
      <ul>
        {arr.map(item => 
          <li key={item} style={{width: item + "%"}} className="bubble-item" data-id={item} />
          )}
      </ul>
      <button onClick={() => doTheArrayWork()}>
        Generate New Array
      </button>
      <button onClick={() => bubbleSort()}>
        Sort Array
      </button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
