import Card from "./ui/Card";

const AvailableAmount = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm ">
          {/* HEADER */}
          <thead>
            <tr className="border">
              <th className="text-left py-2 px-2 font-semibold border-r">
                Available Amount
              </th>
              <th className="text-left py-2 px-2 font-semibold border-r">
                Cash In Hand
              </th>
              <th className="text-left py-2 px-2 font-semibold">Bank Pay</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="">
            <tr className="border">
              <td className="py-2 px-2 border-r">2,745,556.00</td>
              <td className="py-2 px-2 border-r">12,562,444.25</td>
              <td className="py-2 px-2 border-r">126,325.00</td>
            </tr>

           
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default AvailableAmount;
