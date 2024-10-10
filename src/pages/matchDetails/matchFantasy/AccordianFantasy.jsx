import React from 'react'

const AccordianFantasy = () => {
    const fantasy = [
        {
            pos: "04",
            name: "MS Dhoni",
            Pts: "301",
            Avg: "62.8",
            Inn: "4"
        },
        {
            pos: "05",
            name: "sachin",
            Pts: "301",
            Avg: "62.8",
            Inn: "4"
        }
    ]
    return (
        <div>
            <table className='score-table-1 new-table'>
                <thead>
                    <tr className='batter-width-1 '>
                        <th>Pos </th>
                        <th>Name</th>
                        <th>Pts</th>
                        <th>Avg</th>
                        <th>Inn</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        fantasy?.map((el, index) => (
                            <tr key={index}>
                                <td>{el?.pos}</td>
                                <td>{el?.name}</td>
                                <td>{el?.Pts}</td>
                                <td>{el?.Avg}</td>
                                <td>{el?.Inn}</td>

                            </tr>
                        ))

                    }

                </tbody>
            </table>

        </div>
    )
}

export default AccordianFantasy
