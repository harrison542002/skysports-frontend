import PageContainer from "@/components/container/PageContainer";
import Pagination from "@/components/utilities/Pagination";
import TableLayout from "@/components/utilities/TableLayout";
import { getSingleLeague } from "@/services/league.services";
import { getStandingsByLeagueId } from "@/services/standing.services";
import { League, Standing } from "@/types/data.types";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const headersList = headers();
  const league: League = await getSingleLeague(params.slug);
  return {
    title: league.league_name,
    description: "This is football table for " + league.league_name,
    keywords: ["Footballs", "skysports", league.league_name],
    referrer: "origin-when-cross-origin",
    openGraph: {
      title: league.league_name,
      description: "This is football table for " + league.league_name,
      url: headersList.get("referer") || headersList.get("referrer"),
      siteName: "Skysports",
      locale: "en_US",
      type: "website",
    },
  };
}

const LeagueDetail = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    page?: string;
  };
}) => {
  const limit = 20,
    page = Number(searchParams?.page) || 1;
  const league: League = await getSingleLeague(params.slug);
  const standing: { data: Standing[]; count: number; page: number } =
    await getStandingsByLeagueId(league.league_id, limit, page);

  const standing_table_format = [
    {
      heading: "#",
      key: "#",
    },
    { heading: "Team", key: "team_name" },
    {
      heading: "Pl",
      key: "played",
    },
    {
      heading: "W",
      key: "won",
    },
    {
      heading: "D",
      key: "draw",
    },
    {
      heading: "L",
      key: "lost",
    },
    {
      heading: "F",
      key: "goals_for",
    },
    {
      heading: "A",
      key: "goals_against",
    },
    {
      heading: "GD",
      key: "goals_diff",
    },
    {
      heading: "Pts",
      key: "points",
    },
  ];

  return (
    <div>
      <PageContainer
        title={league.league_name}
        subtitle={league.season}
        backlink={{ link: "/", desc: "Football" }}
      >
        <TableLayout
          {...{
            table_title: `${league.season} Season`,
            dataFormat: standing_table_format,
            id_property: "standing_id",
            data: standing.data,
          }}
        />
        <Pagination totalPage={Math.ceil(standing.count / limit)} />
      </PageContainer>
    </div>
  );
};

export default LeagueDetail;
