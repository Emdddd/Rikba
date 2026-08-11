import Link from 'next/link'

export default function DownloadPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-5 text-center">
      <div className="max-w-sm w-full border border-sky-500/20 bg-card rounded-2xl p-6 shadow-xl relative overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* HEADER */}
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight mb-1">
          Get <span className="text-sky-500">Rikba</span>
        </h1>
        <p className="text-xs text-muted-foreground mb-6">
          Download the app for iOS & Android
        </p>

        {/* SECTION 1: RIDER */}
        <div className="mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-500 block mb-2 text-left px-1">
            Rider App
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://apps.apple.com/mt/app/rikba-ride-malta/id6769058994"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-black px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.rikba.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-black px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              Google Play
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-4 border-t border-sky-500/10" />

        {/* SECTION 2: DRIVER */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-500 block mb-2 text-left px-1">
            Driver App
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://apps.apple.com/mt/app/rikba-driver-malta/id6769068318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-black px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.rikba.provider"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-black px-3 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              Google Play
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
