'use client'

import React from 'react'
import TargetCursor from '@/components/TargetCursor'
import DomeGallery from '@/components/DomeGallery'

type Props = {}

const Team = (props: Props) => {
  return (
    <div className="w-full h-screen overflow-hidden bg-transparent">
      <div className="hidden md:block">
        <TargetCursor />
      </div>
      <DomeGallery />
    </div>
  )
}

export default Team