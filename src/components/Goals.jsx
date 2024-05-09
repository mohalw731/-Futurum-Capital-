import React from 'react'

function Goals({goalsRef}) {

    const data = [
        {
            title: 'Briljans',
            text: 'Vi är inget ordinarie säljbolag. Vi består inte av en armé - vi består av insatsstyrkor. Vill du utvecklas, och samtidigt njuta av frihet? Då har du hittat hem!'
        },
        {
            title: 'Frihet',
            text: 'Vi värdesätter känslan av frihet, både geografiskt och finansiellt. Kombinationen av remote jobb och obegränsade löner är därför något vi förespårkar!'
        },
        {
            title: 'Samhörighet',
            text: 'Att jobba på Futurum är inte att du är en i mängden - du är en familjemedlem! Vi försöker alltid hitta sätt att öka sammanhållningen oavsett vart i världen vi jobbar!'
        }
    ];
    

    return (
        <div className='goals-container' ref={goalsRef}>
            <div className="row">
                <h2>VÅRA MÅL</h2>

                <div className="card-container goal-cards">
                    {
                        data.map(goal => (
                            <div className="goal-card">
                                <h3>{goal.title}</h3>
                                <p>{goal.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Goals
