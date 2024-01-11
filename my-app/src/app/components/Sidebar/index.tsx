import Logo from "@/app/components/Sidebar/Logo"

export default function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8">
      <Logo />
      <h1 className="text-red-500">Sidebar</h1>
    </aside>
  );
}
