"use client";

import { useEffect, useState } from "react";

type StravaStats = {
    miles: number;
    runs: number;
    avgPace: number;
    movingTime: number;
};

export default function StatsScreen() {
    const [stats, setStats] = useState<StravaStats | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/strava/stats")
            .then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then((data) => data.lifetime)
            .then(setStats)
            .catch(() => setError(true));
    }, []);

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center text-xs text-red-500">
                <div>Failed to load Strava stats.</div>
            </div>
        )
    }

    if (!stats) {
        return (
            <div className="w-full h-full flex items-center justify-center text-xs">
                <div>Loading...</div>
            </div>
        );
    }

    {/* Format average pace as minutes and seconds per mile */ }
    const paceMinutes = Math.floor(stats.avgPace / 60);
    const paceSeconds = Math.round(stats.avgPace % 60).toString().padStart(2, "0");
    const movingTimeHours = stats.movingTime / 3600;

    return (
        <div className="w-full h-full flex items-center justify-center px-4">
            <div className="w-full rounded-3xl shadow-sm p-5 text-center">
                <h2 className="text-[12px] font-bold tracking-widest text-neutral-500 dark:text-neutral-300">
                    <span className="text-orange-500 dark:text-orange-500">STRAVA</span> STATS
                </h2>

                <div className="mt-0.5">
                    <div className="text-3xl font-extrabold text-neutral-900 dark:text-white leading-none">
                        {stats.miles.toFixed(1)}
                    </div>
                    <div className="mt-1 text-[11px] tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                        Total Miles Run
                    </div>
                </div>
                <div className="my-2 h-px bg-neutral-200 dark:bg-neutral-700" />

                <div className="grid grid-cols-3 gap-2">
                    <Stat label="Runs" value={stats.runs.toString()} />
                    <Stat label="Avg Pace" value={`${paceMinutes}'${paceSeconds}"`} />
                    <Stat label="Total Hours" value={`${movingTimeHours.toFixed(1)}`} />
                </div>
            </div>
        </div>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-m font-semibold text-neutral-900 dark:text-white">
                {value}
            </span>
            <span className="text-[11px] tracking-widest text-neutral-500 dark:text-neutral-300">
                {label}
            </span>
        </div>
    );
}