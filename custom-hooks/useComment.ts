import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createComment,
  deleteComment,
  getComments,
} from "../services/comments";

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

export const useGetComments = (tweetId: string) => {
  return useQuery({
    queryFn: () => getComments(tweetId),
    queryKey: ["comments", tweetId],
    enabled: !!tweetId,
  });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      tweetId,
      commentId,
    }: {
      tweetId: string;
      commentId: string;
    }) => deleteComment(commentId),
    onSuccess: (data, variables) => {
        queryClient.invalidateQueries({
        queryKey: ["comments", variables.tweetId],
      });
    }
  });
};
