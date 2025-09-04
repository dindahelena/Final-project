import Link from 'next/link';

export default function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-lg shadow">
      <img src={destination.imageUrl} alt={destination.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{destination.name}</h3>
        <Link href={`/destination/${destination.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">Detail</button>
        </Link>
      </div>
    </div>
  );
}
