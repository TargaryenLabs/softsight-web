import HomePage from "../pages/HomePage";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1500)); // fake delay
  return <HomePage />;
}
