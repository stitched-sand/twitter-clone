import { supabase } from "../lib/SupabaseClient";

export const createComment = async (
  userId: string,
  tweetId: string,
  content: string,
) => {
    const {error: insertError} = await supabase.from("comments").insert({
        user_id: userId,
        tweet_id: tweetId,
        content
    })

    if(insertError) {
        console.log("commentInserError:, insertError.message");
        return;
    }

    return true;
};
