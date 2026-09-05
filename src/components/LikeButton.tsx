import React from "react";
import { FaHeart } from "react-icons/fa6";
import { useToggleLike, useUserLike } from "../../custom-hooks/useLike";

type LikeButtonProps = {
    tweetId: string,
    userId: string | undefined
}

export default function LikeButton({tweetId, userId}: LikeButtonProps) {
  
    const { data:hasLiked } = useUserLike(userId, tweetId);
  const { mutate } = useToggleLike();

  return (
    <>
    {hasLiked ? (
        <button onClick = {() => mutate({userId, tweetId, hasLiked:!!hasLiked})} className="text-pink-700 flex items-center gap-1 hover:text-pink-400 cursor-pointer">
      <FaHeart />
      <span className="text-sm">15k</span>
    </button>
    ) : (
        <button onClick={() => mutate({userId, tweetId, hasLiked:!!hasLiked}) } className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
      <FaHeart />
      <span className="text-sm">15k</span>
    </button>
    )}
    </>
  );
}
