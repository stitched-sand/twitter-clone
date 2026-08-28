import Comments from "@/components/Comments";
import GoBackButton from "@/components/GoBackButton";
import ReplyPost from "@/components/ReplyPost";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
} from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { supabase } from "../../../../../lib/SupabaseClient";
import { Tweet } from "../../../../../types/types";
import moment from "moment";

const getTweet = async (id: string) => {
  const { error, data } = await supabase
    .from("tweets")
    .select(`
      *,
      profiles (
        id,
        name,
        username,
        avatar_url
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
};

export default async function Page({
  params,
}: {
  params: Promise<{ postid: string }>;
}) {
  const { postid } = await params;

  const tweet: Tweet | null = await getTweet(postid);

  if (!tweet) {
    return (
      <div className="text-white p-4">
        Post not found.
      </div>
    );
  }

  if (!tweet.profiles) {
    return (
      <div className="text-white p-4">
        This post doesn't have a profile associated with it.
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-3 px-4 py-2">
        <div className="text-white flex items-center gap-3">
          <GoBackButton />
          <span className="font-bold text-xl">Post</span>
        </div>

        <button className="border border-border rounded-full px-4 py-1 cursor-pointer text-white">
          Reply
        </button>
      </div>

      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src={tweet.profiles.avatar_url || "/default-avatar.png"}
          alt="profile-pic"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />

        <div className="w-full">
          <div className="flex justify-between gap-1 text-sm">
            <div className="flex gap-1 items-center text-sm">
              <span className="text-white font-bold">
                {tweet.profiles.name}
              </span>

              <span className="text-secondary-text">
                @{tweet.profiles.username}
              </span>

              <span className="text-secondary-text">
                {moment(tweet.created_at).fromNow()}
              </span>
            </div>

            <BsThreeDots className="text-secondary-text" />
          </div>

          {tweet.content && (
            <div className="text-white">
              {tweet.content}
            </div>
          )}

          {tweet.image_url && (
            <div>
              <Image
                src={tweet.image_url}
                alt="post-image"
                width={1800}
                height={1800}
                className="h-70 md:h-130 w-full rounded-lg border border-border object-cover"
              />
            </div>
          )}

          <div className="flex justify-between my-4">
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegComment />
              <span className="text-sm">1.5k</span>
            </div>

            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FiRepeat />
              <span className="text-sm">7.5k</span>
            </div>

            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegHeart />
              <span className="text-sm">2.5k</span>
            </div>

            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <IoIosStats />
              <span className="text-sm">5k</span>
            </div>

            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>

      <ReplyPost />
      <Comments />
    </div>
  );
}
