import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react";
import Navitem from "./Navitem";

export default function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <Navitem tittle="Home" icons={Home} />
      <Navitem tittle="Dashboard" icons={BarChart} />
      <Navitem tittle="Project" icons={SquareStack} />
      <Navitem tittle="Tasks" icons={CheckSquare} />
      <Navitem tittle="Reporting" icons={Flag} />
      <Navitem tittle="Users" icons={Users} />
    </nav>
  );
}
