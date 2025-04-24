import GuidePage from "@/src/pages/GuidePage";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1500)); // fake delay
  return <GuidePage/>
}
