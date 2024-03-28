import { League, Standing } from "@/types/data.types";

export type LeagueResponse = League & { standing: Standing[] };
