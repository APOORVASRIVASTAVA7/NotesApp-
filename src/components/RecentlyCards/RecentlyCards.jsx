import React from 'react'

const RecentlyCards = (props) => {
  return (
    <div>
      RECENTLY UPDATED
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>

        {props.cards.map((card) => (

          <div key={card.id} id='cards' className='bg-white rounded-2xl shadow-md p-5 min-h-40'>

            <p className='text-xl font-serif'>{card.heading}</p>

            <p className='mt-4 text-gray-900'>
              {card.content}
            </p>
            <p className='mt-8 text-sm text-gray-800'>
              {card.date}
            </p>
          </div>
        ))}


      </div>
    </div>
  )
}

export default RecentlyCards
