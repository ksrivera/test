'use client'

import React from 'react'
import useSWR from 'swr'


const DashboardPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR('http://localhost:3000/api/eula', fetcher)

  console.log(data)

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage