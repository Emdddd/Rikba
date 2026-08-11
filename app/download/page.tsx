import Link from 'next/link'

export default function DownloadPage() {
  return (
    <div className="min-h-[85vh] relative flex flex-col items-center justify-center px-6 py-16 text-center overflow-hidden">
      {/* ===== ULTRA SOFT AMBIENT GLOW ===== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/15 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" />

      {/* ===== HERO CONTENT CONTAINER (BORDERLESS & MODERN) ===== */}
      <div className="relative z-10 max-w-xl w-full flex flex-col items-center">
        
        {/* FLOATING LOGO EMBLEM */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
          <div className="relative w-20 h-20 rounded-3xl bg-black/40 backdrop-blur-2xl flex items-center justify-center p-3.5 shadow-2xl">
            <img
              src="/Favecoiiin.png"
              alt="Rikba"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* ULTRA-BOLD TYPOGRAPHY */}
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-lg">
          Get Rikba on <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500">
            your phone.
          </span>
        </h1>

        <p className="mt-5 text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-md leading-relaxed font-medium">
          Experience Malta’s most transparent ride-hailing app. Book rides, track drivers, and enjoy fair pricing.
        </p>

        {/* MODERN PILL BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/mt/app/rikba-ride-malta/id6769058994"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 flex items-center justify-center gap-3 bg-sky-400 hover:bg-sky-300 text-black px-6 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:scale-[1.03] active:scale-[0.98] min-h-[56px]"
          >
            <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,21.97C7.79,22 6.82,20.68 5.98,19.47C4.26,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[9px] uppercase tracking-widest font-black opacity-75">Download for</span>
              <span className="block text-base font-extrabold">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.rikba.customer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 flex items-center justify-center gap-3 bg-white/10 dark:bg-white/5 hover:bg-white/15 backdrop-blur-2xl text-slate-900 dark:text-white px-6 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:scale-[1.03] active:scale-[0.98] min-h-[56px]"
          >
            <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.97C20.14,13.2 20.14,10.8 18.81,10.03L16.81,8.88L14.81,10.88L16.81,15.12M14.28,12.59L4.43,22.44C4.62,22.5 4.81,22.5 5,22.5C5.54,22.5 6.07,22.21 6.43,22L14.28,17.47M14.28,11.41L6.43,6.88C6.07,6.67 5.54,6.38 5,6.38C4.81,6.38 4.62,6.41 4.43,6.47L14.28,11.41Z"/>
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[9px] uppercase tracking-widest font-black text-slate-500 dark:text-neutral-400">GET IT ON</span>
              <span className="block text-base font-extrabold">Google Play</span>
            </div>
          </a>

        </div>

      </div>
    </div>
  )
}
