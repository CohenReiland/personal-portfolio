
export default function GraduationScreen() {
    const graduationDate = new Date("2027-05-15");
    const today = new Date();

    const timeDiff = graduationDate.getTime() - today.getTime();
    const daysLeft = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
            <img src="/ndsu-logo.png" alt="NDSU Logo" className="w-16 h-15 mb-0 opacity-90 dark:opacity-80" />
            <div className="mb-2">
                <div className="text-[12px] tracking-widest uppercase text-neutral-500 dark:text-neutral-100">
                    Computer Science
                </div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                    NDSU · Class of 2027
                </div>
            </div>

            <div className="mb-2">
                <div className="text-[52px] font-semibold leading-none text-neutral-900 dark:text-white">
                    {daysLeft}
                </div>
                <div className="mt-1 text-[11px] tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                    Days to Go!
                </div>
            </div>
            
        </div>
    );
}