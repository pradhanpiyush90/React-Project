import "./CountryShimmer.css"

export const CountryShimmer = () => {

    return (
        <>
            {
                Array.from({ length: 10 }).map(() => {
                    return <div key={crypto.randomUUID()} className="country-card  shimmer-card"></div>

                })
            }
        </>
    )
}