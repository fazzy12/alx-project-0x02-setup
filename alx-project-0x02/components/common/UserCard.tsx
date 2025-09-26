import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address, company }) => {
  // Format the full address for display
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden m-4 w-full md:w-96 border-t-4 border-purple-600">
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 italic mb-4">@{username}</p>

        <div className="space-y-3 text-sm">
          <p>
            <span className="font-semibold text-gray-700">Email:</span> 
            <a href={`mailto:${email}`} className="text-purple-600 hover:underline ml-1">{email}</a>
          </p>
          <p>
            <span className="font-semibold text-gray-700">Phone:</span> 
            <a href={`tel:${phone.split(' ')[0]}`} className="text-purple-600 hover:underline ml-1">{phone.split(' ')[0]}</a>
          </p>
          <p>
            <span className="font-semibold text-gray-700">Website:</span> 
            <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline ml-1">{website}</a>
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="font-semibold text-gray-700 mb-1">Company:</p>
          <p className="text-sm text-gray-600 font-medium">{company.name}</p>
          <p className="text-xs text-gray-500 italic">"{company.catchPhrase}"</p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="font-semibold text-gray-700 mb-1">Address:</p>
          <p className="text-sm text-gray-600">{fullAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;