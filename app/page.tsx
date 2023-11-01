import ThemeSwitch from "./components/ThemeSwitch";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black">
    <h1 className="text-gray-800 dark:text-white">Hello World!</h1>
    <ThemeSwitch/>
  </main>
  )
}
