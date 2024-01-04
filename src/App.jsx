import Navbar from "@/components/layouts/Navbar";
import Container from "@/components/layouts/Container";
import { useEffect, useState } from "react";
import { getAllData } from "@/services/api";
import CardList from "@/components/contents/CardList";
import getDummyData from "@/utilities/dummydata";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import FilterBar from "@/components/layouts/FilterBar";
import SortBar from "@/components/layouts/SortBar";
const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    category: "all",
    approvalStatus: "all",
    attachment: "all",
    discount: "all",
  });
  const [sort, setSort] = useState("asc");

  const filterHandler = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(getDummyData(10));
      setLoading(false);
    }, 500);
  }, []);

  // useEffect(() => {
  //   getAllData()
  //     .then((res) => {
  //       setItems(res.data.slice(0, 10));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  let itemsFiltered = items
    .filter((item) => {
      if (filter.category === "all") return true;
      return item.type === Number(filter.category);
    })
    .filter((item) => {
      if (filter.approvalStatus === "all") return true;
      return item.status === Number(filter.approvalStatus);
    })
    .filter((item) => {
      if (filter.attachment === "all") return true;
      return item.attachment === Number(filter.attachment);
    })
    .filter((item) => {
      if (filter.discount === "all") return true;
      if (filter.discount === "0") return item.discount === 0;
      return item.discount > 0;
    });

  if (sort === "asc") {
    itemsFiltered = itemsFiltered.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "desc") {
    itemsFiltered = itemsFiltered.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <h1 className="mb-12 text-center mt-4">Product List</h1>

        <FilterBar
          className="mb-3"
          filter={filter}
          filterHandler={filterHandler}
        />
        <SortBar className="mb-3" sort={sort} sortHandler={sortHandler} />
        {!loading ? (
          <CardList items={itemsFiltered} />
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
