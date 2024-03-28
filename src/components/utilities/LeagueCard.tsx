import TableLayout from "@/components/utilities/TableLayout";
import { LeagueResponse } from "@/types/response.types";
import Link from "next/link";
import React from "react";

type Props = {
  league: LeagueResponse;
};

const data_format = [
  { heading: "#", key: "#" },
  { heading: "Team", key: "team_name" },
  { heading: "PI", key: "played" },
  { heading: "GD", key: "goals_diff" },
  { heading: "Pts", key: "points" },
];

const LeagueCard = (props: Props) => {
  return (
    <Link className="group cursor-pointer block" href={`/${props.league.slug}`}>
      <TableLayout
        {...{
          table_title: `${props.league.league_name} ${props.league.season}`,
          id_property: "standing_id",
          data: props.league.standing,
          dataFormat: data_format,
        }}
      />
    </Link>
  );
};

export default LeagueCard;
