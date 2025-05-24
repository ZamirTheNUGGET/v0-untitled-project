import { Mail, Calendar } from "lucide-react"

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Your Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="event-date" className="text-sm font-medium text-gray-700">
          Event Date (if applicable)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="event-date"
            type="date"
            className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      
      </div>
      <div className="space-y-2">
        <label htmlFor="event-type" className="text-sm font-medium text-gray-700">
          Event Type
        </label>
        <select
          id="event-type"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select an event type</option>
          <option value="birthday">Birthday Party</option>
          <option value="school">School Event</option>
          <option value="community">Community Festival</option>
          <option value="church">Church Event</option>
          <option value="corporate">Corporate Function</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about your event, questions, or special requirements..."
          required
        ></textarea>
      </div>
      <div className="flex items-center">
        <input
          id="newsletter"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
          Sign me up for the newsletter to receive special offers and updates
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 flex items-center justify-center gap-2 rounded-md"
      >
        <Mail className="h-5 w-5" />
        Send Message
      </button>
    </form>
  )
}
