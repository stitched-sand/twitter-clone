import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../services/comments";

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      tweetId,
      content,
    }: {
      userId: string;
      tweetId: string;
      content: string;
    }) => createComment(userId, tweetId, content),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["comments", variables.tweetId],
      });
    },
  });
};
