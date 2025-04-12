import ForecastPage from "@/src/pages/ForecastPage";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1500)); // fake delay
  return <ForecastPage/>
}
