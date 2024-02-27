import {ThemeSwitcher} from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main>
      <div className="absolute right-10 top-3">
        <ThemeSwitcher switch_color="default" />
      </div>
      <h1>Lending Page</h1>
    </main>
  );
}
