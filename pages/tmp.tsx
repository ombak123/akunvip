import { useRouter } from "next/router"
import { useEffect } from "react"

export default function test() {
    const router = useRouter()
    useEffect(()=>{
        router.reload()
    })
    return (<></>)
}