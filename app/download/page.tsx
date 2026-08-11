import Link from "next/link"

export default function DownloadPage() {
  return (
    <div className="min-h-[85vh] relative flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* ===== AMBIENT GLOW ===== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ===== HEADER ===== */}
      <div className="text-center mb-10 max-w-lg">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Get the <span className="text-sky-500">Rikba</span> App
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium">
          Choose your app below to get started on iOS or Android in Malta.
        </p>
      </div>

      {/* ===== TWO CARDS CONTAINER ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        
        {/* ================= CARD 1: RIDER APP ================= */}
        <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 backdrop-blur-2xl p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-sky-500/40">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-bold text-sky-500 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              For Passengers
            </span>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Rikba: Ride Malta
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
              Book rides instantly, see transparent fares upfront, and get picked up in minutes.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/mt/app/rikba-ride-malta/id6769058994"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black hover:opacity-90 px-5 py-3.5 rounded-2xl transition-all shadow-md active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,21.97C7.79,22 6.82,20.68 5.98,19.47C4.26,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[8px] uppercase tracking-widest font-extrabold opacity-75">Download on the</span>
                <span className="block text-sm font-extrabold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.rikba.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-sky-400 hover:bg-sky-300 text-black px-5 py-3.5 rounded-2xl transition-all shadow-md active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.97C20.14,13.2 20.14,10.8 18.81,10.03L16.81,8.88L14.81,10.88L16.81,15.12M14.28,12.59L4.43,22.44C4.62,22.5 4.81,22.5 5,22.5C5.54,22.5 6.07,22.21 6.43,22L14.28,17.47M14.28,11.41L6.43,6.88C6.07,6.67 5.54,6.38 5,6.38C4.81,6.38 4.62,6.41 4.43,6.47L14.28,11.41Z"/>
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[8px] uppercase tracking-widest font-extrabold opacity-80">GET IT ON</span>
                <span className="block text-sm font-extrabold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* ================= CARD 2: DRIVER APP ================= */}
        <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 backdrop-blur-2xl p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-sky-500/40">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-bold text-sky-500 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              For Drivers
            </span>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Rikba Driver
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
              Drive with us.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/mt/app/rikba-driver-malta/id6769068318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black hover:opacity-90 px-5 py-3.5 rounded-2xl transition-all shadow-md active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,21.97C7.79,22 6.82,20.68 5.98,19.47C4.26,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[8px] uppercase tracking-widest font-extrabold opacity-75">Download on the</span>
                <span className="block text-sm font-extrabold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.rikba.provider"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-sky-400 hover:bg-sky-300 text-black px-5 py-3.5 rounded-2xl transition-all shadow-md active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.97C20.14,13.2 20.14,10.8 18.81,10.03L16.81,8.88L14.81,10.88L16.81,15.12M14.28,12.59L4.43,22.44C4.62,22.5 4.81,22.5 5,22.5C5.54,22.5 6.07,22.21 6.43,22L14.28,17.47M14.28,11.41L6.43,6.88C6.07,6.67 5.54,6.38 5,6.38C4.81,6.38 4.62,6.41 4.43,6.47L14.28,11.41Z"/>
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[8px] uppercase tracking-widest font-extrabold opacity-80">GET IT ON</span>
                <span className="block text-sm font-extrabold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
