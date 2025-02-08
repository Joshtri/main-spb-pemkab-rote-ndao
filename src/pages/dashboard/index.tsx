import { Link } from "react-router-dom"
import { User, FileText, CheckCircle } from "lucide-react"
import Layout from "../../components/layout"

const DashboardPage = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Dasbor Pelamar</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Progres Aplikasi</h2>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: "33%" }}></div>
          </div>
          <div className="space-y-4">
            <p className="flex items-center text-xl">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" /> Langkah 1: Informasi Pribadi
            </p>
            <p className="flex items-center text-xl">
              <CheckCircle className="w-6 h-6 text-gray-400 mr-3" /> Langkah 2: Pengajuan Dokumen
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <User className="w-10 h-10 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Informasi Pribadi</h3>
            <Link to="/perbarui-informasi" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Perbarui Informasi
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <FileText className="w-10 h-10 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Pengajuan Dokumen</h3>
            <Link to="/pengajuan-dokumen-beasiswa" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
              Unggah Dokumen
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <CheckCircle className="w-10 h-10 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Status Aplikasi</h3>
            <p className="font-semibold text-yellow-500 text-center">Sedang Berlangsung</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage