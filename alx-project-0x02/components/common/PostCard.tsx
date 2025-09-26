import React from 'react';
import { type PostProps } from '@/interfaces';

// Destructure the post data directly from props
const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden m-4 w-full md:w-80 border-t-4 border-blue-600">
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-gray-900 mb-2 capitalize leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {body}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 py-1 px-2 rounded-full">
                User ID: {userId}
            </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;