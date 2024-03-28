export const getLeagues = async () => {
  const res = await fetch(`${process.env.SPORTS_API}/league`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getSingleLeague = async (slug: string) => {
  const res = await fetch(`${process.env.SPORTS_API}/league/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
