import Navbar from "@/components/layouts/Navbar";
import Container from "@/components/layouts/Container";
import Card from "@/components/contents/Card";
const App = () => {
  const datas = [
    {
      id: 525,
      type: 1,
      name: "SIGS.MARK.F.III.2023.000334",
      status: 0,
      price: 1050000,
      discount: 0,
      attachment: 0,
    },
    {
      id: 526,
      type: 1,
      name: "SIGS.MARK.F.III.2023.000335",
      status: 1,
      price: 855000,
      discount: 0,
      attachment: 1,
    },
    {
      id: 527,
      type: 4,
      name: "SIGS.MARK.L.III.2023.000058",
      status: 1,
      price: 1020000,
      discount: 20000,
      attachment: 1,
    },
    {
      id: 528,
      type: 18,
      name: "SIGS.MARK.L.III.2023.000059",
      status: 1,
      price: 330000,
      discount: 0,
      attachment: 0,
    },
    {
      id: 529,
      type: 1,
      name: "SIGS.MARK.F.III.2023.000336",
      status: 1,
      price: 1500000,
      discount: 75000,
      attachment: 1,
    },
  ];

  return (
    <>
      <Navbar />
      <Container className="py-4">
        <h1 className="mb-12 text-center mt-4">Daftar produk</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-2">
          {datas.map((data) => (
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
          ))}
        </div>
      </Container>
    </>
  );
};

export default App;
