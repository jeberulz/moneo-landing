import Background from "@/components/Background";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <>
      <Background />
      <div className="h-screen overflow-hidden">
        <Dashboard />
      </div>
    </>
  );
}

