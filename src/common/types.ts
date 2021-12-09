// todo fix this
export type Tag = string;

export interface User {
  id: string;
  githubId?: string;
  beheshtiId?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

interface Comment {
  id: string;
  user: User;
  context: string;
}

interface BlogFile {
  name: string;
  size: string;
  url: string;
}

export interface SimpleBlog {
  id: string;
  title: string;
  tags: Array<Tag>;
  author: Partial<User>;
  readme: string;
  likesCount: number;
  comments: Array<Comment>;
  files?: Array<BlogFile>;
}

export interface GitBlog extends SimpleBlog {
  repoUrl: string;
  repoTitle: string;
  description: string;
  starsCount: number;
  forksCount: number;
}

export type Blog = GitBlog | SimpleBlog;

export const isGitBlog = (blog: Blog): blog is GitBlog => (blog as GitBlog).repoUrl !== undefined;
