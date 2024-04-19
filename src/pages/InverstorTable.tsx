import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Investor {
  firm_id: number;
  firm_name: string;
  firm_type: string;
  date_added: string;
  address: string;
}

const defaultInvestors: Investor[] = [];

export const InvestorTable = () => {
  const [investors, setInvestors]: [
    Investor[],
    (investors: Investor[]) => void
  ] = useState(defaultInvestors);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Investor[]>("http://127.0.0.1:8000/api/investors", {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      })
      .then((response) => {
        setInvestors(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error: string;
        if (axios.isAxiosError(ex)) {
          error = "Backend service might be down!";
        } else {
          error = axios.isCancel(ex)
            ? "Request Cancelled"
            : ex.code === "ECONNABORTED"
            ? "A timeout has occurred"
            : ex.response.status === 404
            ? "Resource Not Found"
            : "An unexpected error has occurred";
        }

        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative overflow-x-auto">
      {error !== "" ? (
        <p>{error}</p>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
                data-testid="investorHeader"
              >
                Firm Id
              </th>
              <th scope="col" className="px-6 py-3">
                Firm Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date Added
              </th>
              <th scope="col" className="px-6 py-3">
                Adress
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <p> Loading ...</p>
            ) : (
              investors.map((investor) => (
                <tr
                  key={investor.firm_id}
                  className="bg-white dark:bg-gray-800 cursor-pointer"
                  onClick={() => navigate(`/investor/${investor.firm_id}`)}
                >
                  <td className="px-6 py-4" data-testid="firmId">
                    {investor.firm_id}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {investor.firm_name}
                  </th>
                  <td className="px-6 py-4">{investor.firm_type}</td>
                  <td className="px-6 py-4">{investor.date_added}</td>
                  <td className="px-6 py-4">{investor.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
