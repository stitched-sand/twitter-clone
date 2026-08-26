import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTweet, getTweets } from "../services/tweet";

export const usePostTweet = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      content,
      tweetImage,
    }: {
      userId: string;
      content: string;
      tweetImage: File | null;
    }) => createTweet(userId, content, tweetImage),
    onSuccess:() => {
        queryClient.invalidateQueries({queryKey:["tweets"]})
    }
  });
};

export const useGetTweets = () => {
    return useQuery({
        queryKey: ["tweets"],
        queryFn: getTweets,
    })
}
