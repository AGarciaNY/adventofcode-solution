"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { LineChart } from '@mui/x-charts/LineChart';
import testFunctionSpeed from "../script/test/index.js";
import { useState } from "react";

import Vector from "../script/functions/index.js";
import LineGraph from "@/component/line.js";

export default function Home() {
  let [lineData, setLineData] = useState([])
  let [timeData, setTimeData] = useState([])

  let [testSize, setTestSize] = useState(0);
  let [dataSize, setDataSize] = useState(0);
  let [testSizeList, setTestSizeList] = useState([]);
  let [dataSizeList, setDataSizeList] = useState([]);


  let newVectore = new Vector(2)

  const addData = (value) => {
    newVectore.pushBack(value)
  }

  const runTest = (testsize, dataSize) => {
    let time = testFunctionSpeed(addData, testsize, dataSize)
    console.log(time, "here")
    return time
  }


  let options = {};

  let data = {
    labels: timeData,
    datasets: lineData
  };

  const addLineGraphData = () => {
    let timeLaps = [];
    for (let i = 0; i < dataSizeList.length; i++) {
      timeLaps.push([runTest(testSizeList[i],dataSizeList[i])]);
    };

    console.log(timeLaps,"here")
    timeLaps.sort((a, b) => a[0] - b[0])

    let listOfTime = timeLaps.map((array) => array[0])
    let listOfDataLength = timeLaps.map((array) => array[1])


    console.log(timeLaps, listOfTime, listOfDataLength)
    let dataToAdd = {
      label: "sort by time",
      data: listOfDataLength,
      borderColor: "red"
    }

    let newLineData = [...lineData]
    newLineData.push(dataToAdd)

    setLineData(newLineData)
    setTimeData(listOfTime);
  };

  const addToList = ()=>{
    let tempTestSize = [...testSizeList]
    
    let tempDataSize = [...dataSizeList]

    tempTestSize.push(testSize)
    tempDataSize.push(dataSize)

    setTestSizeList(tempTestSize)
    setDataSizeList(tempDataSize)
  }
  return (
    <div>

      <h1>list of data size = {dataSizeList}</h1>
      <h1>list of test size = {testSizeList}</h1>
      <label>
        test size
        <input
          value={testSize}
          type="number"
          onChange={e => setTestSize(e.target.value)}
        />
      </label>

      <label>
        data size
        <input
          value={dataSize}
          type="number"
          onChange={e => setDataSize(e.target.value)}
        />
      </label>
      <button onClick={()=>{addToList()}}>Add to list</button>
      <div style={{ width: "600px", height: "400px" }}>
        <button onClick={() => { addLineGraphData() }} style={{ marginBottom: "1rem" }}>
          Run Test
        </button>
        <LineGraph options={options} data={data} />
      </div>
    </div>
  );
}
