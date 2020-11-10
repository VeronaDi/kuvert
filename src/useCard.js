import { useState } from "react"

export const useCart = () => {
  const initialData = JSON.parse(window.localStorage.getItem("card")) || {}

  const [data, setData] = useState(initialData)

  const setCart = newData => {
    setData(newData)

    window.localStorage.setItem("card", JSON.stringify(newData))
  }

  const setItemAmout = (code, amount) => {
    const newAmount = data[code] ? amount + data[code] : amount
    const newData = {
      ...data,
      [code]: newAmount,
    }

    setCart(newData)
  }

  return [data, setItemAmout, setCart]
}
