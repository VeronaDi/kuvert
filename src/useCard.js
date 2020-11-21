import { useState, useEffect } from "react"

const createCart = () => {
  const listeners = {}
  const initialData = JSON.parse(window.localStorage.getItem("card")) || {}
  let data = initialData

  const setCart = newData => {
    data = newData
    window.localStorage.setItem("card", JSON.stringify(data))
    Object.values(listeners).forEach(cb => cb(data))
  }

  const setItemAmount = (code, amount) => {
    const newAmount = data[code] ? amount + data[code] : amount
    const newData = {
      ...data,
      [code]: newAmount,
    }

    setCart(newData)
  }

  const subscribe = callback => {
    const id = Math.random()
    listeners[id] = callback

    return () => {
      delete listeners[id]
    }
  }

  return { getData: () => data, setItemAmount, setCart, subscribe }
}

const cart = createCart()

export const useCart = () => {
  const [data, setData] = useState(cart.getData())

  const setCart = cart.setCart

  const setItemAmount = cart.setItemAmount

  useEffect(() => {
    return cart.subscribe(newData => {
      setData(newData)
    })
  }, [])

  return [data, setItemAmount, setCart]
}
