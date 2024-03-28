import PageContainer from "@/components/container/PageContainer";
import FootballTable from "@/components/page/FootballTable";
import { getLeagues } from "@/services/league.services";
import { headers } from "next/headers";

export async function generateMetadata() {
  const headersList = headers();

  return {
    title: "Footballs | Skysports",
    description: "This is a list of football clubs from sky sports",
    keywords: ["Footballs", "skysports"],
    referrer: "origin-when-cross-origin",
    openGraph: {
      title: "Footballs | Skysports",
      description: "This is a list of football clubs from sky sports",
      url: headersList.get("referer") || headersList.get("referrer"),
      siteName: "Skysports",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function Home() {
  const result = await getLeagues();
  return (
    <>
      <PageContainer title="Football Tables" subtitle="Competitions">
        <FootballTable {...{ result }} />
      </PageContainer>
    </>
  );
}
