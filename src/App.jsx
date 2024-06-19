import React, { useState } from 'react'
import { InputBox } from './components/index'

import useCurrency from "./hooks/useCurrency"

export default function App() {
  const [from,setFrom] = useState(0)
  const [to,setTo] = useState(0)


  const currencyOptions = useCurrency("usd")


  const convert = ()=>{
    setTo(from*70)
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&dpr=1)",
      }}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="border-2 border-[#cacaca] border-solid p-5 bg-[rgba(158,158,158,0.86)] rounded-md flex flex-col items-center">
        <InputBox label="from" amountDisabled={false} currency={"usd"} amount={from} onAmountChange={setFrom} />
        <button className="bg-blue-500 p-2 rounded-md text-white text-xl my-2">
          swap
        </button>
        <InputBox label="to" amountDisabled currency={"inr"} amount={to} />
        <button onClick={convert} className="bg-blue-500 p-2 w-full rounded-md text-white text-xl mt-4">
          Convert
        </button>
      </div>
    </div>
  );
}
