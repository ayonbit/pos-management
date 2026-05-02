import AvailableAmount from "@/components/AvailableAmount";
import DashboardCard from "@/components/DashboardCard";
import MonthlyCharts from "@/components/MonthlyCharts";
import Card from "@/components/ui/Card";

const Dashboard = () => {
  return (
    <div className=" flex flex-col gap-2">
      <DashboardCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
        <AvailableAmount />
        <AvailableAmount />
        {/* <AvailableAmount /> Add another Table Type */}
      </div>
      <Card title="Monthly Chart">
        <MonthlyCharts />
      </Card>
      <Card title="Monthly Chart">
        <MonthlyCharts />
      </Card>
      <Card title="Monthly Chart">
        <MonthlyCharts />
      </Card>
    </div>
  );
};

export default Dashboard;
