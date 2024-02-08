import puppeteer from "puppeteer";
import { Component } from "./Component";

export default async function Home() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.uol.com.br/", {
    waitUntil: "domcontentloaded",
  });

  const domNode = await page.content();

  await browser.close();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Component prop={domNode} />
    </main>
  );
}
