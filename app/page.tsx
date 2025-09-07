import { Inclusive_Sans } from "next/font/google"

const inclusiveSans = Inclusive_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inclusive-sans",
})

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-background flex flex-col items-center justify-center p-8 ${inclusiveSans.variable}`}
    >
      <div className="text-center space-y-8">
        {/* Logo/Image placeholder */}
        <div className="flex justify-center mb-8">
          <img src="protofemmes-logo.png" alt="PROTOfemmes Logo" className="w-192 h-60 object-contain" />
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-normal text-foreground font-[family-name:var(--font-inclusive-sans)]">
          Podcast coming soon
        </h1>

        {/* Contact email */}
        <p className="text-2xl text-foreground font-[family-name:var(--font-inclusive-sans)]">helen@protofemmes.com</p>
      </div>
    </div>
  )
}
