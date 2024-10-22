import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  let {id} = useParams()
  return (
    <div>
        CategoryPage for {id}
    </div>
  )
}
