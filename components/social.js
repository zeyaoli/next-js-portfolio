const Social = () => {
    return (
        <>
            <section>
                <div className="social" id="socialSection">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/lizeyao"
                    >
                        Twitter
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/zeyaoli/"
                    >
                        LinkedIn
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/zeyaoli"
                    >
                        GitHub
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.are.na/zeyao-li"
                    >
                        Are.na
                    </a>
                </div>
            </section>
            <style jsx>
                {`
                    .social {
                        margin-top: 2rem;
                        margin-bottom: 2rem;
                        padding: 0 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .social a {
                        margin-left: 1.5rem;
                        margin-right: 1.5rem;
                        border-radius: 20px;
                        border-style: solid;
                        border-width: 1px;
                        padding: 4px 8px;
                    }

                    .social a:hover {
                        background-color: #1a6050;
                        color: #fffef2;
                    }
                `}
            </style>
        </>
    );
};

export default Social;
