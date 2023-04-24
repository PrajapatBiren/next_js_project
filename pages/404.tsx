import { useRouter } from "next/router";

const Errorpage = () => {
    const router = useRouter();

    const handleInput = () => {
        router.push("/");
    };


    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>
                        The page you are looking for might have been removed had its name
                        changed or is temporarily unavailable.
                    </p>

                    <a onClick={handleInput}>Back To Homepage</a>
                </div>
            </div>
        </>
    );
};

export default Errorpage;