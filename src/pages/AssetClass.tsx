import { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { useEffect } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";

interface Commitment {
  id: number;
  asset_class: string;
  firm_id: number;
  currency: string;
  amount: string;
}

export const AssetClass = () => {
  const [assetClass, setAssetClass]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("pe");

  const [assets, setAssets]: [Commitment[], Dispatch<SetStateAction<[]>>] =
    useState([]);
  const { id } = useParams();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    useState<string>("");

  useEffect(() => {
    async function fetchApi() {
      fetch(`${baseUrl}/api/investor/commitment/${assetClass}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setAssets(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
    fetchApi();
  }, [assetClass, id]);

  //localhost:8000/api/investor/commitment/pe/3611
  return (
    <div className="asset-container">
      <Dropdown assetClassSetter={setAssetClass} />
      {loading && <h3>Loading...</h3>}
      {error !== "" && assets.length === 0 ? (
        <h4>No records found</h4>
      ) : (
        <div className="flex flex-wrap">
          {assets.map((ast) => (
            <Card id={ast.id} currency={ast.currency} amount={ast.amount} />
          ))}
        </div>
      )}
    </div>
  );
};
