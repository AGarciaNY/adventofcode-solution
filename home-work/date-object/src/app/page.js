"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { LineChart } from '@mui/x-charts/LineChart';
import testFunctionSpeed from "@/script/test";
import { useState } from "react";
import Vector from "../script/functions";

export default function Home() {
  const [data, setData] = useState([]);

  const myArray = new Vector()

  const addData = () =>{
    for(let i = 0; i < 10000; i++){
      myArray.pushBack(i)
    }
  }
  
  const runTest = () => {
    const { duration } = testFunctionSpeed(addData, 1e7);
    setData((prev) => [
      ...prev,
      { run: prev.length + 1, duration }
    ]);
  };

  return (
    <div>
      <div style={{ width: "600px", height: "400px" }}>
        <button onClick={runTest} style={{ marginBottom: "1rem" }}>
          Run Test
        </button>
        <LineChart
          xAxis={[{ dataKey: "run", label: "Run Number" }]}
          series={[
            { dataKey: "duration", label: "Execution Time (ms)" }
          ]}
          dataset={data}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
