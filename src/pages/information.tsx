import { Calendar, Bell, Phone } from "lucide-react"

const Information = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Scholarship Information</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Calendar className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold">Schedule</h2>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Application Opens: January 1, 2025</li>
          <li>Application Deadline: March 31, 2025</li>
          <li>Document Verification: April 1-30, 2025</li>
          <li>Interview Process: May 1-15, 2025</li>
          <li>Results Announcement: June 1, 2025</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Bell className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold">Latest News</h2>
        </div>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">New Partnerships Announced</h3>
            <p className="text-sm text-gray-600">
              We're excited to announce new partnerships with leading universities...
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Application Tips Webinar</h3>
            <p className="text-sm text-gray-600">
              Join us for a webinar on how to create a strong scholarship application...
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold">Contact Us</h2>
        </div>
        <p>Email: info@beasiswaberprestasi.com</p>
        <p>Phone: +62 123 456 7890</p>
        <p>Address: Jl. Pendidikan No. 123, Jakarta, Indonesia</p>
      </div>
    </div>
  )
}

export default Information

