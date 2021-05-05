import DonutChart from "components/DonutChart";
import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import Footer from "components/Footer";


function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">DashBoard de Vendas</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa desucesso (%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Todas Vendas</h5>
          <DonutChart />
        </div>
      </div>

      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
