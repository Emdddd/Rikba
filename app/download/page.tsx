import Link from 'next/link'

export default function DownloadPage() {
  return (
    <div className="min-h-[85vh] bg-background flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full border border-sky-500/20 bg-card rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Title & Description */}
        <h1 className="text-3xl font-extrabold mb-3 text-foreground tracking-tight">
          Download <span className="text-sky-500">Rikba</span> App
        </h1>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          Get the app now on iOS and Android to start booking your rides easily in Malta.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col gap-4 justify-center">

          {/* App Store Button (First) */}
          <a
            href="https://apps.apple.com/mt/app/rikba-ride-malta/id6769058994"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3.5 bg-sky-400 hover:bg-sky-300 text-black px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/20 active:scale-[0.98]"
          >
            <svg className="w-6 h-6 fill-black shrink-0" viewBox="0 0 24 24">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,21.97C7.79,22 6.82,20.68 5.98,19.47C4.26,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
            </svg>
            <div className="text-left text-black">
              <span className="block text-[9px] uppercase tracking-wider font-extrabold opacity-80 text-black">Download on the</span>
              <span className="block text-base font-extrabold leading-tight text-black">App Store</span>
            </div>
          </a>
          
          {/* Google Play Button (Second) */}
          <a
            href="https://play.google.com/store/apps/details?id=com.rikba.customer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3.5 bg-sky-400 hover:bg-sky-300 text-black px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/20 active:scale-[0.98]"
          >
            <svg className="w-6 h-6 fill-black shrink-0" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.97C20.14,13.2 20.14,10.8 18.81,10.03L16.81,8.88L14.81,10.88L16.81,15.12M14.28,12.59L4.43,22.44C4.62,22.5 4.81,22.5 5,22.5C5.54,22.5 6.07,22.21 6.43,22L14.28,17.47M14.28,11.41L6.43,6.88C6.07,6.67 5.54,6.38 5,6.38C4.81,6.38 4.62,6.41 4.43,6.47L14.28,11.41Z"/>
            </svg>
            <div className="text-left text-black">
              <span className="block text-[9px] uppercase tracking-wider font-extrabold opacity-80 text-black">GET IT ON</span>
              <span className="block text-base font-extrabold leading-tight text-black">Google Play</span>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
