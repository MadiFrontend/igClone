import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreatUserAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      createUserAccount(user),
  });
};
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => signInAccount(user),
  });
};
