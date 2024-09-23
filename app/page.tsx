export default async function Home() {
  const getdata = async () => {
    const res = await fetch("http://localhost:3000/api/user");
    const d = await res.json();
    return d;
  };
  const data = await getdata();
  return (
    <div className="text-red-900 ">
      {" "}
      {data.map((el: any) => (
        <div>{el.username}</div>
      ))}
      hi
    </div>
  );
}
