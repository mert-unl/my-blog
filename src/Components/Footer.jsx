import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Footer(){

    const {user} = useContext(AppContext)

    return(
            <>
                <div className="mt-10">
                <div className="border-t-1 border-gray-500"></div>
                <p className="text-center py-12">Bu blog <span className="underline">{user.name}</span> tarafından yapılmıştır. Tüm hakları saklıdır.</p>
                </div>
            </>
        )
}