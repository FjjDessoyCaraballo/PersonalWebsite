import Image from "next/image";

export default function Home() {
  return (
    <div className="flex grid py-25 grid-cols-8 gap-4">
      <div className="col-start-3">Who is this handsome fella?</div>
      <div className="col-start-6 col-span4">image placeholder</div>
    </div>
  );
}
