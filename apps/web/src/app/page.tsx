import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant={"destructive"}>RRRRRRRRRRR</Button>
      <Input />
      <h1 className="text-4xl">Hello from web</h1>
    </div>
  );
}
