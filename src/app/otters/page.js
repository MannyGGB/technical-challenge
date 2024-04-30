import Link from "next/link";
import { otterData } from "@/lib/data";

export default function OttersPage() {
  return (
    <>
      <h1 className="text center">Our furry friends!</h1>
      <div className="flex flex-col items-center m-4">
        {otterData.map((otter) => (
          <div key={otter.id}>
            <Link href={`/otters/${otter.slug}`} className="text-blue-800">
              {otter.name}
            </Link>

            <p>Bio: {otter.description}</p>
            <p>Age: {otter.age}</p>
            <h3>Agency: {otter.agency}</h3>
          </div>
        ))}
      </div>
      <Link href={`/`} className="text-blue-800">
        Back to Homepage
      </Link>
    </>
  );
}
