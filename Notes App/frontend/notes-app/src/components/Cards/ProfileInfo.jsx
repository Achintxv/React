import React from "react";
import { getInitials } from "../../utils/helper";

function ProfileInfo({ userInfo, onLogout }) {
  return (
    userInfo && (
      <div className="flex items-center gap-3">
        <div className="bg-zinc-200 w-8 h-8 flex items-center justify-center rounded-full">
          {getInitials(userInfo.fullName)}
        </div>

        <div>
          <p className="font-semibold">{userInfo.fullName}</p>
          <button onClick={onLogout} className="cursor-pointer underline">
            Logout
          </button>
        </div>
      </div>
    )
  );
}

export default ProfileInfo;
