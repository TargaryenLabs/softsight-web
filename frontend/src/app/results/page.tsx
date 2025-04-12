import ResultsPage from "@/src/pages/ResultsPage";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1500)); // fake delay
  return <ResultsPage />;
}
