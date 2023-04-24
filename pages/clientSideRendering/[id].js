import { useRouter } from "next/router";
import { useEffect, useState } from "react"


const GetSpecificUserData = () => {
    const [userInfo, setUserInfo] = useState();
    const router = useRouter()

    useEffect(() => {
        const id = router.query.id
        async function getUserById(id) {
            const res = await fetch(`https://dummyjson.com/users/${id}`)
            const data = await res.json()
            setUserInfo(data)
        }
        getUserById(id)
    }, [router.query.id])

    return (
        <div>
            <h1>{userInfo?.firstName} {userInfo?.lastName}</h1>
            <h1>{userInfo?.email}</h1>
        </div>
    )
}


export default GetSpecificUserData