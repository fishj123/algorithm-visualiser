import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [arr, setArr] = useState([])

  const generateArray = () => {
    const count = 50
    const a = []
    for (var i = 0; i < count; i++) {
      a.push(i)
    }

    shuffleArray(a)
  }

  const shuffleArray = array => {
    let counter = array.length

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter)

      // Decrease counter by 1
      counter--

      // And swap the last element with it
      let temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }

    setArr(array)
  }

  const bubbleSort = async () => {

    let array = [...arr]
    async function wait() {
      return new Promise(function (resolve) {
        setTimeout(resolve, 0);
      });
    }
  
    for(var i = 0; i < array.length; i++) {

      for(var j = 0; j < array.length; j++) {
        
        if(array[i] > array[j]) {
          await wait();
          let temp = array[i];
          array[i] = array[j]
          array[j] = temp;
          setArr(array);
        }
      }
    }

    // setTimeout(function() {
    //   setArr(array)
    // }, 1)
  
  }

  const instantBubbleSort = async () => {

    let array = [...arr]

    for (var i = 0; i < array.length; i++) {

      for (var j = 0; j < array.length; j++) {

        if (array[i] > array[j]) {
          //await wait();
          let temp = array[i];
          array[i] = array[j]
          array[j] = temp;
          setArr(array);
        }
      }
    }

    // setTimeout(function() {
    //   setArr(array)
    // }, 1)

  }

  useEffect(() => {
    generateArray()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Bubble Sort</h1>
      <ul>
        {arr.map(item => (
          <li
            key={item}
            style={{ width: item + "%" }}
            className="bubble-item"
            data-id={item}
          />
        ))}
      </ul>
      <button onClick={() => generateArray()}>Generate New Array</button>
      <button onClick={() => bubbleSort()}>Sort Array (Visualize)</button>
      <button onClick={() => instantBubbleSort()}>Sort Array (Instantly)</button>
     
    </Layout>
  )
}

export default IndexPage
