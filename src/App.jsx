import Navbar from "@/components/layouts/Navbar";
import Container from "@/components/layouts/Container";
import Card from "@/components/contents/Card";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/api";
const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getAllData()
      .then((res) => {
        setDatas(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <h1 className="mb-12 text-center mt-4">Daftar produk</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-2">
          {datas && datas.length > 0 ? (
            datas.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                type={data.type}
                name={data.name}
                status={data.status}
                price={data.price}
                discount={data.discount}
                attachment={data.attachment}
              />
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default App;
