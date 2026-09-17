import { useEffect } from 'react'
import CustomCursor from './components/CustomCursor'
import MusicToggle from './components/MusicToggle'
import { birthdayData } from './data/content'
import BirthdayWish from './sections/BirthdayWish'
import EndingSection from './sections/EndingSection'
import GrowingWishes from './sections/GrowingWishes'
import HeroSection from './sections/HeroSection'
import LetterSection from './sections/LetterSection'
import MemoryWords from './sections/MemoryWords'
import PhotoGallery from './sections/PhotoGallery'
import SurpriseSection from './sections/SurpriseSection'
import TimelineSection from './sections/TimelineSection'

export default function App() {
  useEffect(() => {
    document.title = `Happy Birthday, ${birthdayData.name}`
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        'content',
        `A little corner of the internet made for ${birthdayData.name}.`,
      )
    }
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <MusicToggle />
      <main>
        <HeroSection data={birthdayData} />
        <LetterSection data={birthdayData} />
        <MemoryWords data={birthdayData} />
        <PhotoGallery data={birthdayData} />
        <TimelineSection data={birthdayData} />
        <GrowingWishes data={birthdayData} />
        <BirthdayWish data={birthdayData} />
        <SurpriseSection data={birthdayData} />
        <EndingSection data={birthdayData} />
      </main>
    </>
  )
}
