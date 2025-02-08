import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import type React from "react"
import Layout from "../../components/layout"

const RegisterBeasiswa = () => {
  const [formData, setFormData] = useState({
    ipk: "",
    semester: "",
    suratAktif: null,
    ukt: "",
    suratPermohonan: null,
    suratKeterangan: null,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.ipk || isNaN(formData.ipk) || formData.ipk < 0 || formData.ipk > 4) {
      newErrors.ipk = "IPK harus berupa angka antara 0 dan 4"
    }
    if (!formData.semester || isNaN(formData.semester) || formData.semester <= 0) {
      newErrors.semester = "Semester harus berupa angka positif"
    }
    if (!formData.suratAktif) {
      newErrors.suratAktif = "Surat Aktif wajib diunggah"
    }
    if (!formData.ukt || isNaN(formData.ukt) || formData.ukt <= 0) {
      newErrors.ukt = "UKT harus berupa angka positif"
    }
    if (!formData.suratPermohonan) {
      newErrors.suratPermohonan = "Surat Permohonan Beasiswa wajib diunggah"
    }
    if (!formData.suratKeterangan) {
      newErrors.suratKeterangan = "Surat Keterangan Belum Menerima Beasiswa wajib diunggah"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData)
      // Redirect to the dashboard (in a real app, this would happen after successful registration)
      navigate("/dashboard")
    }
  }

  const handleBack = () => {
    navigate('/dashboard') // Navigate back to the previous page
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto  p-10 rounded-lg shadow-lg mt-10">
        <nav className="mb-8">
          <ul className="flex space-x-4 text-blue-600">
            <li>
              <Link to="/dashboard" className="hover:underline">Dasbor</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">Daftar Beasiswa Berprestasi</li>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold mb-8 text-center">Daftar Beasiswa Berprestasi</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-10 mb-4">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ipk">
              IPK
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ipk"
              type="text"
              placeholder="IPK"
              name="ipk"
              value={formData.ipk}
              onChange={handleChange}
              required
            />
            {errors.ipk && <p className="text-red-500 text-xs italic">{errors.ipk}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
              Semester
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="semester"
              type="text"
              placeholder="Semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            />
            {errors.semester && <p className="text-red-500 text-xs italic">{errors.semester}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="suratAktif">
              Surat Aktif
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="suratAktif"
              type="file"
              name="suratAktif"
              onChange={handleChange}
              required
            />
            {errors.suratAktif && <p className="text-red-500 text-xs italic">{errors.suratAktif}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ukt">
              UKT
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ukt"
              type="text"
              placeholder="UKT"
              name="ukt"
              value={formData.ukt}
              onChange={handleChange}
              required
            />
            {errors.ukt && <p className="text-red-500 text-xs italic">{errors.ukt}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="suratPermohonan">
              Surat Permohonan Beasiswa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="suratPermohonan"
              type="file"
              name="suratPermohonan"
              onChange={handleChange}
              required
            />
            {errors.suratPermohonan && <p className="text-red-500 text-xs italic">{errors.suratPermohonan}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="suratKeterangan">
              Surat Keterangan Belum Menerima Beasiswa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="suratKeterangan"
              type="file"
              name="suratKeterangan"
              onChange={handleChange}
              required
            />
            {errors.suratKeterangan && <p className="text-red-500 text-xs italic">{errors.suratKeterangan}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Daftar
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleBack}
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterBeasiswa