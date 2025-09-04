import { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';

export default function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/categories`)
      .then(res => res.json())
      .then(data => setDestinations(data.data || []))
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2 className="font-bold text-xl mb-4">Destinasi Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
}
