import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <h1 className="w-full text-[15vw] font-extrabold text-black font-sans break-words leading-tight tracking-tight text-center">
        QUIERES BOLSA
      </h1>
    </div>
  );
}
