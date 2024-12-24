import React from 'react'

const CategoryCard = ({Icon, name, url}) => {
  return (
    <a href={url} className='block bg-gray-200/60 group h-[10rem] rounded-md flex flex-col items-center justify-center gap-y-1'>
        <Icon className="stroke-1 stroke-gray-700 h-[5rem] w-[5rem]"/>
        <h3 className="group-hover:underline">{name}</h3>
    </a>
  )
}

export default CategoryCard