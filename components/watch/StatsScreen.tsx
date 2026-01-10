
export default function StatsScreen() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-m font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
                Strava Stats
            </h2>

            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <Stat label="Miles" value="543" />
                <Stat label="Runs" value="120" />
                <Stat label="Avg Pace" value="7'45''" />
                <Stat label="Longest" value="15.2 mi" />
            </div>
        </div>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-neutral-900 dark:text-white">
                {value}
                </span>
                <span className="text-[10px] tracking-wide text-neutral-500 dark:text-neutral-400">
                    {label}
            </span>
        </div>
    );
}