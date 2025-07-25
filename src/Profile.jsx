import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="card">
      <div className="bubbles"></div>

      <h1 className="title">If You Make A Mess, We Clean It UP</h1>
      <img src="/mom.jpg" alt="Brigitte Williams" className="image" />

      <div className="textOverlay">
        <h2 className="name">Brigitte Williams</h2>
        <p><strong>Occupation:</strong> Professional Home Cleaner</p>
        <p><strong>Fun Fact:</strong> Has four grandchildren</p>
      </div>

      <div className="services">
        <h3>Cleaning Services Offered</h3>
        <ul>
          <li>🧼 Deep Cleaning (kitchens, bathrooms, high-touch surfaces)</li>
          <li>🚚 Move-In / Move-Out Cleaning</li>
          <li>🐾 Pet Stain & Odor Removal</li>
          <li>🪟 Window & Blind Cleaning</li>
          <li>🧹 Weekly & Monthly Maintenance Plans</li>
        </ul>
      </div>

      <button onClick={() => setShowBio(!showBio)} className="button">
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {showBio && (
        <p className="bio">
          Brigitte Williams is a seasoned professional home cleaner with over 40 years of experience transforming living spaces. Known for her precision and dedication, she specializes in deep cleans, move-in/move-out services, and restoring order to even the most chaotic environments. Whether tackling grime in high-touch areas or revitalizing carpets and surfaces, Brigitte brings passion and excellence to every job she takes on. She believes that a clean home is the foundation of comfort, wellness, and pride — and her clients couldn’t agree more.
        </p>
      )}
    </div>
  );
}

export default Profile;
