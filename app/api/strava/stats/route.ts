
async function getAccessToken() {
    const response = await fetch("https://www.strava.com/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: process.env.STRAVA_CLIENT_ID,
            client_secret: process.env.STRAVA_CLIENT_SECRET,
            refresh_token: process.env.STRAVA_REFRESH_TOKEN,
            grant_type: "refresh_token",
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to refresh Strava token");
    }

    return response.json();
}

async function getAthelete(accessToken: string) {
    const response = await fetch("https://www.strava.com/api/v3/athlete", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch athlete");
    }

    return response.json();
}

async function getAtheleteStats(accessToken: string, athleteId: number) {
    const response = await fetch(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch athlete stats");
    }

    return response.json();
}

export async function GET() {
    try {
        const tokenData = await getAccessToken();
        const athlete = await getAthelete(tokenData.access_token);
        const stats = await getAtheleteStats(tokenData.access_token, athlete.id);
        const runningStats = stats.all_run_totals;
        const miles = (runningStats.distance / 1609.34); // convert meters to miles
        const avgPaceSeconds = runningStats.moving_time / miles;

        return Response.json({
            runs: runningStats.count,
            miles: Number(miles.toFixed(2)),
            avgPace: Math.round(avgPaceSeconds),
            longestRun: Number((stats.biggest_distance / 1609.34).toFixed(2)), // convert meters to miles
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Failed to fetch Strava stats" }, { status: 500 });
    }
}