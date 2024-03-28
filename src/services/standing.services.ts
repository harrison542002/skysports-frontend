export const getStandingsByLeagueId = async (
  league_id: number,
  limit: number,
  page: number
) => {
  const res = await fetch(
    `${process.env.SPORTS_API}/league/${league_id}/standings?limit=${limit}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
