import React from 'react'
import BannerCarrouselPRO from './Sections/BannerCarrouselPRO'
import BenefiBanner from './Sections/benefiBanner'
import Benefits from './Sections/Benefits'

export default function ProPage() {
    return (
        <div>
            <BannerCarrouselPRO/>
            <Benefits/>
            <BenefiBanner/>
        </div>
    )
}
