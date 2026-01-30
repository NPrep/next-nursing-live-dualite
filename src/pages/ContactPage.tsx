import React from 'react';
import { Phone, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-brand-blue text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-blue-200 mb-8">
                Have questions about our courses or admission process? Reach out to us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900/50 p-3 rounded-lg">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-blue-100 text-sm">
                      +91 6377 6391 69
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-900/50 p-3 rounded-lg">
                    <Clock className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-blue-100 text-sm">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enquiry Form</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none" placeholder="Rahul" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none" placeholder="Kumar" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none" placeholder="+91 6377 6391 69" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none">
                    <option>GOLD Batch</option>
                    <option>Rapid Revision 2.0</option>
                    <option>Test Series</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none" placeholder="I want to enquire about..."></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 rounded hover:bg-red-700 transition-colors uppercase border-b-4 border-red-800 active:border-b-0 active:translate-y-1">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
