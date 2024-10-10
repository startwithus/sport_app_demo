import React from 'react'

const BowlingAccordianContent = ({ match }) => {
    return (
        <>
            {
                match?.match?.length > 0 ? <div className="">
                    <p style={{ color: "white",textTransform:"capitalize",margin:"0.5rem" }}>  {match?.formats[0]}</p>
                    <table className='score-table'>
                        <thead>
                            <tr>

                                <th>score</th>
                                <th>Date</th>
                                <th>Match</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                match?.match?.map((el, i) => (
                                    <tr key={i}>
                                        <td>{el?.score?.score['1'] ? el?.score?.score["1"]?.bowling?.score?.wickets : "N/A"}-{el?.score?.score['1'] ? el?.score?.score["1"]?.bowling?.score?.runs : "N/A"}</td>
                                        <td>  {(new Date(el?.start_at * 1000).toLocaleString())}</td>
                                        <td>{el.name}</td>

                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div> : null
            }


        </>
    )
}

export default BowlingAccordianContent