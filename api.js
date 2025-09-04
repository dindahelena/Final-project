const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c"; // dari Postman collection

async function loadDestinasi() {
  const container = document.getElementById("destinasi-list");
  container.innerHTML = "<p class='text-gray-500'>Loading...</p>";

  try {
    const res = await fetch(`${BASE_URL}/api/v1/activities`, {
      headers: { "apiKey": API_KEY }
    });
    const data = await res.json();

    container.innerHTML = data.data.map(item => `
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${item.imageUrls[0]}" alt="${item.title}" class="w-full h-40 object-cover"/>
        <div class="p-4">
          <h3 class="font-bold text-lg mb-2">${item.title}</h3>
          <p class="text-sm text-gray-600">${item.city}, ${item.province}</p>
          <button class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">Detail</button>
        </div>
      </div>
    `).join("");
  } catch (err) {
    container.innerHTML = "<p class='text-red-500'>Gagal memuat data.</p>";
    console.error(err);
  }
}
