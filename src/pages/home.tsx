import { Link } from "react-router-dom"
import { Info, UserPlus, LayoutDashboard } from "lucide-react"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <section className="text-center bg-gray-100 p-10 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold mb-6">Selamat Datang di Beasiswa Berprestasi</h1>
          <p className="text-2xl mb-8">Memberdayakan siswa berprestasi untuk mencapai potensi penuh mereka</p>
          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Daftar Sekarang
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Info className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4">Informasi</h2>
            <p className="mb-4">Tetap terupdate dengan berita dan jadwal terbaru</p>
            <Link to="/information" className="text-blue-600 hover:text-blue-800">
              Selengkapnya
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <UserPlus className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4">Pendaftaran</h2>
            <p className="mb-4">Buat akun untuk memulai aplikasi Anda</p>
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Daftar
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <LayoutDashboard className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-4">Aplikasi</h2>
            <p className="mb-4">Akses dasbor Anda dan ajukan beasiswa</p>
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
              Masuk
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomePage