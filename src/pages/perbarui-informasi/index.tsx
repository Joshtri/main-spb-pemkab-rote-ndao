import { useState, ChangeEvent, FormEvent } from "react"
import Layout from "../../components/layout"

interface FormData {
  nama_lengkap: string;
  email: string;
  password: string;
}

interface Errors {
  nama_lengkap?: string;
  email?: string;
  password?: string;
}

const PerbaruiInformasi = () => {
  const [formData, setFormData] = useState<FormData>({
    nama_lengkap: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    const newErrors: Errors = {}
    if (!formData.nama_lengkap) {
      newErrors.nama_lengkap = "Nama lengkap wajib diisi"
    }
    if (!formData.email) {
      newErrors.email = "Email wajib diisi"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email tidak valid"
    }
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password harus minimal 6 karakter"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData)
      alert("Informasi pribadi berhasil diperbarui!")
    }
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-gray-100 p-10 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Perbarui Informasi Pribadi</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-10 mb-4">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama_lengkap">
              Nama Lengkap
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nama_lengkap ? 'border-red-500' : ''}`}
              id="nama_lengkap"
              type="text"
              placeholder="Nama Lengkap"
              name="nama_lengkap"
              value={formData.nama_lengkap}
              onChange={handleChange}
              required
            />
            {errors.nama_lengkap && <p className="text-red-500 text-xs italic">{errors.nama_lengkap}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password (opsional)
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
              id="password"
              type="password"
              placeholder="Biarkan kosong jika tidak ingin mengubah password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Perbarui
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default PerbaruiInformasi