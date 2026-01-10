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

    {/* Format average pace as minutes and seconds per mile */}
    const paceMinutes = Math.floor(stats.avgPace / 60);
    const paceSeconds = Math.round(stats.avgPace % 60).toString().padStart(2, "0");
    const movingTimeHours = stats.movingTime / 3600;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-m font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
                Strava Stats
            </h2>

            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <Stat label="Miles" value={stats.miles.toFixed(1)} />
                <Stat label="Runs" value={stats.runs.toString()} />
                <Stat label="Avg Pace" value={`${paceMinutes}'${paceSeconds}"`} />
                <Stat label="Moving Time" value={`${movingTimeHours.toFixed(1)} hrs`} />
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