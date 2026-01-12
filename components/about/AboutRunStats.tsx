"use client";

import { useEffect, useState } from "react";

type ytdRunStats = {
    count: number;
    distance: number;
    elapsedTime: number;
};

export default function AboutRunStats() {
    const [stats, setStats] = useState<ytdRunStats | null>(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        fetch ("/api/strava/stats")
            .then((res) => res.json())
            .then((data) => {
                setStats(data.ytd);
            })
            .catch(() => {});
    }, []);

    if (!stats) {
        return null;
    }

    const miles = (stats.distance / 1609.34).toFixed(2);
    const hours = (stats.elapsedTime / 3600).toFixed(1);

    return (
        <div className="mt-8 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="text-[13px] tracking-widest text-gray-500 dark:text-gray-300 mb-3">
                {currentYear} Running Stats
            </span>
            <div className="flex gap-10">
                <Stat label="Runs" value={stats.count.toString()} />
                <Stat label="Distance" value={`${miles} mi`} />
                <Stat label="Time" value={`${hours} hrs`} />
            </div>
        </div>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                {value}
            </span>
            <span className="text-[10px] uppercase tracking-wide">
                {label}
            </span>
        </div>
    );
}