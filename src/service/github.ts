import { AxiosResponse } from 'axios';
import { GitHubRepository } from '@/types/github';
import { api } from '@/service/api';

console.log(`API URL: ${import.meta.env.VITE_API_LOCAL as string}`);

export const GithubService = {
  getRepositories: async (username: string): Promise<AxiosResponse<GitHubRepository[]>> => {
    return await api.get(`/repos/${username}`);
  },
  getRepoById: async (username: string, id: number): Promise<AxiosResponse<GitHubRepository>> => {
    return await api.get(`/repos/${username}/${id}`);
  },
  getRepoByCount: async (username: string, count: number): Promise<AxiosResponse<GitHubRepository[]>> => {
    return await api.get(`/repos/${username}/c?count=${count}`);
  },
  getRepoByName: async (username: string, name: string): Promise<AxiosResponse<GitHubRepository>> => {
    return await api.get(`/repos/${username}/n?name=${name}`);
  }
}
