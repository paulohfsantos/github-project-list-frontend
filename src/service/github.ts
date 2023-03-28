import axios, { AxiosResponse } from 'axios';
import { GitHubRepository } from '@/types/github';

const url = process.env.NODE_ENV === 'development'
  ? process.env.VUE_APP_API_LOCAL as string
  : process.env.API_PROD as string;

// console.log(`API URL: ${process.env.API_LOCAL as string}`);

export const GithubService = {
  getRepositories: async (username: string): Promise<AxiosResponse<GitHubRepository[]>> => {
    return await axios.get(
      `http://localhost:8080/repos/${username}`
    );
  },
  getRepoById: async (username: string, id: number): Promise<AxiosResponse<GitHubRepository>> => {
    return await axios.get(
      `http://localhost:8080/repos/${username}/${id}`
    );
  },
  getRepoByCount: async (username: string, count: number): Promise<AxiosResponse<GitHubRepository[]>> => {
    return await axios.get(
      `http://localhost:8080/repos/${username}/c?count=${count}`
    );
  },
  getRepoByName: async (username: string, name: string): Promise<AxiosResponse<GitHubRepository>> => {
    return await axios.get(
      `http://localhost:8080/repos/${username}/n?name=${name}`
    );
  }
}
