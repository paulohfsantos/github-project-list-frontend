import { GithubService } from "@/service/github";
import { GitHubRepository } from "@/types/github";
import { defineStore } from "pinia";
import { ExceptionHander } from "@/utils/ExceptionHandler";
import { useLoading } from "./loading";

const { setLoading } = useLoading();

export const useGithub = defineStore('github', {
  state: () => ({
    repositories: [] as GitHubRepository[],
    repository: {} as GitHubRepository,
    loading: false,
  }),

  actions: {
    async getRepoUser(username: string) {
      setLoading(true);
      try {
        const response = await GithubService.getRepositories(username);
        this.repositories = response.data;

        console.log(this.repositories);
      }
      catch (error: unknown) {
        ExceptionHander.handle(error as Error);
      }
      finally { setLoading(false) }
    },

    async getRepositoryByCount(username: string, count: number) {
      setLoading(true);
      try {
        const response = await GithubService.getRepoByCount(username, count);
        this.repositories = response.data;
      }
      catch (error: unknown) {
        ExceptionHander.handle(error as Error);
      }
      finally { setLoading(false) }
    },

    async getRepositoryById(username: string, id: number) {
      setLoading(true);
      try {
        const response = await GithubService.getRepoById(username, id);
        this.repository = response.data;
      }
      catch (error: unknown) {
        ExceptionHander.handle(error as Error);
      }
      finally { setLoading(false) }
    },
  }
});
