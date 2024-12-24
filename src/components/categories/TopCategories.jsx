import React from 'react'
import CategoryCard from './CategoryCard'
import { topCategories } from '@/lib/constants'

const TopCategories = ({title}) => {
  return (
    <div className="py-12 pb-8">
        {title && (
        <h1 className="text-base sm:text-lg font-extrabold tracking-tight uppercase">{title}</h1>
      )}
      <div className="grid grid-cols-6 py-6 gap-3">
        {topCategories && topCategories.map(category => (
          <CategoryCard
            key={category.name} 
            {...category}
            url="hh"
        />
        ))}
      </div>
    </div>
  )
}

export default TopCategories