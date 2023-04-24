import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args: any) => fetch(...args).then((res: any) => res.json())
const SideBarData = (props: any) => {
    const { data, error } = useSWR(`https://dummyjson.com/users/${props?.userNumber}`, fetcher)
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    return (
        <div>
            {data &&
                <>
                    <Image
                        src={`${data?.image}`}
                        height={144}
                        width={144}
                        alt="Your Name"
                        style={{ background: 'grey' }}
                    />
                    <h1 style={{ marginTop: 20 }}>{`${data?.firstName}`}</h1>
                    <h1>{data?.lastName}</h1>
                    <h1>{data?.email}</h1>
                </>
            }
        </div>
    )
}

export default SideBarData;