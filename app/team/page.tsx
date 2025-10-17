'use client'

import React from 'react'
import TargetCursor from '@/components/TargetCursor'
import DomeGallery from '@/components/DomeGallery'

type Props = {}

const Team = (props: Props) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
     <TargetCursor />
      <DomeGallery />
    </div>
  )
}

export default Team