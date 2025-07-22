import HomePage from "../pages/HomePage";
import "./globals.css";


export default async function Home() {
  await new Promise((res) => setTimeout(res, 1500)); // fake delay
  return <HomePage />;
}
