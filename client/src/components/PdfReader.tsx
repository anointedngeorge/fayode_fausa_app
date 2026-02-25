import React from 'react'
import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react'
import { number } from 'zod'





export const PdfReader = ({src, classname}:{src:string, classname?:string }) => {
  return (
    <RPConfig>
      <RPProvider src={src} >
        <RPDefaultLayout className={classname}>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
  )
}
