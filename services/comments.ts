import { supabase } from "../lib/SupabaseClient";

export const createComment = async (
  userId: string,
  tweetId: string,
  content: string,
) => {
  const { error: insertError } = await supabase.from("comments").insert({
    user_id: userId,
    tweet_id: tweetId,
    content,
  });

  if (insertError) {
    console.log("commentInserError:", insertError.message);
    return;
  }

  return true;
};

export const getComments = async (tweetId: string) => {
  const { data, error } = await supabase
    .from("comments")
    .select("*, profiles (id, name, username, avatar_url)")
    .eq("tweet_id", tweetId)
    .order("created_at", { ascending: false });

    if (error) {
  console.log("fetchCommentsError", error.message);
  return [];
}

    return data ?? [];
};
