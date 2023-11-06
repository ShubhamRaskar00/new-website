"use client"
import { Crisp } from "crisp-sdk-web";

import { useEffect } from "react"

function CrispChat() {
  useEffect(() => {
    Crisp.configure("39ef298c-9568-42ee-9d7c-189b8b897e32")
    },);

    return (
    null
  )
}

export default CrispChat