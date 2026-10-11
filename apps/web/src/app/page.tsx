import { ButtonRepo } from "@repo/ui/components/button-repo";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ButtonRepo />
      <h1>Hello from web</h1>
    </div>
  );
}
