import "./CardDetailsShimmer.css"

export const CardDetailsShimmer = () => {
    return (
        <main>
            <div className="container">
                <div className="country-card-container">
                    <div className="shimmer-flag">
                    </div>
                    <div className="shimmer-details">

                        {
                            Array.from({ length: 8 }).map(() => {
                                return <p key={crypto.randomUUID()} className="shimmer-detail">
                                </p>
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}