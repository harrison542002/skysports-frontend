import LeagueCard from "@/components/utilities/LeagueCard";
import { LeagueResponse } from "@/types/response.types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

type Props = { result: { data: LeagueResponse[]; count: number } };

const FootballTable = ({ result }: Props) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {result.count <= 0
          ? "Currently, there is no league!"
          : result.data.map((league) => (
              <>
                <LeagueCard {...{ league }} key={league.slug} />
              </>
            ))}
      </div>
    </div>
  );
};

export default FootballTable;
