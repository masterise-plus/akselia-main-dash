import { Navbar } from "./components/navbar";
import { ReleaseNotes } from "./components/release-notes";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ReleaseNotes />
      </main>
    </div>
  );
}

export default App;
