import { api } from "../lib/api";

export interface Comment {
  id_cafeteria: number;
  id_usuario: number;
  id: number;
  avatarImg: string;
  username: string;
  comment_date: string;
  comment: string;
}

interface CommentsResponse {
  error: string;
  result: Comment[];
}

export const getComments = async () => {
  const apiUrl = "/api/comments";
  const { data } = await api.get<CommentsResponse>(apiUrl);
  return data;
};
