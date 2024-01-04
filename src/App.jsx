import Navbar from "@/components/layouts/Navbar";
import Container from "@/components/layouts/Container";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/api";
import CardList from "@/components/contents/CardList";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <h1 className="mb-6 text-center mt-4">Product List</h1>
        {!loading ? (
          <CardList items={items} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        )}
      </Container>
    </>
  );
};

export default App;
