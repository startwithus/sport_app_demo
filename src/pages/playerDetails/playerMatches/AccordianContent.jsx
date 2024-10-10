import React from 'react'
const AccordianContent = ({ match }) => {
    return (
        <>
            {
                match?.match?.length > 0 ? <div className=""  style={{ overflowX:"auto",whiteSpace:"nowrap" }}>
                    <p style={{ color: "white",margin:".5rem",textTransform:"capitalize" }}>  {match.formats[0]}</p>
                    <table className='score-table '>
                        <thead>
                            <tr>

                                <th>Score</th>
                                <th>Date</th>
                                <th>Match</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                match?.match?.map((el, i) => (
                                    <tr key={i}>

                                        <td>{el?.score?.score['1'] ? el?.score?.score["1"]?.batting?.score?.runs : "N/A"}({el?.score?.score['1'] ? el?.score?.score["1"]?.batting?.score?.balls : "N/A"})</td>
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

export default AccordianContent