import { useState } from "react";

const tabs = ["Hesabım", "Şirket", "Ekip Üyeleri", "Faturalama"];
// Tabs bileşenini yeniden düzenleyin ve aşağıdaki görevleri tamamlayın:
// 1. State setter fonksiyonunu doğru şekilde kullanarak geçerli sekmeyi (currentTab) güncelleyin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Aktif sekmenin arka plan rengini daha belirgin hale getirin. (örneğin: "bg-indigo-200")
//    - Sekmeler arasındaki boşluğu artırmak için "space-x-6" kullanın.
//    - Aktif olmayan sekmelere hover sırasında hafif büyüme efekti ekleyin. (örneğin: "hover:scale-105")
// 3. Kullanıcı farklı sekmeye tıkladığında, geçerli sekmenin adını ekranda dinamik olarak görüntüleyin. (örneğin: "Şu anda 'Ekip Üyeleri' sekmesindesiniz.")
// 4. Sekmelerin içeriğini (örneğin: "Hesabım" sekmesi için form, "Faturalama" sekmesi için tablo) dinamik olarak değiştirmek için içerik alanı ekleyin.

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className=" flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900 backdrop-blur p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Giriş Yap
        </h2>

        <div className="flex flex-col gap-1 mb-4">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            E‑posta
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@mail.com"
            className="h-11 w-full rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800 px-4 outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1 mb-6">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Şifre
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            className="h-11 w-full rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800 px-4 outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition active:scale-[.98] shadow-md"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

const Table = () => {
  const data = [
    { id: 1, name: "Namık Korona", email: "namık@mail.com" },
    { id: 2, name: "Eda Yılmaz", email: "eda@mail.com" },
    { id: 3, name: "Samet Demir", email: "samet@mail.com" },
  ];

  return (
    <div className=" flex items-center justify-center  p-6">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900 backdrop-blur p-6 shadow-xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Kullanıcı Tablosu
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-neutral-800">
                <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">
                  ID
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">
                  Ad Soyad
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">
                  E-posta
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, i) => (
                <tr
                  key={user.id}
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-neutral-900"
                      : "bg-gray-50 dark:bg-neutral-800"
                  }
                >
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                    {user.id}
                  </td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("Hesabım");
  // let currentTab = "Hesabım;

  return (
    <div className="flex flex-col justify-center items-center space-y-6 my-8">
      <div className="flex  space-x-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setCurrentTab(tab);
            }}
            className={`${
              tab === currentTab
                ? "bg-indigo-200 text-indigo-700"
                : "text-gray-500 hover:text-gray-700 hover:scale-110 transition duration-300"
            } rounded-md px-3 py-2 text-sm font-medium `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>Şu anda '{currentTab}' sekmesindesiniz.</div>
      {currentTab === "Hesabım" ? <Form /> : null}
      {currentTab === "Faturalama" ? <Table /> : null}
    </div>
  );
}
