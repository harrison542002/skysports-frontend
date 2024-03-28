export type League = {
  league_id: number;
  league_name: string;
  league_logo: string;
  season: string;
  slug: string;
};

export type Standing = {
  standing_id: number;
  team_name: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  goals_diff: number;
  points: number;
  detail_url: string;
  league_id: number;
};
